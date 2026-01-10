import { createSignal } from "solid-js"

export default function Home() {
  const [currentPassword, setCurrentPassword] = createSignal("");
  const [newPassword, setNewPassword] = createSignal("");
  const [confirmPassword, setConfirmPassword] = createSignal("");
  const onInput = (f, e) => f(e.currentTarget.value);
  const noPasswordIsBlank = () => ![currentPassword(), newPassword(), confirmPassword()].includes("")
  const newAndConfirmMatch = () => newPassword() === confirmPassword();
  const allowSubmit = () => noPasswordIsBlank() && newAndConfirmMatch();
  const onClick = () => console.log(currentPassword(), newPassword());

  return (
    <main>
      <div><img src="logo.png" /></div>
      <h1>Reset Password</h1>
      <p>Enter the current password for the account associated with b*******r@hotmail.com.</p>

      <input 
        type="text" 
        name="currentPassword" 
        placeholder="Current Password..."
        value={currentPassword()}
        on:input={e => onInput(setCurrentPassword, e)}
      />

      <p>Enter the new password and password confirmation. Both the new password and password confirmation must match.</p>

      <input 
        type="text" 
        name="newPassowrd" 
        placeholder="New Password..."
        value={newPassword()}
        on:input={e => onInput(setNewPassword, e)}
      />

      <input 
        type="text" 
        name="newConfirm" 
        placeholder="Confirm Password..."
        value={confirmPassword()}
        on:input={e => onInput(setConfirmPassword, e)}
      />

      <input 
        type="button" 
        id="savePassword" 
        name="savePassword" 
        value="GO!"
        disabled={!allowSubmit()}
        classList={{allowSubmit: allowSubmit()}}
        on:click={onClick}
      />
    </main>
  );
}
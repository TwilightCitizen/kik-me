import Main from "~/components/Main";
import Logo from "~/components/Logo";
import Lock from "~/components/Lock";
import ChangePwLink from "~/components/ChangePwLink";
import ChangePwQrCode from "~/components/ChangePwQrCode";
import Copyright from "~/components/Copyright";

export default function Email() {
  return (
    <Main
      style={{ 
        "width": "calc(90% - 0.5in)",
        "flex-grow": "1",
        "padding": "0.5in"
      }}
    >
      <Logo style={{ "text-align": "center" }} />
      <Lock/>
      <p style={{ "text-align": "center","font-size": "14pt" }}>We noticed unusual activity on your account. If that was not you, then you should change your password immediately to keep your account safe.</p>
      <p style={{ "text-align": "center","font-size": "14pt" }}>Click the link below or scan the QR code  to go to your account to change your password.</p>
      <ChangePwLink/>
      <ChangePwQrCode/>
      <p style={{ "text-align": "center", "font-size": "14pt" }}><b>Don't get scammed!</b> We will never ask for your account details by email or chat. If someone claiming to be from Kik does this, it isn't us.</p>
      <hr style={{ "border": "0.3px solid #c3c3c3", "width": "100%" }}/>
      <Copyright/>
    </Main>
  );
}
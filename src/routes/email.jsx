import Main from "~/components/Main";
import Logo from "~/components/Logo";
import Lock from "~/components/Lock";

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
      <p style={{ "text-align": "center","font-size": "14pt" }}>We noticed some unusual activity on your account. If this was you, then there is no need to take any action. But, if you did not perform this activity, then you should reset your password immediately to keep your account safe.</p>

      <p style={{ "text-align": "center" }}>
        <a 
          href="/reset-password"

          style={{
            "display": "inline-block",
            "font-weight": "bold",
            "font-size": "26pt",
            "line-height": "55px",
            "padding": "0 0.125in",
            "text-decoration": "none",
            "color": "#ffffff",
            "height": "55px",
            "border": "none",
            "border-radius": "0.125in",
            "background-color": "#8383ff"
          }}
        >
          Reset Password
        </a>
      </p>

      <p style={{ "text-align": "center", "font-size": "14pt" }}><b>Don't get scammed!</b> We will never ask you to send us your password by email or chat. If someone claiming to be from Kik does this, you rest assured it isn't us.</p>

      <hr style={{ "border": "0.3px solid #c3c3c3", "width": "100%" }}/>

      <p 
        style={{ 
          "font-size": "10pt", 
          "text-align": "center" 
        }}
      >
        &copy; Kik Interactive Inc. 2019. All rights reserved.
      <br/>
        kik.com | 1222 6th St, Santa Monica CA 94041 | US
      </p>
    </Main>
  );
}
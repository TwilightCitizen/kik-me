import { onMount } from "solid-js";
import Main from "~/components/Main";
import Title from "~/components/Title";
import Logo from "~/components/Logo";

export default function Expired() {
  onMount(() => {
    setTimeout(() => {
      window.location.href = "https://help.kik.com/hc/en-us";
    }, 5000);
  });
  
  return (
    <Main>
      <Logo/>
      <Title>Expired Link</Title>
      <p>Oops. It looks like that link is no longer valid.</p>
      <p>You will be redirected to our <a href="https://help.kik.com/hc/en-us">support articles</a> in a moment. Please click the link if you're not automatically redirected.</p>
    </Main>
  );
}
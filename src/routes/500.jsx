import Main from "~/components/Main";
import Title from "~/components/Title";
import Logo from "~/components/Logo";

export default function Home() {
  return (
    <Main>
      <Logo/>
      <Title>Internal Server Error</Title>
      <p>Oops. This is taking longer than usual.</p>
      <p>A temporary problem is preventing the completion of your request. We're on it! Please try again later.</p>
    </Main>
  );
}
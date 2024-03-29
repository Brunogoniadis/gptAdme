import { Main } from "../../styles/Main";
import { Content, RedirectContent } from "./styles";

import Button from "../../components/Button/Button";

export const Login = () => {
  return (
    <Main

    >
      <Content>
        <h1>Seu Readme feito com IA</h1>
        <hr className="horizontal-line" />
        <h3> Diga olâ para o robo!</h3>
        <p>🤖 Seu código totalmente explicado pela ia</p>
        <p>💅 Formatado em Markdown, compatível com GitHub</p>
        <p>🚀 Rapído e semântico</p>
      </Content>
      <RedirectContent>
        <div className="button-container">
          <p>Login</p>
          <Button></Button>
        </div>
        <div className="button-container">
          <p>Sobre o Robo</p>
        </div>
      </RedirectContent>
    </Main>
  );
};
export default Login;

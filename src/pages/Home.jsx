import "./Home.css";
import { useState } from "react";

import Button from "../components/Button";
import InputLogin from "../components/InputLogin";
import NameLogin from "../components/NameLogin";
import TextCadastrar from "../components/TextCadastrar";

const Home = () => {
  const [InputValueEmail, setInputValueEmail] = useState("");
  const [InputValuePassword, setInputValuePassword] = useState("");
  const InputType = ("password");

  const InputChangeEmail = (e) => {
    setInputValueEmail(e.target.value);
  };

  const InputChangePassword = (e) => {
    setInputValuePassword(e.target.value);
  };

  const ClickCadastar = () => {
    setInputValueEmail("");
    setInputValuePassword("");
  };

  return (
    <section className="section-container">
      <div className="main-container">
        <div className="container-login-email">
          <TextCadastrar></TextCadastrar>
          <NameLogin>E-mail</NameLogin>
          <InputLogin
            onChange={InputChangeEmail}
            value={InputValueEmail}
          ></InputLogin>
        </div>

        <div className="container-login-password">
          <NameLogin>Senha</NameLogin>
          <InputLogin
            onChange={InputChangePassword}
            value={InputValuePassword}
            type={InputType}
          ></InputLogin>
        </div>

        <Button onClick={ClickCadastar}>Cadastrar</Button>
      </div>
    </section>
  );
};

export default Home;

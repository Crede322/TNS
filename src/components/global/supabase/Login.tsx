import { useState } from "react";
import BlueButton from "../../shared/BlueButton";
import classes from "./Auth.module.css";

interface LoginProps {
  handleSwitch: () => void;
}

const Login: React.FC<LoginProps> = ({ handleSwitch }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [formState, setFormState] = useState(0);
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [formAlert, setFormAlert] = useState("");

  const handleEmailFocus = () => {
    setEmailFocus(!emailFocus);
  };
  const handlePasswordFocus = () => {
    setPasswordFocus(!passwordFocus);
  };

  return (
    <form
      onSubmit={handleEmailFocus}
      className={classes.form_widget}
      id="loginForm"
    >
      <input
        id="login_form_email"
        className={classes.input}
        type="email"
        value={email}
        required={true}
        onChange={(e) => setEmail(e.target.value)}
        onFocus={handleEmailFocus}
        onBlur={handleEmailFocus}
        style={{
          marginBottom: "15px",
          boxShadow: emailFocus
            ? "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
            : "none",
        }}
        placeholder="E-mail"
      />
      <input
        id="login_form_password"
        className={classes.input}
        type="password"
        value={password}
        required={true}
        onChange={(e) => setPassword(e.target.value)}
        onFocus={handlePasswordFocus}
        onBlur={handlePasswordFocus}
        style={{
          marginBottom: "15px",
          boxShadow: passwordFocus
            ? "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
            : "none",
        }}
        placeholder="Пароль"
      />
      <button
        className={classes.switch_auth}
        type="button"
        onClick={handleSwitch}
      >
        <h3>Ещё нет аккаунта?</h3>
      </button>
      <BlueButton
        width="280px"
        height="64px"
        text="Войти"
        margin="15px 0 0 0"
      />
    </form>
  );
};

export default Login;

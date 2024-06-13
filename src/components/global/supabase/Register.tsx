import { useState } from "react";
import BlueButton from "../../shared/BlueButton";
import classes from "./Auth.module.css";

interface RegisterProps {
  handleSwitch: () => void;
}

const Register: React.FC<RegisterProps> = ({ handleSwitch }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [formState, setFormState] = useState(0);
  const [formAlert, setFormAlert] = useState("");

  const handleEmailFocus = () => {
    setEmailFocus(!emailFocus);
  };
  const handlePasswordFocus = () => {
    setPasswordFocus(!passwordFocus);
  };

  return (
    <form onSubmit={handleEmailFocus} className={classes.form_widget}>
      <input
        id="register_form_email"
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
        id="register_form_password"
        className={classes.input}
        type="text"
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
        onClick={handleSwitch}
        className={classes.switch_auth}
        type="button"
      >
        <h3>Уже есть аккаунт?</h3>
      </button>
      <BlueButton
        width={280}
        height={64}
        text="Получить код"
        margin="15px 0 0 0"
      />
    </form>
  );
};

export default Register;

import { useState } from "react";
import { supabase } from "../../../helper/supabaseClient";
import BlueButton from "../../shared/blue button/BlueButton";
import classes from "./Supabase.module.css";
import eyeOne from "../../../img/nav/login/eyeOne.svg";
import eyeTwo from "../../../img/nav/login/eyeTwo.svg";

const Supabase = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [formState, setFormState] = useState(0);
  const [loginSwitcher, setLoginSwitcher] = useState(false);
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [formAlert, setFormAlert] = useState("");

  const handleLoginSwitcher = () => {
    setLoginSwitcher(!loginSwitcher);
  };
  const handleInputFocus = () => {
    setEmailFocus(!emailFocus);
  };
  const handlePasswordFocus = () => {
    setPasswordFocus(!passwordFocus);
  };

  const handleSubmitRegister = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) {
      setFormAlert("Повторите попытку позже");
      console.log(error);
      setFormState(2);
    } else if (data.user.identities.length === 0) {
      setFormAlert("Пользователь уже существует");
      console.error(error);
      setFormState(2);
    } else {
      console.log("пользователь успешно зарегистрирован.", data.user.id);
      setFormAlert("пользователь успешно зарегистрирован.");
      setFormState(1);
    }
  };
  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    if (error && error.message === "Invalid login credentials") {
      setFormState(2);
      setFormAlert("Неправильный e-mail/пароль");
    } else if (error && error.message === "Email not confirmed") {
      setFormState(2);
      setFormAlert("подтвердите свой аккаунт через e-mail");
    } else if (data.user.id) {
      setFormAlert("вы вошли в аккаунт.");
      console.log("user id is =", data, data.user.id);
      setFormState(1);
    }
  };

  const showPassword = () => {
    setIsPasswordShown(!isPasswordShown);
  };

  return (
    <form
      className={classes.form__widget}
      onSubmit={
        loginSwitcher === false ? handleSubmitLogin : handleSubmitRegister
      }
    >
      <div className={classes.switcher} onClick={handleLoginSwitcher}>
        <div className={classes.switch}>
          <div
            className={classes.moving_box}
            style={{
              left: loginSwitcher === false ? "2px" : "65px",
              width: loginSwitcher === false ? "80px" : "210px",
            }}
          >
            <h2>{loginSwitcher === false ? "Войти" : "Зарегистрироваться"}</h2>
          </div>
        </div>
      </div>
      <div style={{ position: "relative" }}>
        <input
          className={classes.input_email}
          type="email"
          value={email}
          required={true}
          onChange={(e) => setEmail(e.target.value)}
          onFocus={handleInputFocus}
          onBlur={handleInputFocus}
          style={{
            marginBottom: "15px",
            boxShadow: emailFocus
              ? "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
              : "none",
          }}
        />
        <h3
          style={{
            transition: "all 0.3s",
            position: "absolute",
            top: emailFocus || email !== "" ? "5px" : "20px",
            left: "20px",
            color: "#8c8c8c",
            pointerEvents: "none",
            fontSize: emailFocus || email !== "" ? "14px" : "16px",
          }}
        >
          e-mail
        </h3>
      </div>

      <div style={{ position: "relative" }}>
        <input
          className={classes.input_password}
          type={isPasswordShown ? "text" : "password"}
          value={password}
          required={true}
          onChange={(e) => setPassword(e.target.value)}
          onFocus={handlePasswordFocus}
          onBlur={handlePasswordFocus}
          style={{
            boxShadow: passwordFocus
              ? "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
              : "none",
          }}
        />
        <h3
          style={{
            transition: "all 0.3s",
            position: "absolute",
            top: passwordFocus || password !== "" ? "5px" : "20px",
            left: "20px",
            color: "#8c8c8c",
            pointerEvents: "none",
            fontSize: passwordFocus || password !== "" ? "14px" : "16px",
          }}
        >
          пароль
        </h3>
        <img
          src={isPasswordShown ? eyeTwo : eyeOne}
          alt="img show password"
          style={{
            position: "absolute",
            width: "40px",
            right: "12px",
            top: "12px",
            cursor: "pointer",
          }}
          onClick={showPassword}
        />
      </div>
      <div
        className={classes.errorBox}
        style={{
          background: formState === 1 ? "#d6ffd5" : "#ffebea",
          color: formState === 1 ? "#00be3f" : "#ff635b",
          display: formState !== 0 ? "block" : "none",
          padding: "20px 10px",
        }}
      >
        <h3>{formAlert}</h3>
      </div>
      <BlueButton
        width={280}
        height={64}
        text="Получить код"
        margin="15px 0 0 0"
      />
    </form>
  );
};

export default Supabase;

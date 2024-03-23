import React, { useState } from "react";
import { supabase } from "../../helper/supabaseClient";
import BlueButton from "../divided/BlueButton";
import classes from "./Supabase.module.css";

const Supabase = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const handleInputFocus = () => {
    setEmailFocus(!emailFocus);
  };
  const handlePasswordFocus = () => {
    setPasswordFocus(!passwordFocus);
  };

  const registerUser = async () => {
    try {
      const { user, session, error } = await supabase.auth.signUp(
        {
          email,
          password,
        },
        {
          redirectTo: window.location.origin,
        },
      );
      if (error) throw error;
      return { user, session };
    } catch (e) {
      throw e;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { user, session } = await registerUser();
      console.log("Пользователь успешно зарегистрирован:", user);
      console.log("Информация о сеансе:", session);
    } catch (error) {
      console.error("Ошибка регистрации:", error.message);
    }
  };

  return (
    <form className={classes.form__widget} onSubmit={handleSubmit}>
      <div style={{ position: "relative" }}>
        <input
          className={classes.supabaseInput}
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
          className={classes.supabaseInput}
          type="password"
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

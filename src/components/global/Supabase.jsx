import React, { useState } from "react";
import { supabase } from "../../helper/supabaseClient";
import BlueButton from "../divided/BlueButton";
import classes from "./Supabase.module.css";

const Supabase = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [formState, setFormState] = useState(0);
  const handleInputFocus = () => {
    setEmailFocus(!emailFocus);
  };
  const handlePasswordFocus = () => {
    setPasswordFocus(!passwordFocus);
  };

  const loginUser = async () => {
    try {
      const { user, session, error } = await supabase.auth.signIn({
        email,
        password,
      });
      if (error) {
        console.error("Ошибка при входе:", error.message);
      }
      console.log("Успешный вход в систему для пользователя:", user);
      console.log("Информация о сеансе:", session);
    } catch (error) {
      console.error("Ошибка при входе:", error.message);
    }
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

  const checkEmail = async () => {
    try {
      const { data: users, error } = await supabase
        .from("users")
        .select("*")
        .eq("email", email);

      if (error) {
        console.error(error.message);
      }

      if (users.length > 0) {
        return 2;
      } else {
        return 1;
      }
    } catch (error) {
      console.error(
        "Ошибка при проверке электронного адреса пользователя:",
        error.message,
      );
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password.length > 6) {
      const emailStatus = await checkEmail();
      if (emailStatus === 1) {
        try {
          const { user, session } = await registerUser();
          console.log("Пользователь успешно зарегистрирован:", user);
          console.log("Информация о сеансе:", session);
          setFormState(2);
        } catch (error) {
          console.error("Ошибка регистрации:", error.message);
          setFormState(1);
        }
      } else if (emailStatus === 2) {
        loginUser();
      }
    } else if (password.length < 6) {
      setFormState(1);
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
      <div
        className={classes.errorBox}
        style={{
          background: formState === 1 ? "#ffebea" : "#d6ffd5",
          color: formState === 1 ? "#ff635b" : "#00be3f",
          display: formState !== 0 ? "block" : "none",
          padding: "20px 10px",
        }}
      >
        <h3>
          {formState === 1
            ? "E-mail или пароль указаны неверно"
            : "Проверьте свою почту"}
          .
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

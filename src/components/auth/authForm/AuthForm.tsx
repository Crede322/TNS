import { useEffect, useState } from "react";
import classes from "./AuthForm.module.css";
import { useForm } from "react-hook-form";
import { useAuth } from "../../../hooks/auth/useAuth";

interface FormDataType {
  email: string;
  password: string;
}

export default function AuthForm() {
  // if true === Login, signIn
  // if false === Registration, signUp

  const [formType, setFormType] = useState(true);
  const { signUp, signIn } = useAuth();
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm<FormDataType>();

  const emailError =
    errors.email?.type === "required" ? "Email обязателен" : "";
  const passwordError =
    errors.password?.type === "required" ? "Пароль обязателен" : "";

  const onSubmit = async (data: FormDataType) => {
    clearErrors();
    setSuccessMessage(null);
    if (formType) {
      handleSignIn(data.email, data.password);
    } else {
      handleSignUp(data.email, data.password);
    }
  };

  const handleSignUp = async (email: string, password: string) => {
    const { success, message } = await signUp(email, password);
    if (success) {
      setSuccessMessage("Письмо с подтверждением отправлено на почту");
    } else {
      console.error("error", message);
    }
  };

  const handleSignIn = async (email: string, password: string) => {
    const { success, message } = await signIn(email, password);
    if (!success) {
      if (message === "Invalid login credentials") {
        setError("root", {
          type: "manual",
          message: "Неверная почта или пароль",
        });
      } else {
        setError("root", {
          type: "manual",
          message: "Ошибка входа",
        });
      }
    } else {
      setSuccessMessage("Успешный вход");
    }
  };

  const changeFormType = () => {
    setFormType(!formType);
  };

  return (
    <div className={classes.auth_wrapper}>
      <h2>{formType ? "Вход" : "Регистрация"}</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={classes.inputbox}>
          <input
            className={classes.input}
            type="text"
            {...register("email", { required: true })}
            placeholder="E-mail"
          />
          {emailError && <p className={classes.error}>{emailError}</p>}
        </div>
        <div className={classes.inputbox}>
          <input
            className={classes.input}
            type="text"
            {...register("password", { required: true })}
            placeholder="Пароль"
          />
          {passwordError && <p className={classes.error}>{passwordError}</p>}
        </div>
        <button
          className={classes.button_formType}
          type="button"
          onClick={changeFormType}
        >
          <p>{formType ? "Ещё нет аккаунта?" : "Уже есть аккаунт?"}</p>
        </button>
        <button className={classes.button_submit} type="submit">
          {formType ? "Войти" : "Получить код"}
        </button>
        {errors.root?.message && (
          <p className={classes.auth_error}>{errors.root.message}</p>
        )}
        {successMessage && (
          <p className={classes.auth_message}>{successMessage}</p>
        )}
      </form>
    </div>
  );
}

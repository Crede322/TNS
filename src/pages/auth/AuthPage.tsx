import AuthForm from "../../components/auth/authForm/AuthForm";
import { useAuth } from "../../hooks/auth/useAuth";
import { useUserdata } from "../../hooks/auth/useUserData";
import profileImg from "../../img/profile.svg";
import classes from "./AuthPage.module.css";

export default function AuthPage() {
  const { user, loading } = useUserdata();
  const { signOut } = useAuth();

  return (
    <main className={classes.auth_page}>
      {loading ? (
        <div />
      ) : user?.id ? (
        <div className={classes.usercard}>
          <img src={profileImg} alt="user" />
          <h3>Вы вошли в аккаунт.</h3>
          <h4>{user.email}</h4>
          <button onClick={signOut}>Выйти</button>
        </div>
      ) : (
        <AuthForm />
      )}
    </main>
  );
}

import React, { useState } from "react";
import classes from "./Auth.module.css";
import Login from "./Login";
import Register from "./Register";

const Auth = () => {
  const [toggleSwitchState, setToggleSwitchState] = useState(false);

  const handleSwitch = () => {
    setToggleSwitchState(!toggleSwitchState);
    console.log("asd");
  };

  return (
    <div className={classes.auth_menu}>
      <div className={classes.auth_switch}>
        <h2>{toggleSwitchState ? "Вход" : "Регистрация"}</h2>
        {toggleSwitchState ? (
          <Login handleSwitch={handleSwitch} />
        ) : (
          <Register handleSwitch={handleSwitch} />
        )}
      </div>
    </div>
  );
};

export default Auth;

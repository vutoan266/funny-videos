import Link from "next/link";
import React, { useState } from "react";
import { registerAPI } from "../../apis";
import useAlertStore from "../../store/alertStore";
import useUserStore from "../../store/userStore";
import Button from "../commons/Button";
import Input from "../commons/Input";

const UserForm = () => {
  const login = useUserStore((state) => state.login);
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();
  const showError = useAlertStore((state) => state.showError);

  const handleSubmit = async () => {
    if (!email || !password) {
      showError("Please fill all fields");
    } else {
      try {
        await registerAPI({ email, password });
        login(email);
      } catch (e) {
        showError(e);
      }
    }
  };

  return (
    <div className="flex justify-center items-center">
      <Input
        id="email"
        className="mr-2"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        id="password"
        className="mr-2"
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={handleSubmit}>Login/Register</Button>
    </div>
  );
};

export default UserForm;

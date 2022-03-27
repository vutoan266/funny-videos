import Link from "next/link";
import { useState } from "react";
import Button from "../commons/Button";
import Input from "../commons/Input";

const UserForm = () => {
  return (
    <div className="flex justify-center items-center">
      <Input className="mr-2" placeholder="User" />
      <Input className="mr-2" placeholder="Password" />
      <Button>Login/Register</Button>
    </div>
  );
};

export default UserForm;

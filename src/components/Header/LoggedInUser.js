import Link from "next/link";
import { useState } from "react";
import useUserStore from "../../store/userStore";
import Button from "../commons/Button";
import Input from "../commons/Input";

const LoggedInUser = () => {
  const logout = useUserStore((state) => state.logout);

  return (
    <div className="flex justify-center items-center">
      <div className="text-white mr-5">
        Welcome <b>tony@gmail.com</b>
      </div>
      <Link href="/share">
        <Button className="mr-1">Share a movie</Button>
      </Link>
      <Button secondary onClick={logout}>
        Logout
      </Button>
    </div>
  );
};

export default LoggedInUser;

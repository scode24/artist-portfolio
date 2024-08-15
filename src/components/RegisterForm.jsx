import axios from "axios";
import React, { useState } from "react";
import useDialogStore from "../stores/DialogStore";
import LoginForm from "./LoginForm";

const RegisterForm = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { push } = useDialogStore();

  const digestMessage = async (password) => {
    const msgUint8 = new TextEncoder().encode(password); // encode as (utf-8) Uint8Array
    const hashBuffer = await window.crypto.subtle.digest("SHA-256", msgUint8); // hash the message
    const hashArray = Array.from(new Uint8Array(hashBuffer)); // convert buffer to byte array
    const hashHex = hashArray
      .map((b) => b.toString(16).padStart(2, "0"))
      .join(""); // convert bytes to hex string
    return hashHex;
  };

  const handleInputChange = async (e) => {
    userInfo[e.target.name] =
      e.target.name === "password" || e.target.name === "confirmPassword"
        ? await digestMessage(e.target.value)
        : e.target.value;
    setUserInfo({ ...userInfo });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (userInfo.password !== userInfo.confirmPassword) {
      push("Passwords do not match.");
      return;
    }

    const response = await axios.post(
      import.meta.env.VITE_API_ENDPOINT + "/registerUser",
      userInfo
    );

    push(response.data.message);
  };

  const onLogin = () => {
    push(<LoginForm />);
  };

  return (
    <form
      className="flex flex-col p-3 text-sm w-[300px]"
      onSubmit={handleOnSubmit}
    >
      <input
        className="rounded-md border mb-3 p-2 shadow-inner border-zinc-300 "
        name="name"
        type="text"
        placeholder="Enter name"
        minLength={2}
        maxLength={20}
        required
        onChange={handleInputChange}
      />
      <input
        className="rounded-md border mb-3 p-2 shadow-inner border-zinc-300 "
        name="email"
        type="email"
        placeholder="Enter email"
        required
        onChange={handleInputChange}
      />
      <input
        className="rounded-md border mb-3 p-2 shadow-inner border-zinc-300 "
        name="password"
        type="password"
        placeholder="Enter password"
        minLength={6}
        required
        onChange={handleInputChange}
      />
      <input
        className="rounded-md border mb-3 p-2 shadow-inner border-zinc-300 "
        name="confirmPassword"
        type="password"
        placeholder="Confirm password"
        minLength={6}
        required
        onChange={handleInputChange}
      />

      <div className="flex flex-col mt-2">
        <input
          className="rounded-md p-2 bg-indigo-700 text-white cursor-pointer w-full"
          type="submit"
          value="Register"
        />
        <input
          className="rounded-md p-2 mr-3 mt-3 bg-indigo-700 text-white cursor-pointer w-full"
          type="button"
          value="Login"
          onClick={onLogin}
        />
      </div>
    </form>
  );
};

export default RegisterForm;

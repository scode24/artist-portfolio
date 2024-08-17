import axios from "axios";
import React, { useState } from "react";
import useDialogStore from "../stores/DialogStore";
import useUserAuthStore from "../stores/UserAuthStore";
import RegisterForm from "./RegisterForm";

const LoginForm = () => {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const { push } = useDialogStore();
  const { loggedInUser, setLoggedInUser } = useUserAuthStore();

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        import.meta.env.VITE_API_ENDPOINT + "/loginUser",
        loginForm
      );
      sessionStorage.setItem("token", response.data.jwtToken);
      setLoggedInUser(response.data.loggedInUser);
      push(response.data.message);
    } catch (err) {
      push(err?.response?.data?.message);
      return;
    }
  };

  const handleInputChange = (e) => {
    loginForm[e.target.name] = e.target.value;
    setLoginForm({ ...loginForm });
  };

  const onRegister = () => {
    push(<RegisterForm />);
  };

  return (
    <form
      className="flex flex-col p-3 text-sm w-[300px]"
      onSubmit={handleOnSubmit}
    >
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
        required
        onChange={handleInputChange}
      />

      <div className="flex flex-col mt-2">
        <input
          className="rounded-md p-2 mr-3 bg-indigo-700 text-white w-full cursor-pointer"
          type="submit"
          value="Login"
        />
        <input
          className="rounded-md p-2 mt-3 bg-indigo-700 text-white w-full cursor-pointer"
          type="button"
          value="Register"
          onClick={onRegister}
        />
      </div>
    </form>
  );
};

export default LoginForm;

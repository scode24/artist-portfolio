import React from "react";
import useDialogStore from "../stores/DialogStore";
import RegisterForm from "./RegisterForm";

const LoginForm = () => {
  const { push } = useDialogStore();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.elements);
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
        type="email"
        placeholder="Enter email"
        required
      />
      <input
        className="rounded-md border mb-3 p-2 shadow-inner border-zinc-300 "
        type="password"
        placeholder="Enter password"
        required
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

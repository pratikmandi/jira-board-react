import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signin } from "../../store/features/auth/authSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signin({ email, password }));
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h2 className="text-2xl font-semibold mb-4 text-center">Jira Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2 mb-4">
          <input
            type="text"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            className="border rounded-sm p-2"
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            className="border rounded-sm p-2"
          />
        </div>

        <button className="bg-blue-600 text-white w-full py-2 rounded-lg hover:bg-blue-700">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;

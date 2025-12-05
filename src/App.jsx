import React from "react";
import { useSelector } from "react-redux";
import Login from "./components/auth/Login";
import Board from "./components/board/Board";

const App = () => {
  const isSignedIn = useSelector((state) => state.auth.isSignedIn);
  return <div>{isSignedIn ? <Board /> : <Login />}</div>;
};

export default App;

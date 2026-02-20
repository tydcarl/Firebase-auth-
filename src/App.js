import React from "react";
import "./App.css";
import { auth } from "./firebase/init";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

function App() {
  const [user, setUser] = React.useState({});
  function register() {
    createUserWithEmailAndPassword(auth, "email@email.com", "test123")
      .then((user) => {})
      .catch((error) => {});
  }
  function login() {
    signInWithEmailAndPassword(auth, "email@email.com", "test123")
      .then(({ user }) => {
        setUser(user);
      })
      .catch((error) => {
        setErrorMessage("The password is invalid");
      });
  }

  function logout() {
    signOut(auth);
  }

  return (
    <div className="App">
      <button onCLick={register}>Register</button>
      <button onCLick={login}>Login</button>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default App;

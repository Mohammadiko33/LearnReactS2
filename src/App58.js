import React from "react";
import { useState } from "react";

export default function App58() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [userEmail, setEmail] = useState("");

  const putInUserName = (e) => {
    setUserName(e.nativeEvent.target.value);
  };
  const putInPassword = (e) => {
    setPassword(e.nativeEvent.target.value);
  };
  const putInUserEmail = (e) => {
    setEmail(e.nativeEvent.target.value);
  };
  const sendDetaBase = (e) => {
    e.preventDefault();

    if ((userName.length > 2, password.length > 4, userEmail.length > 12)) {
      let newUser = {
        userName,
        password,
        userEmail,
      };  

      fetch("https://itsmyiko-default-rtdb.firebaseio.com/users.json", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(newUser),
      }).then((res) => {
        if (res.status === 200) {
          setUserName("");
          setPassword("");
          setEmail("");
        }
      }).catch(err => console.log(err));
    } 
  };

  return (
    <form className="mt10 br1 mc" onSubmit={sendDetaBase}>
      <input
        type="text"
        placeholder="Enter Your Full Name"
        value={userName}
        onChange={(e) => putInUserName(e)}
        autoFocus
      />
      <input
        type="password"
        placeholder="Enter Your Password"
        value={password}
        onChange={(e) => putInPassword(e)}
      />
      <input
        type="email"
        placeholder="Enter Your Email"
        value={userEmail}
        onChange={(e) => putInUserEmail(e)}
      />
      <input type="submit" value="submited" />
    </form>
  );
}

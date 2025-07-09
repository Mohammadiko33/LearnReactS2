import React, { useState, useEffect } from "react";
import NextGetUsers from './components/60.GetUsers/NextGetUsers';

export default function App58() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [userEmail, setEmail] = useState("");
  const [users, setUsers] = useState([]);

  const putInUserName = (e) => {
    setUserName(e.nativeEvent.target.value);
  };

  const putInPassword = (e) => {
    setPassword(e.nativeEvent.target.value);
  };

  const putInUserEmail = (e) => {
    setEmail(e.nativeEvent.target.value);
  };

  const sendDetaBase = async (e) => {
    e.preventDefault();

    if (userName.length > 2 && password.length > 4 && userEmail.length > 12) {
      let newUser = {
        userName,
        password,
        userEmail,
      };

      try {
        const res = await fetch("https://itsmyiko-default-rtdb.firebaseio.com/users.json", {
          method: "POST",
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify(newUser),
        });

        if (res.status === 200) {
          const data = await res.json();
          const userId = Object.keys(data)[0]; // Get the user ID from the response
          const formattedUser = { id: userId, ...newUser };

          setUsers([...users, formattedUser]); // Update users state with the new user

          setUserName("");
          setPassword("");
          setEmail("");
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        const res = await fetch("https://itsmyiko-default-rtdb.firebaseio.com/users.json");
        const data = await res.json();

        const formattedData = Object.entries(data).map(([id, user]) => ({
          id,
          ...user
        }));

        setUsers(formattedData);
      } catch (err) {
        console.log(err);
      }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://itsmyiko-default-rtdb.firebaseio.com/users.json");
        const data = await res.json();

        const formattedData = Object.entries(data).map(([id, user]) => ({
          id,
          ...user
        }));

        setUsers(formattedData);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <form className="mt5 br1 mc" onSubmit={sendDetaBase}>
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
        <input type="submit" value="Submit" />
      </form>

      <NextGetUsers users={users} />
    </>
  );
}

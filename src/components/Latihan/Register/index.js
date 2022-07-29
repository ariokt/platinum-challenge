import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [todos, setTodos] = useState("");

  const URL = `https://my-udemy-api.herokuapp.com/api/v1/user/`;

  async function handleRegister() {
    const LINK = `${URL}/signup`;
    const sendData = {
      name,
      email,
      password,
    };
    const headerData = {
      "Content-Type": "application/json",
    };
    await axios
      .post(LINK, sendData, { headers: headerData })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    setName("");
    setEmail("");
    setPassword("");
  }

  async function handleSignin() {
    const LINK = `${URL}/signin`;
    const sendData = {
      email,
      password,
    };
    const headerData = {
      "Content-Type": "application/json",
    };
    await axios
      .post(LINK, sendData, { headers: headerData })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    setEmail("");
    setPassword("");
  }

  async function getTodos() {
    const token = window.localStorage.getItem("token");
    try {
      setLoading(true);
      const res = await window.fetch(URL, {
        headers: {
          authorization: token,
        },
      });
      const data = await res.json();
      setLoading(false);
      setTodos(data.todos);
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  }

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div>
      <div>
        <div>
          <p>Usename</p>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <p>Email</p>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <p>Password</p>
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button onClick={handleRegister}>register</button>
          <button onClick={handleSignin}>sign in</button>
        </div>
      </div>
    </div>
  );
};

export default Register;

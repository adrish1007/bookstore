import "../CSS/Login.css";
import axios from "axios";
import { useState } from "react";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const info = { Email: email, Password: password };
    axios.post('/db/Users/Login', info, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        localStorage.setItem("user", response.data.Name);
        setEmail("");
        setPassword("");
        console.log("customer found", response.data.Name);
        window.location.href = "http://localhost:3000";
      })
      .catch(err => {
        alert("User doesn't exist please check your credentials");
        setEmail("");
        setPassword("");
      });
  };
  return (
    <>
      <div class="login-page">
        <div class="form">
          <form class="login-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <input
              type="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <button>login</button>
            <p class="message">
              Not registered? <a href="/Register">Create an account</a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;

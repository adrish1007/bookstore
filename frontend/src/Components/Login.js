import "../CSS/Login.css";
import { useState } from "react";
const Login = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = "http://localhost:4000/db/Users/Login";
    const info = { Email, Password };
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(info),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    if (response.ok) {
      localStorage.setItem("user", json.Name);
      setEmail("");
      setPassword("");
      console.log("customer found", json.Name);
      window.location.href = "http://localhost:3000";
    } else {
      alert("User doesn't exist please check your credentials");
      setEmail("");
      setPassword("");
    }
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
              value={Email}
            />
            <input
              type="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
              value={Password}
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

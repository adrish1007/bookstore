import "../CSS/Login.css";
import { useState } from "react";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const info = { Email: email, Password: password };
    const response = await fetch('/db/Users/Login', {
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

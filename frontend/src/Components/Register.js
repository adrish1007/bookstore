import "../CSS/Login.css";
import { useState } from "react";
const Register = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = "http://localhost:4000/db/Users/Create";
    const info = { Name, Password, Email };
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(info),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    if (response.ok) {
      setEmail("");
      setPassword("");
      setName("");
      console.log("customer found", json);
      window.location.href = "http://localhost:3000/Login";
    } else {
      alert("User already exists");
      window.location.href = "http://localhost:3000/Register";
    }
  };
  return (
    <>
      <div class="login-page">
        <div class="form">
          <form class="register-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
              value={Name}
            />
            <input
              type="Password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={Password}
            />
            <input
              type="text"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
              value={Email}
            />
            <button>create</button>
            <p class="message">
              Already registered? <a href="/Login">Sign In</a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;

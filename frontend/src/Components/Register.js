import "../CSS/Login.css";
import axios from "axios";
import { useState } from "react";
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    const info = { Name: name, Password: password, Email: email };
    axios.post('https://bookapp-3crg.onrender.com/db/Users/Create', info, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        if (response === undefined) throw 'customer exists';
        setEmail("");
        setPassword("");
        setName("");
        console.log("customer found", response.data.Name);
        window.location.href = "https://main--relaxed-torrone-590e0d.netlify.app/Login";
      })
      .catch(err => {
        alert("User already exists");
        window.location.href = "https://main--relaxed-torrone-590e0d.netlify.app/Register";
      });
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
              value={name}
            />
            <input
              type="Password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <input
              type="text"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
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

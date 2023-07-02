import "../CSS/Login.css";
import axios from "axios";
import { useState } from "react";
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const info = { Name: name, Password: password, Email: email };
    const response = await axios.post('/db/Users/Create', info, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        setEmail("");
        setPassword("");
        setName("");
        console.log("customer found", response.data.Name);
        window.location.href = "https://bookapp-client-l1yo.onrender.com/Login";
      })
      .catch(err => {
        alert("User already exists");
        window.location.href = "https://bookapp-client-l1yo.onrender.com/Register";
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

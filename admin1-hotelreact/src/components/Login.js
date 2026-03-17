import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    const correctUsername = "admin";
    const correctPassword = "password123";

    if (username === correctUsername && password === correctPassword) {
      setIsLoggedIn(true);
      setError("");
    } else {
      setError("Invalid username or password!");
    }
  };

  return (
    <div className="login-container">
      <h2>Admin Login</h2>
      <form onSubmit={handleLogin}>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Login</button>
        {error && <p className="error">{error}</p>}
      </form>

      {isLoggedIn && (
        <div>
          <p>Login successful! Click below to continue.</p>
          <Link to="/MainPage" className="dashboard-link">Go to Dashboard</Link>
        </div>
      )}
    </div>
  );
};

export default Login;
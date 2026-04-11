import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (email === "" || password === "") {
      alert("Please fill in both email and password.");
      return;
    }

    alert("Login submitted successfully!");
  }

  return (
    <section className="login-page">
      <h2>Login to StyleHub</h2>

      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>

      <p>Email: {email}</p>
      <p>Password: {password}</p>
    </section>
  );
}

export default Login;
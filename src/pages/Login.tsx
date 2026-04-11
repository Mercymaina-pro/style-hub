import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <section className="login-page">
      <h2>Login to StyleHub</h2>

      <form
        className="login-form"
        onSubmit={(e) => {
          e.preventDefault();
          alert("Login submitted successfully!");
        }}
      >
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
import "../App.css";
import { Navbar } from "../components/Navbar";

export function Login() {
  return (
    <>
      <Navbar></Navbar>
      <div className="content">
        <div className="form">
          <h1>Login</h1>
          <form action={"http://localhost:5000/login"} method="POST">
            <input type="email" id="email" placeholder="email" required></input>
            <input
              type="password"
              id="password"
              placeholder="password"
              required
            ></input>
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </>
  );
}

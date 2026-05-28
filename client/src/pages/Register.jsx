import "../App.css"
import { Navbar } from "../components/Navbar"

export function Register() {
    return (
        <>
            <Navbar></Navbar>
            <div className="content">
                <div className="form">
                    <h1>Register</h1>
                    <form action={'http://localhost:5000/register'} method="POST">
                        <input type="text" name="name" placeholder="name" required></input>
                        <input type="email" name="email" placeholder="email" required></input>
                        <input type="password" name="password" placeholder="password" required></input>
                        <button type="submit">Login</button>
                    </form>
                </div>
            </div>
        </>
    )
}
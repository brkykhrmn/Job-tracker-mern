import "../App.css"

export function Navbar() {
    return (
        <div className="navbar">
            <h3>Jobtracker</h3>
            <ul>
                <li><a href="#/">Home</a></li>
                <li><a href="#/login">Login</a></li>
                <li><a href="#/register">Register</a></li>
            </ul>
        </div>
    )
}
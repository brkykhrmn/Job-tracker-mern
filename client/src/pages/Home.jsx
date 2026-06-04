import { Navbar } from "../components/Navbar"
import "../App.css"

const API_URL = "http://localhost:5000";
const jobList = [
    fetch(`${API_URL}/jobs`, {
        method: 'GET',
        credentials: 'include'
    }).then(res => res.json())
]

export function Home() {
    return (
        <>
            <Navbar></Navbar>
            <div className="content">
                <h1>Add your job applications.</h1>
                <form className="job-form" action="http://localhost:5000/create" method="post">
                    <input type="text" name="company" placeholder="Company" required></input>
                    <input type="text" name="title" placeholder="Job Title" required></input>
                    <input type="text" name="status" placeholder="Status" required></input>
                    <button type="submit">Add Job</button>
                </form>
            </div>
        </>
    )
}
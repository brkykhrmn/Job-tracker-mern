import { Navbar } from "../components/Navbar"
import "../App.css"

export function Home() {
    return (
        <>
            <Navbar></Navbar>
            <div className="content">
                <h1>Track your job applications.</h1>
            </div>
        </>
    )
}
import { Link} from "react-router-dom"


export default function Header() {
    return (
        <>

            <h1>React Router Concept</h1>
            <nav>
                <Link to="/Home">Home</Link>
                <Link to="/About">About</Link>
                <Link to="/Contact">Contact</Link>
                <Link to="/Menu">Menu</Link>
            </nav>


        </>
    )
}
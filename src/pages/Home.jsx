import Header from '../Components/Header'
import { Link, Outlet} from 'react-router-dom'
import './style.css'



export default function Home() {
    return (
        <>
            <Header />
            <h1>Home page</h1>
            <div className='container'>
                <ul>
                    <li><Link to="Phone"> Phone </Link></li>
                    <li><Link to="Charge"> Charge</Link></li>
                    <li><Link to="Laptop"> Laptop</Link></li>
                    <li><Link to="Airpod">  Airpod</Link></li>
                </ul>
                <Outlet />

            </div>

        </>

    )
}
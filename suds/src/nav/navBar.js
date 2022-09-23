import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import "./navBar.css"



function NavBar() {
    const localSudsUser = localStorage.getItem("suds_user")
    const SudsUserObject = JSON.parse(localSudsUser)

    const navigate = useNavigate()
    return<>
        <header class="header">
        <h1 class="logo"><a href="#">Suds:Cleaning Made Easy</a></h1>
      
      
            <ul class="main-nav">
                {
                    SudsUserObject.host ?
                        <>
                            <li className="navbar__item active"><Link className="navbar__link" to={`/myProperties`}>My Properties</Link></li>
                            <li><Link className="navbar__link" to="/createNewProperty"> + New Property </Link></li>
                        </>
                        : <li className="navbar__item active"><Link className="navbar__link" to={`/myProperties`}>Dirty Properties</Link></li>
                }
                {
                    localStorage.getItem("suds_user")
                        ? <Nav.Link href="#logout" to="/login" onClick={() => {
                            localStorage.removeItem("suds_user")
                            navigate("/", { replace: true })
                        }}>Logout</Nav.Link>
                        : ""
                }
            </ul>
        </header>
    </>

}

export default NavBar;

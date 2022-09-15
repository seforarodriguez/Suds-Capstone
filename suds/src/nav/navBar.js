import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';



function NavBar() {
    const navigate = useNavigate()
    return <>

        <Navbar bg="light" variant="light">
            <Container>
                <Navbar.Brand href="#home">Suds: Clean</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#cleaned">Cleaned</Nav.Link>
                    <Nav.Link href="#pending">Pending</Nav.Link>
                    {
                        localStorage.getItem("suds_user")
                            ? <Nav.Link href="#logout" to="/login" onClick={() => {
                                localStorage.removeItem("suds_user")
                                navigate("/", { replace: true })
                            }}>Logout</Nav.Link>
                            : ""

                    }

                </Nav>
            </Container>
        </Navbar>
    </>
}

export default NavBar;
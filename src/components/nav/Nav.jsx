import { Nav, Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Nav.css'

const Navigation = () => {

    return (
        <Navbar >
            <Container>
                {/* <Link to="/">
                    <Navbar.Brand as="div">TuSalud</Navbar.Brand>
                </Link> */}

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/" className='home-link'>
                            <Nav.Link as="div" >TuSalud</Nav.Link>
                        </Link>
                        <Link to="/aboutus">
                            <Nav.Link as="div">About Us</Nav.Link>
                        </Link>
                        <Link to="/footmasaje">
                            <Nav.Link as="div">Foot Masaje</Nav.Link>
                        </Link>

                        <Link to="/bodymasaje">
                            <Nav.Link as="div">Body Masaje</Nav.Link>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation
import {Container, Nav, Navbar} from 'react-bootstrap'
export const Manus=()=>
{
    return(
        <Navbar bg="success" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#home">
                    Example Router
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="sample" />
                <Navbar.Collapse id="sample">
                <Nav className="ms-auto">
                    <Nav.Link active href="/">New Account</Nav.Link>
                    <Nav.Link active href="/sign">component two</Nav.Link>
                    <Nav.Link active href="/Three">Component Three</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
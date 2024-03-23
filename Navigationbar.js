import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './Home.css';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand as={Link} to='/home'className='brand'><span className='green'>GREEN </span><span className='grocers'>GROCERS</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
       <Nav.Link as={Link} to='/home' className='navbtn'>Home</Nav.Link>
        <Nav.Link as={Link} to='/about' className='navbtn'>Aboutus</Nav.Link>   
        <Nav.Link as={Link} to='/contact' className='navbtn'>Contact</Nav.Link>   
            <NavDropdown  className='navbtn'title="PRODUCTS" id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to='/vegetables'className='navbtn' >VEGETABLES</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/fruits'className='navbtn' >
                FRUITS
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to='/nuts'className='navbtn' >
                NUTS
              </NavDropdown.Item>
            </NavDropdown>
            {/* <Nav.Link href="#" disabled>
              Link
            </Nav.Link> */}
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
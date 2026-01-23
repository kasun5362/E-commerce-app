import React from 'react'
import { Container, Navbar, NavbarBrand, NavbarCollapse, NavbarToggle ,Nav, Button} from 'react-bootstrap'
import SearchBar from '../Molecules/SearchBar'

function Header() {
  return (
    <Navbar expand="lg"  className='bg-light'>
        <Container className='container-sm'>
            <Navbar.Brand href='#' className='fw-bold text-primary fs-3' > 
                Sport Shop
            </Navbar.Brand>

            <Navbar.Toggle />     
      

            <Navbar.Collapse id=''>
              <Nav className='me-auto'>
                <Nav.Link href='#'>Home</Nav.Link>
                <Nav.Link href='#'>Products</Nav.Link>
                <Nav.Link href='#'>About</Nav.Link>
                <Nav.Link href='#'>Contact</Nav.Link>
              </Nav>
              <SearchBar/>
              <div className='d-flex ms-3 gap-3'>
                <Button variant='outline-primary'>
                    <i className="bi bi-person" style={{fontSize: '1.2rem'}}></i>
                </Button>
                <Button variant='primary'>
                    <i className="bi bi-cart" style={{fontSize: '1.2rem'}}></i>
                </Button>
              </div>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default Header
import Avatar from '../../assets/avatar.png'
import Logo from '../../assets/txscp-nav.png'
import React, { Component } from 'react'
import Styles from './topnav.module.css'
import {
  Container,
  Image,
  Navbar,
  Nav,
  NavDropdown,
} from 'react-bootstrap'
import { MagnifyingGlass } from 'phosphor-react'

class Topnav extends Component {
  render() {

    return(
      <>
        <Navbar bg="white" expand="lg">
          <Container fluid className={ Styles.container }>
            <Navbar.Brand href="#home">
              <Image src={ Logo } />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Movies</Nav.Link>
                <Nav.Link href="#link">Cinemas</Nav.Link>
                <Nav.Link href="#link">Buy Tickets</Nav.Link>
              </Nav>
            </Navbar.Collapse>            
            <Navbar.Collapse className="justify-content-end">
              <Nav>
                <NavDropdown
                  id="nav-dropdown-dark-example"
                  title="Dropdown"
                  menuVariant="dark"
                >
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <div className={ Styles.search }>
                <MagnifyingGlass
                  id={ Styles.searchIcon }
                  size={ 20 }
                />
                <input
                  id={ Styles.searchBox }
                  type='text'
                  placeholder='search a movie...'
                />
              </div>
              {/* <Button
                className={ Styles.button }
                variant="primary"
              >
                Sign Up
              </Button> */}
              <div className={ Styles.frame }>
                <Image
                  className={ Styles.avatar }
                  src={ Avatar } 
                />
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    )
  }
}

export default Topnav

import { Nav, Navbar, NavDropdown } from 'react-bootstrap'

const Navigator = () => {
  return (
    <div>
      <Navbar bg='white' expand='lg'>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse
          className='justify-content-center'
          id='basic-navbar-nav'>
          <Nav.Item className='navigation-links'>
            <Nav.Link href='/'>HOME</Nav.Link>
          </Nav.Item>
          <NavDropdown
            className='navigation-links'
            title='ABOUT'
            id='basic-nav-dropdown'>
            <NavDropdown.Item href='/about'>ABOUT US</NavDropdown.Item>
            <NavDropdown.Item href='/staff'>OUR STAFF</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href='/payment'>PAYMENT</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown
            title='CARE'
            className='navigation-links'
            id='basic-nav-dropdown'>
            <NavDropdown.Item href='/cosmetic'>COSMETIC</NavDropdown.Item>
            <NavDropdown.Item href='/restorative'>RESTORATIVE</NavDropdown.Item>
            <NavDropdown.Item href='/preventative'>
              PREVENTATIVE
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown
            title='TECHNOLOGY'
            className='navigation-links'
            id='basic-nav-dropdown'>
            <NavDropdown.Item href='/xrays'>X-RAYS</NavDropdown.Item>
            <NavDropdown.Item href='/whitening'>
              TEETH WHITENING
            </NavDropdown.Item>
            <NavDropdown.Item href='/invisalign'>INVISALIGN</NavDropdown.Item>
          </NavDropdown>
          <Nav.Item className='navigation-links'>
            <Nav.Link href='/contact'>CONTACT</Nav.Link>
          </Nav.Item>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Navigator

import { Nav, Navbar } from 'react-bootstrap'

const Navigator = () => {
  return (
    <div>
      <Navbar bg='white' expand='lg' activeKey='/home'>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse
          className='justify-content-center'
          id='basic-navbar-nav'>
          <Nav.Item className='navigation-links'>
            <Nav.Link href='/'>HOME</Nav.Link>
          </Nav.Item>
          <Nav.Item className='navigation-links'>
            <Nav.Link href='/about'>ABOUT</Nav.Link>
          </Nav.Item>
          <Nav.Item className='navigation-links'>
            <Nav.Link href='/cosmetic'>COSMETIC</Nav.Link>
          </Nav.Item>
          <Nav.Item className='navigation-links'>
            <Nav.Link href='/restorative'>RESTORATIVE</Nav.Link>
          </Nav.Item>
          <Nav.Item className='navigation-links'>
            <Nav.Link href='/preventative'>PREVENTATIVE</Nav.Link>
          </Nav.Item>
          <Nav.Item className='navigation-links'>
            <Nav.Link href='/contact'>CONTACT</Nav.Link>
          </Nav.Item>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Navigator

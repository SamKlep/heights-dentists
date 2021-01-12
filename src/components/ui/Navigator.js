import { Nav, Navbar } from 'react-bootstrap'

const Navigator = () => {
  return (
    <div>
      <Navbar
        bg='white'
        expand='lg'
        activeKey='/home'
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse
          className='justify-content-center'
          id='basic-navbar-nav'>
          <Nav.Item className='navigation-links'>
            <Nav.Link href='/'>HOME</Nav.Link>
          </Nav.Item>
          <Nav.Item className='navigation-links'>
            <Nav.Link eventKey='link-1'>ABOUT</Nav.Link>
          </Nav.Item>
          <Nav.Item className='navigation-links'>
            <Nav.Link eventKey='link-2'>COSMETIC</Nav.Link>
          </Nav.Item>
          <Nav.Item className='navigation-links'>
            <Nav.Link href='/home'>RESTORATIVE</Nav.Link>
          </Nav.Item>
          <Nav.Item className='navigation-links'>
            <Nav.Link eventKey='link-1'>PREVENTATIVE</Nav.Link>
          </Nav.Item>
          <Nav.Item className='navigation-links'>
            <Nav.Link eventKey='link-2'>CONTACT</Nav.Link>
          </Nav.Item>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Navigator

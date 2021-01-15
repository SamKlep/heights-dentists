import React from 'react'
import { Nav, Container, Row, Col, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <Nav className='bg-light footer'>
        <Container>
          <Row>
            <Col xs={4} className='mt-3 text-center'>
              <h3>Heghts Dentists</h3>
              <Link to='/'>
                <h3>HD</h3>
              </Link>
              <p>© 2021</p>
            </Col>
            <Col xs={4} className='mt-3 text-center'>
              <h3>Site Map</h3>

              <NavDropdown title='ABOUT' id='basic-nav-dropdown'>
                <NavDropdown.Item href='/about'>ABOUT US</NavDropdown.Item>
                <NavDropdown.Item href='/staff'>OUR STAFF</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href='/payment'>PAYMENT</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title='CARE' id='basic-nav-dropdown'>
                <NavDropdown.Item href='/cosmetic'>COSMETIC</NavDropdown.Item>
                <NavDropdown.Item href='/restorative'>
                  RESTORATIVE
                </NavDropdown.Item>
                <NavDropdown.Item href='/preventative'>
                  PREVENTATIVE
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title='TECHNOLOGY' id='basic-nav-dropdown'>
                <NavDropdown.Item href='/xrays'>X-RAYS</NavDropdown.Item>
                <NavDropdown.Item href='/whitening'>
                  TEETH WHITENING
                </NavDropdown.Item>
                <NavDropdown.Item href='/invisalign'>
                  INVISALIGN
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Item>
                <Nav.Link href='/contact'>CONTACT</Nav.Link>
              </Nav.Item>
            </Col>
            <Col xs={4} className='mt-3 text-center'>
              <h3>Contact</h3>
              <p>3482 Midway Dr.</p>
              <a href='tel:7134788723'>
                <p>(713) 478 - 8723</p>
              </a>
              <a href='mailto:info@heightsdentists.com'>
                <p>info@heightsdentists.com</p>
              </a>
            </Col>
          </Row>
        </Container>
        {/* <Nav.Item>
          <Nav.Link href='/home'>Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey='link-1'>Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey='link-2'>Link</Nav.Link>
        </Nav.Item> */}
      </Nav>
    </div>
  )
}

export default Footer

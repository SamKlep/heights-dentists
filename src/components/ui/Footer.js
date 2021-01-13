import React from 'react'
import { Nav, Container, Row, Col } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <Nav className='bg-light footer'>
        <Container>
          <Row>
            <Col xs={4} className='mt-3 text-center'>
              <h3>Heghts Dentists</h3>
              <p>© 2021</p>
            </Col>
            <Col xs={4} className='mt-3 text-center'>
              <h3>Site Map</h3>
              <Link to='/about'>
                <Nav.Item>
                  <p>ABOUT</p>
                </Nav.Item>
              </Link>
              <Link to='/cosmetic'>
                <Nav.Item>
                  <p>COSMETIC</p>
                </Nav.Item>
              </Link>
              <Link to='/restorative'>
                <Nav.Item>
                  <p>RESTORATIVE</p>
                </Nav.Item>
              </Link>
              <Link to='/preventative'>
                <Nav.Item>
                  <p>PREVENTATIVE</p>
                </Nav.Item>
              </Link>
              <Link to='/contact'>
                <Nav.Item>
                  <p>CONTACT</p>
                </Nav.Item>
              </Link>
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

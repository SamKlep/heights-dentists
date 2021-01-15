import React from 'react'
import { Jumbotron, Container, Row, Col } from 'react-bootstrap'

const Main = () => {
  return (
    <div className='container'>
      <Jumbotron className='about-jumbo'></Jumbotron>
      <Container className='mt-5'>
        <Row>
          <Col className='mb-5'>
            <h1>Cosmetic and Restorative Dentist Houston</h1>
            <p className='lead mt-4'>
              If you are seeking dental care in Houston, our Downtown Dentists
              and skilled, friendly team members would be happy to serve you. We
              are dedicated to providing our patients with personalized service
              and a comfortable environment, because we realize that such
              qualities can be hard to find in today’s busy world. We consider
              your dental health our top priority, and strive to make sure you
              feel comfortable and satisfied with our service. Please read below
              to learn more about our excellent team as well as our insurance
              information. If you would like to schedule a consultation with a
              cosmetic and restorative dentist in the Downtown Houston area,
              please feel free to contact us today.
            </p>
          </Col>
        </Row>
        <Row>
          <Col className='mb-4'>
            <h1>Our Dentists</h1>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Main

import React from 'react'
import { Container, Row, Col, CardGroup, Card } from 'react-bootstrap'

const Staff = () => {
  return (
    <div>
      <Container className='mt-5'>
        <Row>
          <Col className='text-center'>
            <h1>Our Staff</h1>
          </Col>
        </Row>
        <Row className='m-5'>
          <Col>
            <CardGroup>
              <Card>
                <Card.Img
                  className='staff-img'
                  variant='top'
                  src='img/staff1.jpg'
                />
                <Card.Body>
                  <Card.Title>
                    <strong>Dental Assistant -</strong> Dianna
                  </Card.Title>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img
                  className='staff-img'
                  variant='top'
                  src='img/staff2.jpg'
                />
                <Card.Body>
                  <Card.Title>
                    <strong>Dental Assistant -</strong> Roseanne
                  </Card.Title>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img
                  className='staff-img'
                  variant='top'
                  src='img/staff3.jpg'
                />
                <Card.Body>
                  <Card.Title>
                    <strong>Dental Hygienist -</strong> Susan
                  </Card.Title>
                </Card.Body>
              </Card>
            </CardGroup>
          </Col>
        </Row>
        <Row className='m-5'>
          <Col>
            <CardGroup>
              <Card>
                <Card.Img
                  className='staff-img'
                  variant='top'
                  src='img/staff4.jpeg'
                />
                <Card.Body>
                  <Card.Title>
                    <strong>Office Coordinator -</strong> Beverly
                  </Card.Title>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img
                  className='staff-img'
                  variant='top'
                  src='img/staff5.jpeg'
                />
                <Card.Body>
                  <Card.Title>
                    <strong>Insurance and Treatment Coordinator -</strong> Laura
                  </Card.Title>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img
                  className='staff-img'
                  variant='top'
                  src='img/staff6.jpeg'
                />
                <Card.Body>
                  <Card.Title>
                    <strong>Dental Hygienist -</strong> Maria
                  </Card.Title>
                </Card.Body>
              </Card>
            </CardGroup>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Staff

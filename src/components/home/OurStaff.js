import { Row, Col, CardDeck, Card, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const OurStaff = () => {
  return (
    <div className='container mb-5'>
      <Row>
        <Col className='mt-5 mb-3'>
          <h1>Our Dental Team</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <CardDeck>
            <Card>
              <Card.Img className='staff-img' variant='top' src='img/dentist-woman.jpg' />
              <Card.Body>
                <Card.Title>Helena V. Agua, D.D.S.</Card.Title>
                <Card.Text>
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos. Curabitur sodales ligula in
                  libero.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img className='staff-img' variant='top' src='img/dentist-1.jpg' />
              <Card.Body>
                <Card.Title>Isaia B. Auer, D.D.S.</Card.Title>
                <Card.Text>
                  Dr. Auer is an active member of the American Dental
                  Association, Texas Dental Association, Greater Houston Dental
                  Society, and the Academy of General Dentistry.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img className='staff-img' variant='top' src='img/dentist-2.jpeg' />
              <Card.Body>
                <Card.Title>Dave H. Bowyer, D.D.S.</Card.Title>
                <Card.Text>
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos. Curabitur sodales ligula in
                  libero.
                </Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
        </Col>
      </Row>

      <Row className='mt-5'>
        <Col className='text-center'>
          <h1>At Heights Dentists, we're here for you.</h1>
          <p className='lead mt-4'>
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos. Curabitur sodales ligula in libero. Sed
            dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean
            quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis
            tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi
            lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce
            ac turpis quis ligula lacinia aliquet. Mauris ipsum.
          </p>
        </Col>
      </Row>
      <Row>
        <Col className='mt-5 text-center'>
          <LinkContainer to='/about'>
            <Button className='btn-lg btn-info'>Learn More</Button>
          </LinkContainer>
        </Col>
      </Row>
    </div>
  )
}

export default OurStaff

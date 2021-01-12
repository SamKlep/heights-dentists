import { Row, Col, CardDeck, Card } from 'react-bootstrap'

const OurStaff = () => {
  return (
    <div className='container mb-5'>
      <Row>
        <Col className='mt-5 mb-3'>
          <h1>Our Staff</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <CardDeck>
            <Card>
              <Card.Img variant='top' src='img/dentist-woman.jpg' />
              <Card.Body>
                <Card.Title>Helena V. Agua, D.D.S.</Card.Title>
                <Card.Text>
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos. Curabitur sodales ligula in
                  libero.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className='text-muted'>
                  ligula in libero. Sed dignissim.
                </small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant='top' src='img/dentist-1.jpg' />
              <Card.Body>
                <Card.Title>Isaia B. Auer, D.D.S.</Card.Title>
                <Card.Text>
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos. Curabitur sodales ligula in
                  libero.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className='text-muted'>
                  {' '}
                  ligula in libero. Sed dignissim.
                </small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant='top' src='img/dentist-2.jpeg' />
              <Card.Body>
                <Card.Title>Dave H. Bowyer, D.D.S.</Card.Title>
                <Card.Text>
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos. Curabitur sodales ligula in
                  libero.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className='text-muted'>
                  {' '}
                  ligula in libero. Sed dignissim.
                </small>
              </Card.Footer>
            </Card>
          </CardDeck>
        </Col>
      </Row>
    </div>
  )
}

export default OurStaff

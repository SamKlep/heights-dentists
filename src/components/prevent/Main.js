import React from 'react'
import { Jumbotron, Container, Row, Col, ListGroup } from 'react-bootstrap'

const Main = () => {
  return (
    <div className='container'>
      <Jumbotron className='cosmetic-jumbo'></Jumbotron>
      <Container className='mb-5'>
        <Row>
          <Col>
            <h1 className='mt-5'>Preventative Dentistry Houston</h1>
            <p className='mt-3 lead'>
              When it comes to the overall health and well-being of your body,
              prevention is at the forefront. Dentistry and maintaining adequate
              oral health is no different. Our downtown dentists understand
              prevention is the first line of defense. We strongly encourage
              biannual cleanings (prophylaxis) and depending on the patient, we
              may recommend quarterly visits. We offer a variety of fluoride
              treatments, SonicCare toothbrushes, and most importantly,
              education. Our professional team ensures that patients are
              properly educated so that their oral health is not only a priority
              for us but for the patient as well.
            </p>
            <br />
            <ListGroup
              className='cosmetic-group mx-auto text-center'
              variant='flush'>
              <ListGroup.Item>
                <h4>Nightguards</h4>
              </ListGroup.Item>
            </ListGroup>
            <br />
            <h3 className='mt-5'>Nightguards</h3>
            <p className='lead mt-4'>
              Do you wake up with a stiff, sore jaw? Have you ever noticed that
              your teeth are flatter than they use to be? Do your teeth seem to
              be more sensitive to cold? If you answered yes to any of these
              questions, you maybe grinding or clenching your teeth at night.
              This dental condition is called bruxism. If left untreated,
              significant damage to the temporomandibular joint (TMJ), jaw
              muscles, and teeth can occur.
            </p>

            <p className='lead mt-4'>
              A clear, thin removable custom device known as a nightguard is the
              treatment of choice. It will help relieve persistent jaw pain and
              also protect your existing teeth and dental restorations.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Main

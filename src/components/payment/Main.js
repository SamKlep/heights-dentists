import React from 'react'
import { Jumbotron, Container, Row, Col } from 'react-bootstrap'

const Main = () => {
  return (
    <div className='container'>
      <Jumbotron className='payment-jumbo'></Jumbotron>
      <Container>
        <Row>
          <Col>
            <h1>Payment & Financing Options</h1>
            <p className='lead'>
              Dentistry can be expensive. We offer payment plans and Care Credit
              to help alleviate the financial strain. Care Credit is a financing
              service designed to make it easier to receive the necessary dental
              treatment in a timely manner.
            </p>

            <p>
              With over 23,000 different insurance plans covering over 180
              million Americans today, it is important that YOU read your policy
              and booklet carefully to maximize your individual benefits. Your
              policy is a contract between you and your insurance company to
              improve your dental health.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Main

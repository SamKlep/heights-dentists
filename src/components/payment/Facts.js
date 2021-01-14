import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'

const Facts = () => {
  return (
    <div>
      <Container className='mt-5 mb-5'>
        <Row>
          <Col>
            <h1 className='mb-5'>Payment Facts</h1>
            <h4>
              <strong>Fact #1</strong>
            </h4>
            <br />
            <p className='lead'>
              Dental insurance is NOT meant to be a PAY-ALL, it is only meant to
              be an aid.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            {' '}
            <br />
            <h4>
              <strong>Fact #2</strong>
            </h4>{' '}
            <br />
            <p className='lead'>
              Many plans tell their insured that they’ll be covered “up to 80 or
              100 percent.” Some plans pay more – some less. The amount your
              plan pays is determined by how much your employer invested in the
              dental plan.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            {' '}
            <br />
            <h4>
              <strong>Fact #3</strong>
            </h4>{' '}
            <br />
            <p className='lead'>
              It has been the experience of many dentists that some insurance
              companies tell their customers that “fees are above the usual and
              customary fees” rather than saying to them “insurance benefits are
              low.” Remember you get back only what your employer puts in less
              the profits of the insurance company.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            {' '}
            <br />
            <h4>
              <strong>Fact #4</strong>
            </h4>{' '}
            <br />
            <p className='lead'>
              Depending on the level of insurance your employer purchased, some
              dental services may not be covered by your insurance carrier.
            </p>
            <p className='lead'>
              Even with dental insurance, YOU are still responsible for the
              entire cost of our professional services. Most dental insurance
              plans have policy limitations in dental treatment and payment for
              treatment. Your insurance policy may not cover all dental services
              and may only pay a portion of the total cost of your dental
              treatment. We will assist you in determining this. After your
              first visit we accept assignment of benefits paid by your
              insurance company. If however, 60 days after submitting a claim
              your insurance company has not responded, you become responsible
              for any unpaid balance. Financial arrangements are available to
              assist YOU in the payment of your bill.
            </p>
            <p className='lead'>
              We recognize that your utilization of dental insurance can
              contribute to your dental health. We are happy to assist you to
              the best of our ability with your dental insurance.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Facts

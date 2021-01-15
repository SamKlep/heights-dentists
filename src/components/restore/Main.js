import React from 'react'
import { Jumbotron, Container, Row, Col, ListGroup } from 'react-bootstrap'

const Main = () => {
  return (
    <div className='container'>
      <Jumbotron className='cosmetic-jumbo'></Jumbotron>
      <Container className='mb-5'>
        <Row>
          <Col>
            <h1 className='mt-5'>Restorative Dentistry Houston</h1>
            <h3>We Can Help Restore Your Smile’s Brilliance and Luster!</h3>
            <p className='mt-3 lead'>
              Restorative dentistry, encompasses a number of different
              procedures and is intended to satisfy one goal: to return your
              smile to its natural state of health, function, form, and
              esthetics. Our Downtown Dentists are experienced at providing
              natural-looking and comfortable dental restorations, and are
              well-versed with today’s advanced dental materials and techniques.
              You don’t have to live with damaged teeth: dental restorations can
              make a big difference in the function and appearance of your
              teeth.
            </p>
            <br />
            <ListGroup
              className='cosmetic-group mx-auto text-center'
              variant='flush'>
              <ListGroup.Item>Dental Crowns</ListGroup.Item>
              <ListGroup.Item>Dental Bridges</ListGroup.Item>
              <ListGroup.Item>Dentures/Partials</ListGroup.Item>
              <ListGroup.Item>Dental Implants</ListGroup.Item>
              <ListGroup.Item>Root Canal Treatment (RCT)</ListGroup.Item>
            </ListGroup>
            <br />
            <h3 className='mt-5'>Dental Crowns</h3>
            <p className='lead mt-4'>
              Dental crowns are an excellent dental restoration option for teeth
              that are decayed, cracked, or broken to the point where a filling
              is not enough to hold the tooth together and prevent further
              damage. Dental crowns can also be used to strengthen a weak tooth,
              or to enhance a tooth’s appearance. During the procedure, all of
              the damaged tooth material is removed, and your custom-made crown
              is permanently cemented onto the remaining tooth structure. Crowns
              seal off the damaged area and restore normal function to the
              tooth, so eating and speaking are not affected. Crowns can be made
              of metal or tooth-colored material – both types are durable and
              comfortable.
            </p>
            <br />
          </Col>
        </Row>
        <Row>
          <Col>
            <h3 className='mt-5'>Dental Bridges</h3>
            <p className='lead mt-4'>
              If you have a missing tooth, not only is your appearance affected,
              your dental health may be at risk. This is because your other
              teeth tend to drift toward the space left by the missing tooth,
              setting off a chain reaction of alignment, bite, and gapping
              problems throughout your mouth. One of the best ways to prevent
              these problems is to replace the missing tooth with a bridge. A
              dental bridge is a prosthetic, natural-colored tooth that is
              permanently anchored into place with crowns that are placed onto
              the adjoining teeth. Bridges are particularly effective because
              they fill the gap left by the missing tooth, prevent your other
              teeth from drifting, and maintain the health and beauty of your
              smile. At our restorative dentistry practice in downtown Houston,
              we have extensive experience placing bridges and believe that they
              are particularly effective solutions for missing teeth.
            </p>
            <br />
          </Col>
        </Row>
        <Row>
          <Col>
            <h3 className='mt-5'>Dentures/Partials</h3>
            <p className='lead mt-4'>
              Over time, your teeth can wear down, decay, become dull and
              brittle, and may even require removal. Besides being unattractive,
              aging teeth can cause problems with eating and speaking. If this
              is the case for you or a loved one, dentures may be the best
              solution to restore dental health and satisfaction with your
              appearance. The Downtown Dentists provide advanced denture
              solutions that are comfortable, natural-looking, and easy to care
              for. Whether you require a full set of dentures, or a partial set
              to replace only a few teeth, we can help your smile stay
              attractive and functional for many years to come. At our
              restorative dentistry practice in downtown Houston, we utilize a
              range of procedures to meet the needs of our patients, and believe
              that in some cases dentures provide the best solution.
            </p>
            <br />
          </Col>
        </Row>
        <Row>
          <Col>
            <h3 className='mt-5'>Dental Implants</h3>
            <p className='lead mt-4'>
              For a long-term, lifelike replacement of a missing tooth, dental
              implants are the most technologically advanced solution. First,
              Dr. Lyons or an oral surgeon will place the implant into the
              jawbone beneath the missing tooth. The jawbone eventually fuses
              together with the implant which now serves as the “root” for your
              tooth restoration. Then, one of our dentists will attach a
              custom-made prosthetic tooth to the new root. Dental implants are
              strong, natural-looking, and impervious to stains. With normal
              brushing and flossing, these durable restorations can last a
              lifetime. They can be used to replace one missing tooth, or even
              an entire set of teeth. If you are interested in dental implants
              or any of our other dental restoration options, please contact us
              today. We’re ready to help your smile look great again!
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3 className='mt-5'>Root Canal Treatment</h3>
            <p className='lead mt-4'>
              Have you ever experienced a toothache? If a tooth becomes infected
              or has a painful large cavity, it is at serious risk. The solution
              is root canal treatment.
            </p>
            <p className='lead mt-4'>
              RCT involves removing all living tissue (“the nerve”) from inside
              the tooth. This living tissue is also known as the pulp. The pulp
              starts in the tooth and tracts into the roots via a canal system.
              Once the root canal system is properly cleaned, shaped, and
              disinfected, a rubberized filler known as Gutta Percha is used to
              fill and seal the root canal system. Depending on the extent of
              the infection, our downtown dentists will determine if this can be
              completed in one or two visit and if an antibiotic regime is
              necessary.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Main

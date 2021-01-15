import React from 'react'
import { Jumbotron, Container, Row, Col, ListGroup } from 'react-bootstrap'

const Main = () => {
  return (
    <div className='container'>
      <Jumbotron className='cosmetic-jumbo'></Jumbotron>
      <Container className='mb-5'>
        <Row>
          <Col>
            <h1 className='mt-5'>Cosmetic Dentistry</h1>
            <p className='mt-3 lead'>
              Whether due to injury, genetics, or inadequate dental care, we can
              help if you would like to improve your smile. We think that
              everyone deserves to feel happy with their smile, and we can offer
              you a variety of options to repair or replace damaged or otherwise
              unattractive teeth. Porcelain veneers, dental bonding,
              Invisalign®, tooth-colored fillings and Zoom!® teeth whitening are
              all viable cosmetic surgery options that can be used alone or in
              combination to produce a functional, beautiful smile.
            </p>
            <br />
            <ListGroup
              className='cosmetic-group mx-auto text-center'
              variant='flush'>
              <ListGroup.Item>
                Zoom! ® In-Office and At-Home Teeth Whitening
              </ListGroup.Item>
              <ListGroup.Item>Porcelain Veneers</ListGroup.Item>
              <ListGroup.Item>Invisalign®</ListGroup.Item>
              <ListGroup.Item>Dental Bonding</ListGroup.Item>
            </ListGroup>
            <br />
            <h3 className='mt-5'>
              Zoom! ® In-Office and At-Home Teeth Whitening
            </h3>
            <p className='lead mt-4'>
              Have you tried any of those do-it-yourself whitening gels, trays,
              strips, or other inconvenient and ineffective products? If you
              have, you probably disliked the hassle, and weren’t satisfied with
              the results. We believe that professional smile makeovers with the
              Zoom!® teeth whitening system is a better way to get the bright,
              white smile that you want. This simple, painless process takes
              only about an hour, and can make your teeth up to ten shades
              whiter. In combination with at-home whitening trays, you will get
              a result that lasts. Zoom!® combines powerful peroxide action with
              a special activation light to deliver stunning results even on
              stubborn stains from coffee, wine, or tobacco.
            </p>
            <br />
            <p>
              If you have a hectic lifestyle and prefer to experience the Zoom®
              teeth whitening system at home on your own schedule, we even offer
              the Zoom!® Take-Home System. Unlike over-the-counter products,
              Zoom!® Take-Home offers dramatic whitening in just three nights.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3 className='mt-5'>Porcelain Veneers</h3>
            <p className='lead mt-4'>
              From the covers of magazines to people you see on the street,
              straight, white teeth seem to be everywhere. So what’s the secret
              to all of these beautiful smiles? Porcelain veneers! Veneers are
              custom-made shells of super-fine porcelain that are affixed to the
              exterior of your natural teeth. They can do everything from close
              gaps and hide misaligned teeth to whiten and brighten your smile.
            </p>
            <br />
            <p>
              Porcelain veneers are strong and durable, too – resistant to
              stains, chips, and everyday wear. If you want to treat yourself to
              the ultimate smile solution, consider porcelain veneers. The team
              at Downtown Dentists have a wealth of experience creating gorgeous
              smiles with veneers!
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3 className='mt-5'>Invisalign®</h3>
            <p className='lead mt-4'>
              In the past, people with crooked teeth had only two choices: live
              with them, or endure a long battle with unattractive,
              uncomfortable metal braces. Today there’s a better way to get that
              straight, even smile you want… without anyone having to know.
              Invisalign® is the straightening system that you’ve heard so much
              about. At our cosmetic dentistry practice in Houston, we proudly
              offer the Invisalign® system to our patients not only because it
              works, but because our patients like it so much!
            </p>
            <br />
            <p>
              Using a series of clear aligners that are custom-made for your
              teeth, Invisalign® gradually pulls your teeth into a straighter,
              more attractive position. Every couple of weeks, you switch to the
              next aligner, and over several months to about a year, your new
              smile will emerge. The aligners are almost completely invisible,
              do not interfere with speaking, and can easily be removed while
              you eat or clean your teeth. They are particularly appealing to
              adults who want a more discreet solution than the traditional
              “metal mouth” set of braces.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3 className='mt-5'>Dental Bonding</h3>
            <p className='lead mt-4'>
              If you are unhappy with the appearance of one or more teeth,
              bonding can help make your smile more attractive. During the
              bonding procedure, durable dental resin is tinted to perfectly
              match your natural tooth color, and is then permanently bonded to
              the tooth. The advantage of this material is that it can be shaped
              and polished to create a tooth surface that appears natural,
              smooth, and similar to your other teeth. Through dental bonding,
              you can attain an attractive smile that is also durable and easy
              to maintain. Bonding can be used on front teeth and back teeth,
              and is faster and more affordable than porcelain veneers.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Main

import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import { Container, Row, Col, ListGroup, Card } from 'react-bootstrap'

const Map = ({ text }) => <div>{text}</div>

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 29.7604,
      lng: -95.3698,
    },
    zoom: 11,
  }

  render() {
    return (
      <>
        <Container>
          <Row className='mb-4'>
            <Col className='text-center'>
              <h1>Houston Strong</h1>
              <p className='lead'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <Card className='text-center mx-auto' style={{ width: '18rem' }}>
                <Card.Header>
                  <strong>Contact</strong>
                </Card.Header>
                <ListGroup variant='flush'>
                  <ListGroup.Item>3482 Midway Dr.</ListGroup.Item>
                  <ListGroup.Item>(713) 478 - 8723</ListGroup.Item>
                  <ListGroup.Item>info@heightsdentists.com</ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          </Row>
        </Container>
        <div style={{ height: '100vh', width: '100%', paddingBottom: '30px' }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: 'AIzaSyAjjINNS_YKU59Wt1jQwU07vPZsn87BYVI',
            }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}>
            <Map lat={59.955413} lng={30.337844} text='My Marker' />
          </GoogleMapReact>
        </div>
      </>
    )
  }
}

export default SimpleMap

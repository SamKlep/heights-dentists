import React from 'react'
import { Jumbotron, Container } from 'react-bootstrap'

const Filler = () => {
  return (
    <div>
      <Jumbotron className='text-center bg-dark' fluid>
        <Container>
          <h1 className='text-black'>Crowns In One Appointment</h1>
          <p className='lead text-light'>
            Our new CEREC milling unit allows us to prepare and permanently
            place the crown all in ONE appointment. No more having an impression
            taken and having to wear a temporary crown for 2 weeks while the lab
            fabricates your crown. EVERYTHING is taken care in one appointment.
            Contact us today to learn more!
          </p>
        </Container>
      </Jumbotron>
    </div>
  )
}

export default Filler

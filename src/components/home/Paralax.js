import { Jumbotron, Container } from 'react-bootstrap'

const Paralax = () => {
  return (
    <div>
      <Jumbotron fluid>
        <Container>
          <h1>Professional, quality care you can trust.</h1>
          <p className='lead'>
            Our advanced technology and quality dentistry combined with our
            personal, patient-focused touch deliver an exceptional experience at
            every visit. We’re a team you can trust.
          </p>
        </Container>
      </Jumbotron>
    </div>
  )
}

export default Paralax

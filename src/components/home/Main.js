import { Carousel } from 'react-bootstrap'

const Main = () => {
  return (
    <div className='container mb-5'>
      <Carousel>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='/img/dentist-office1.jpg'
            alt='First slide'
          />
          <Carousel.Caption>
            <h3>Patient & Professinal</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='/img/dentist-office2.jpg'
            alt='Third slide'
          />

          <Carousel.Caption>
            <h3>Preventative Care</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='/img/dentist-exam.jpeg'
            alt='Third slide'
          />

          <Carousel.Caption>
            <h3>Knowledgeable & Caring</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Main

import Main from '../components/home/Main'
import OurStaff from '../components/home/OurStaff'
import Paralax from '../components/home/Paralax'
import EndContent from '../components/home/EndContent'
import { Container } from 'react-bootstrap'
import Filler from '../components/home/Filler'
import Simplemap from '../components/home/Map'

const HomeScreen = () => {
  return (
    <>
      <Container>
        <Main />
      </Container>
      <Paralax />
      <OurStaff />
      <Container>
        <EndContent />
      </Container>
      <Filler />
      <Container>
        <Simplemap />
      </Container>
    </>
  )
}

export default HomeScreen

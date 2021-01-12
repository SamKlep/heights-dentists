import Navigator from './Navigator'
import { Jumbotron, Container } from 'react-bootstrap'

const JumboHome = () => {
  return (
    <div>
      <Jumbotron className='jumbo-main bg-white' fluid>
        <Container></Container>
      </Jumbotron>
      <Navigator />
    </div>
  )
}

export default JumboHome

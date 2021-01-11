import Navigator from './Navigator'
import { Jumbotron, Container } from 'react-bootstrap'

const JumboHome = () => {
  return (
    <div>
      <Jumbotron fluid>
        <Container>
          <h1>Heights Dentists</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
            quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
            mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
            Vestibulum lacinia arcu eget nulla.
          </p>
        </Container>
      </Jumbotron>
      <Navigator />
    </div>
  )
}

export default JumboHome

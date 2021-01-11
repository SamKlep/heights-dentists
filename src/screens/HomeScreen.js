import Main from '../components/home/Main'
import OurStaff from '../components/home/OurStaff'
import Paralax from '../components/home/Paralax'
import EndContent from '../components/home/EndContent'

const HomeScreen = () => {
  return (
    <div className='container'>
      <Main />
      <OurStaff />
      <Paralax />
      <EndContent />
    </div>
  )
}

export default HomeScreen

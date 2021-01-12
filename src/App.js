import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/ui/Header'
import JumboHome from './components/ui/JumboHome'
import HomeScreen from './screens/HomeScreen'
import AboutScreen from './screens/AboutScreen'
import CosmeticScreen from './screens/CosmeticScreen'
import RestorativeScreen from './screens/RestorativeScreen'
import PreventativeScreen from './screens/PreventativeScreen'
import ContactScreen from './screens/ContactScreen'
import './App.css'
import Footer from './components/ui/Footer'

function App() {
  return (
    <Router>
      <Header />
      <JumboHome />
      <Switch>
        <Route path='/' component={HomeScreen} exact />
        <Route path='/about' component={AboutScreen} />
        <Route path='/cosmetic' component={CosmeticScreen} />
        <Route path='/restorative' component={RestorativeScreen} />
        <Route path='/preventative' component={PreventativeScreen} />
        <Route path='/contact' component={ContactScreen} />
      </Switch>
      <Footer />
    </Router>
  )
}

export default App

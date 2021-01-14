import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/ui/Header'
import JumboHome from './components/ui/JumboHome'
import HomeScreen from './screens/HomeScreen'
import AboutScreen from './screens/AboutScreen'
import StaffScreen from './screens/StaffScreen'
import PaymentScreen from './screens/PaymentScreen'
import CosmeticScreen from './screens/CosmeticScreen'
import RestorativeScreen from './screens/RestorativeScreen'
import PreventativeScreen from './screens/PreventativeScreen'
import XraysScreen from './screens/XraysScreen'
import WhiteningScreen from './screens/WhiteningScreen'
import InvisalignScreen from './screens/InvisalignScreen'
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
        <Route path='/staff' component={StaffScreen} />
        <Route path='/payment' component={PaymentScreen} />
        <Route path='/cosmetic' component={CosmeticScreen} />
        <Route path='/restorative' component={RestorativeScreen} />
        <Route path='/preventative' component={PreventativeScreen} />
        <Route path='/xrays' component={XraysScreen} />
        <Route path='/whitening' component={WhiteningScreen} />
        <Route path='/invisalign' component={InvisalignScreen} />
        <Route path='/contact' component={ContactScreen} />
      </Switch>
      <Footer />
    </Router>
  )
}

export default App

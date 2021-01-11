import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/ui/Header'
import JumboHome from './components/ui/JumboHome'
import HomeScreen from './screens/HomeScreen'
import './App.css'
import Footer from './components/ui/Footer'

function App() {
  return (
    <Router>
      <Header />
      <JumboHome />
      <Switch>
        <Route path='/' component={HomeScreen} exact />
      </Switch>
      <Footer />
    </Router>
  )
}

export default App

import { Routes, Route } from 'react-router'

import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
import PCConfigurationsCatalog from './components/catalog/PCConfigurationsCatalog'
import PCConfigurationCreate from './components/catalog/PCConfigurationCreate'
import PCConfigurationInfo from './components/catalog/PCConfigurationInfo'
import PCConfigurationEdit from './components/catalog/PCConfigurationEdit'
import Login from './components/user_activities/login'
import Register from './components/user_activities/Register'
import Logout from './components/user_activities/Logout'
import About from './components/app_info/About'
import Contact from './components/app_info/Contact'
import Privacy from './components/app_info/Privacy'
import MissingPage from './components/MissingPage'
import './App.css'

function App() {

  return (
    <div>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/configurations" element={<PCConfigurationsCatalog />} />
          <Route path="/configurations/create" element={<PCConfigurationCreate />} />
          <Route path="/configurations/:configurationId/info" element={<PCConfigurationInfo />} />
          <Route path="/configurations/:configurationId/edit" element={<PCConfigurationEdit />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="*" element={<MissingPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App

import { Routes, Route } from 'react-router'

import UserProvider from './provider/UserProvider'

import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
import PCConfigurationsCatalog from './components/catalog/PCConfigurationsCatalog'
import PCConfigurationInfo from './components/catalog/PCConfigurationInfo'
import PCConfigurationAdd from './components/catalog/PCConfigurationAdd'
import PCConfigurationEdit from './components/catalog/PCConfigurationEdit'
import Login from './components/user_activities/Login'
import Register from './components/user_activities/Register'
import Logout from './components/user_activities/Logout'
import About from './components/app_info/About'
import Contact from './components/app_info/Contact'
import Privacy from './components/app_info/Privacy'
import MissingPage from './components/MissingPage'
import AuthGuard from './components/guards/UserAuthGuard'
import GuestGuard from './components/guards/GuestGuard'
import './App.css'

function App() {

  return (
    <UserProvider>
      <div>
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/configurations" element={<PCConfigurationsCatalog />} />
            <Route path="/configurations/:configurationId/info" element={<PCConfigurationInfo />} />

            <Route element={<AuthGuard />}>
              <Route path="/configurations/add" element={<PCConfigurationAdd />} />
              <Route path="/configurations/:configurationId/edit" element={<PCConfigurationEdit />} /> 
              <Route path="/logout" element={<Logout />} />
            </Route>

            <Route element={<GuestGuard />}>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Route>

            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="*" element={<MissingPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </UserProvider>
  )
}

export default App

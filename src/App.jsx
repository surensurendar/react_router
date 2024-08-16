import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Menu from './pages/Menu'
import About from './pages/About'
import Nopage from './pages/Nopage'

import Phone from './pages/Phone'
import Charge from './pages/Charge'
import Laptop from './pages/Laptop'
import Airpod from './pages/Airpod'


function App() {


  return (
    <div className="App">
      {/* <Phone/>
       <Charge/>
       <Laptop/>
       <Airpod/> */}

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='/Home' element={<Home />} >
            <Route path='Phone' element={<Phone />} />
            <Route path='Charge' element={<Charge />} />
            <Route exact path='Laptop' element={<Laptop />} />
            <Route exact path='Airpod' element={<Airpod />} />


          </Route>

          <Route path='/contact' element={<Contact />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='*' element={<Nopage />} />
          <Route path='/about' element={<About />} />





        </Routes>
      </BrowserRouter>
    </div >
  )
}

export default App


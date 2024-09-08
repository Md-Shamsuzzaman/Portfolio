

import './App.css'
import './MediaQuery.css'
import About from './components/About';
import Footer from './components/Footer';
import Home from './components/Home'
import Navbar from './components/Navbar'
import { Routes, Route } from "react-router-dom";
import Mainskill from './components/SkillSection/Mainskill';


function App() {


  return (
    <>


      <Navbar/>



      <Routes>
        {/* <Route path='/' element={<Layout />}> */}
          <Route path="home" element={<Home />} />
          <Route path='/' element={<About />} />
          <Route path="mainskill" element={<Mainskill />} />
        {/* </Route> */}
      </Routes>




      <Footer/>
    </>
  )
}

export default App

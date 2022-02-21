import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './Header/Header'
import Footer from './Footer/Footer'
import About from './Body/About/About'
import ArcheoSeismology from './Body/ArcheoSeismology/ArcheoSeismology'
import Ecology from './Body/Ecology/Ecology'
import Geophysics from './Body/Geophysics/Geophysics'
import Geotech from './Body/Geotech/Geotech'
import GIS from './Body/GIS/GIS'
import HazardAndRisk from './Body/HazardAndRisk/HazardAndRisk'
import Home from './Body/Home/Home'
import OurStaff from './Body/OurStaff/OurStaff'

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/ourStaff' element={<OurStaff />} />
          <Route path='/hazardAndRisk' element={<HazardAndRisk />} /> 
          <Route path='/gis' element={<GIS />} />
          <Route path='/geophysics' element={<Geophysics />} />
          <Route path='/geotech' element={<Geotech />} />
          <Route path='/ecology' element={<Ecology />} />
          <Route path='/archeoSeismology' element={<ArcheoSeismology />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;

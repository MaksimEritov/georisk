import { Link } from 'react-router-dom';
import './Navbar.css';
import Navlink from './Navlink/Navlink';

const Navbar = () => {
    return (
        <>
           <nav className='navbar'>
            <Link to='/' className='navLogo' />
            <div className='navMain'>
                <Navlink to='/hazardAndRisk' name='Natural hazards and risk assessment' />
                <Navlink to='/geotech' name='Geotechnical engineering' />
                <Navlink to='/geophysics' name='Geophysical studies and seismic zoning' />
                <Navlink to='/gis' name='Remote sensing and GIS' />
                <Navlink to='/ecology' name='Ecology' />
                <Navlink to='/archeoSeismology' name='Archeo Seismology' />
                <Navlink to='/ourStaff' name='Our Staff' />
                <Navlink to='/about' name='About' />
            </div> 
           </nav> 
        </>
    );
};
export default Navbar;
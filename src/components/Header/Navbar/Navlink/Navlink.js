import { Link } from 'react-router-dom';
import './Navlink.css'

const Navlink = (props) => (
    <Link to={props.to}>{props.name}</Link>
);
export default Navlink;
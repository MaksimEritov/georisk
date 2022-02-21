
import './About.css';
import { About as AboutData } from '../../../constants'

const About = () => {
  return (
    <div className='About'>
      <div className='address'>
        <h4>Company Address</h4>
        <p>Address: {AboutData.address}</p>
        <p>Tel.: {AboutData.tel1} / {AboutData.tel2}</p>
        <p>Website: {AboutData.website}</p>
        <p>Email: {AboutData.email}</p>
      </div>
      <div className='contacts'>
        <h4>Contact Persons</h4>
        {Object.keys(AboutData.contactPerson).map(key => (<p>{key}: {AboutData.contactPerson[key]}</p>))}
      </div>
    </div>
  );
}

export default About;
 
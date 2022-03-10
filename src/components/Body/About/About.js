
import './About.css';
import { About as AboutData } from '../../../constants'

const About = () => {
  return (
    <div className='About'>
      <h1 className='title'>Contacts</h1>
      <div className='contactsHolder'>
        <div className='address'>
          <h4>Company Address</h4>
          <p>📞 {AboutData.tel1} / {AboutData.tel2}</p>
          <p>📧 {AboutData.email}</p>
          <p>🌎 {AboutData.website}</p>
          <p>📍 {AboutData.address}</p>
        </div>
        <div className='contacts'>
          <h4>Contact Persons</h4>
          {Object.keys(AboutData.contactPerson).map(key => (<p key={key}>{key}: + {AboutData.contactPerson[key]}</p>))}
        </div>
      </div>
    </div>
  );
}

export default About;
 
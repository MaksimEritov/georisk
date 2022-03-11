
import './About.css';
import { About as AboutData } from '../../../constants';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

const About = () => {
  return (
    <div className='About'>
      <h1 className='title'>Contacts</h1>
      <YMaps>
        <div className='mapHolder'>
          <Map
            defaultState={{ center: AboutData.coordinates, zoom: 15 }}
            width={500}
            height={500}
            >
            <Placemark
                geometry={AboutData.coordinates}
                key={AboutData.coordinates}
                draggable={false}
            />
          </Map>
        </div>
      </YMaps>
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
 
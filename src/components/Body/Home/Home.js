
import './Home.css';
import { home } from '../../../constants'

const Home = () => {
  return (
    <div className='Home'>
      <h4>{home.title}</h4>
      <p>{home.paragraph1}</p>
      <p>{home.paragraph2}</p>
      <p>{home.paragraph3}</p>
      <p>{home.paragraph4}</p>
      <p>{home.paragraph5}</p>
      <p>{home.paragraph6}</p>
      <p>{home.paragraph7}</p>
    </div>
  );
}

export default Home;

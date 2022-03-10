
import './Geophysics.css';
import { geophysics } from '../../../constants';
import Table from '../../helpers/Table/Table';
import geophysics1 from '../../../img/geophysics1.png';
import geophysics2 from '../../../img/geophysics2.png';


const Geophysics = () => {
  return (
    <div className='Geophysics'>
      <h1 className='title'>Geophysicsnical engineering and slope stability analysis</h1>
      <div className='geophysicsMainText'>
        <p>{geophysics.mainText}</p>
        <div className='geophysicsList'>
          {
            geophysics.geophysicsList.map(({ text, img }) => {
              return (
                <div key={text} className='geophysicsSection'>
                  <p> {text}</p>
                  {img ? <img alt="georisk work" src={img === 'geophysics1' ? geophysics1 : geophysics2} /> : null}
                </div>
              )
            })
          }
        </div>
        <ol>
          {geophysics.techField.map(({ name, fields }) => {
            return(
              <li key={name} className='techSection'>
                <h4>{name}</h4>
                <ul>
                  {fields.map(text => <li key={text}>{text}</li>)}
                </ul>
              </li>
            )
          })}
        </ol>
      </div>
      <Table prefix={geophysics.tablePrefix} data={geophysics.tableData} names={geophysics.tableFieldsNames} />
    </div>
  );
}

export default Geophysics;
 
 




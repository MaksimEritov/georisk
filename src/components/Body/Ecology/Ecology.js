
import './Ecology.css';
import { ecology } from '../../../constants'
import Table from '../../helpers/Table/Table'
import ecologyInFieldSrc from '../../../img/ecology1.png';

const Ecology = () => {
  return (
    <div className='Ecology'>
      <h1 className='title'>Ecology</h1>
      <div className='ecoMainText'>
        <p>{ecology.textStart}</p>
        <ul>
          {ecology.companyUndertakesMayIncorporate.map(text => <li key={text} >{text}</li>)}
        </ul>
        <img alt="Ecology in field" src={ecologyInFieldSrc}/>
        <p>{ecology.studyOfSurfaceText}</p>
        <ul>
          {ecology.studyOfSurface.map(text => <li key={text} >{text}</li>)}
        </ul>
        <p>{ecology.textEnd}</p>
      </div>
      <Table prefix={ecology.tablePrefix} data={ecology.tableData} names={ecology.tableFieldsNames} />
    </div>
  );
}

export default Ecology;
 
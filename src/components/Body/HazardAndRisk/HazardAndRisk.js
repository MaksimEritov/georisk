
import './HazardAndRisk.css';
import { hazardAndRisk } from '../../../constants';
import Table from '../../helpers/Table/Table';
import Tab from '../../helpers/Tabs/Tabs'

const HazardAndRisk = () => {
  return (
    <div className='HazardAndRisk'>
      <h1 className='title'>Natural hazards and risk assessment</h1>
      <div className='hazardAndRiskMainText'>
        <p>{hazardAndRisk.mainText}</p>
        <div className='tabHolder'>
          <Tab />
        </div>
        <div className='delimeter'></div>
        <p>{hazardAndRisk.textEnd}</p>
      </div>
      <Table prefix={hazardAndRisk.tablePrefix} data={hazardAndRisk.tableData} names={hazardAndRisk.tableFieldsNames} />
    </div>
  );
}

export default HazardAndRisk;
 
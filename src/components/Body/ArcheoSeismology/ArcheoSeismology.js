
import './ArcheoSeismology.css';
import { archeoSeismology } from '../../../constants'
import Table from '../../helpers/Table/Table'

const ArcheoSeismology = () => {
  return (
    <div className='ArcheoSeismology'>
      <h1 className='title'>Archeo - Seismology</h1>
      <div className='archeoMainText'>
        <p>{archeoSeismology.main}</p>
      </div>
      <Table prefix={archeoSeismology.tablePrefix} data={archeoSeismology.tableData} names={archeoSeismology.tableFieldsNames} />
    </div>
  );
}

export default ArcheoSeismology;
 
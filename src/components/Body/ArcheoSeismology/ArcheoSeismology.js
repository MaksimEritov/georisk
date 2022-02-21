
import './ArcheoSeismology.css';
import { archeoSeismology } from '../../../constants'
import Table from '../../helpers/Table/Table'

const ArcheoSeismology = () => {
  return (
    <div className='ArcheoSeismology'>
      <h1 className='title'>ArcheoSeismology</h1>
      <div className='archeoMainText'>
        <h4>{archeoSeismology.main}</h4>
      </div>
      <Table data={archeoSeismology.tableData} names={archeoSeismology.tableFieldsNames} />
    </div>
  );
}

export default ArcheoSeismology;
 
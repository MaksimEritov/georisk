
import './GIS.css';
import { gis } from '../../../constants';
import Table from '../../helpers/Table/Table';
import Model3dPic from '../../../img/3dModelGis.png';

const GIS = () => {
  return (
    <div className='Gis'>
      <h1 className='title'>Remote sensing and GIS</h1>
      <div className='gisMainText'>
        <p>{gis.mainText}</p>
        <img alt='3D Model' src={Model3dPic}/>
      </div>
      <Table prefix={gis.tablePrefix} data={gis.tableData} names={gis.tableFieldsNames} />
    </div>
  );
}

export default GIS;
 
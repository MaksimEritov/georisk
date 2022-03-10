
import './Geotech.css';
import { geotech } from '../../../constants';
import Table from '../../helpers/Table/Table';
import drillingPic1 from '../../../img/geotech1.png';
import drillingPic2 from '../../../img/geotech2.png';
import geotechnicalEngineering1 from '../../../img/geotechnicalEngineering1.png';
import geotechnicalEngineering2 from '../../../img/geotechnicalEngineering2.png';
import slopeStabilityAnalysisPic from '../../../img/slopeStabilityAnalysis.png';


const Geotech = () => {
  return (
    <div className='Geotech'>
      <h1 className='title'>Geotechnical engineering and slope stability analysis</h1>
      <div className='geotechMainText'>
        <p>{geotech.mainText}</p>
        <div className='geotechList'>
          <div className='geotechSection'>
            <h3>Drilling of borings with core recovery.</h3>
            <div className='picsHolder'>
              <img alt='drillingPic2' src={drillingPic1}/>
              <img alt='drillingPic2' src={drillingPic2}/>
            </div>
            <p>Drilling rig and photo of recovered core</p>
          </div>
          <div className='geotechSection'>
            <h3>Geotechnical engineering testing of soils.</h3>
            <ul>
              {geotech.geotechnicalEngineeringTesting.map(text => <li key={text}>{text}</li>)}
            </ul>
            <div className='picsHolder'>
              <img alt='geotechnicalEngineering1' src={geotechnicalEngineering1}/>
              <img alt='geotechnicalEngineering2' src={geotechnicalEngineering2}/>
            </div>
            <p>1. Equipment used for soil particle size analysis. 2. In-situ geotechnical test (Rock Mass Rating)</p>
          </div>
          <div className='geotechSection'>
            <h3>Slope stability analysis</h3>
            <p>{geotech.slopeStabilityAnalysis}</p>
            <img className='withoutBorderRadius' alt='drillingPic2' src={slopeStabilityAnalysisPic}/>
            <p>The value of Fs estimated by slope stability calculation is matched against the international classification table to assess slope stability in the considered area.</p>
          </div>
        </div>
        {/* <img alt='3D Model' src={Model3dPic}/> */}
      </div>
      <Table prefix={geotech.tablePrefix} data={geotech.tableData} names={geotech.tableFieldsNames} />
    </div>
  );
}

export default Geotech;
 
 




import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { hazardAndRisk } from '../../../constants';
import hazardsEarthquake1 from '../../../img/hazardsEarthquake1.png';
import hazardsLandslide1 from '../../../img/hazardsLandslide1.png';

const hazardTab = () => (
  <Tabs>
    <TabList>
      <Tab>Earthquakes</Tab>
      <Tab>Volcanoes</Tab>
      <Tab>Landslides</Tab>
      <Tab>Assessments of seismic risk</Tab>
    </TabList>

    <TabPanel>
      <h2>Earthquakes</h2>
      <p>{hazardAndRisk.earthquake.firstText}</p>
      <h4>{hazardAndRisk.earthquake.listPrefix}</h4>
      <ul>
        {hazardAndRisk.earthquake.list.map(text => <li key={text}>{text}</li>)}
      </ul>
      <br />
      <p>{hazardAndRisk.earthquake.lastText}</p>
      <img alt="Spitak Earthquake" src={hazardsEarthquake1}/>
    </TabPanel>
    <TabPanel>
      <h2>Volcanoes</h2>
      <p>{hazardAndRisk.volcanoes.text}</p>
    </TabPanel>



    <TabPanel>
      <h2>Landslides</h2>
      <h4>{hazardAndRisk.landslides.listPrefix}</h4>
      <ul>
        {hazardAndRisk.landslides.list.map(text => <li key={text}>{text}</li>)}
      </ul>
      <br />
      <img alt="Spitak Earthquake" src={hazardsLandslide1}/>
      <br />
    </TabPanel>

    <TabPanel>
      <h2>Probabilistic and deterministic assessments of seismic risk for the selected areas</h2>
      <h4>{hazardAndRisk.seismicRisk.listPrefix1}</h4>
      <ul>
        {hazardAndRisk.seismicRisk.list1.map(text => <li key={text}>{text}</li>)}
      </ul>
      <h4>{hazardAndRisk.seismicRisk.listPrefix2}</h4>
      <ul>
        {hazardAndRisk.seismicRisk.list2.map(text => <li key={text}>{text}</li>)}
      </ul>
    </TabPanel>
  </Tabs>
);

export default hazardTab;
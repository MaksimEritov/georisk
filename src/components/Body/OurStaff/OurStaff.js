
import './OurStaff.css';
import { ourStaff } from '../../../constants'
import WorkerCard from './workerCard/WorkerCard'

const OurStaff = () => {
  return (
    <div className='OurStaff'>
      <h1 className='title'>Our Staff</h1>
      <div className='ourStaffMainHolder'>
        {Object.keys(ourStaff.staff).map((key, i) => <WorkerCard type={key} key={i} data={ourStaff.staff[key]} />)}
      </div>
    </div>
  );
}

export default OurStaff;

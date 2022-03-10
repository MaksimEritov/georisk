
import './WorkerCard.css';
import armen from '../../../../img/staff/armen.png';
import dima from '../../../../img/staff/dima.png';
import gektor from '../../../../img/staff/gektor.png';
import gohar from '../../../../img/staff/gohar.png';
import martik from '../../../../img/staff/martik.jpg';
import mika from '../../../../img/staff/mika.png';
import petya from '../../../../img/staff/petya.jpg';
import surik from '../../../../img/staff/surik.png';

const photos = {
    armen,
    dima,
    gektor,
    gohar,
    martik,
    mika,
    petya,
    surik,
}

const WorkerCard = props => {
    console.log(props)
  return (
    <div className='WorkerCardHolder'>
        <img alt={props.type} src={photos[props.type]}/>
        <div>
            {props.data.description.map((desc, i) => {
                if (i === 0) {
                    return <p key={i}><b>{props.data.name}</b>{desc}</p>
                }
                return <p key={i}>{desc}</p>
            })}
        </div>
    </div>
  );
}

export default WorkerCard;


import './Table.css';

const Table = props => {
  return (
    <table className='Table'>
      <thead>
        <tr>{props.names.map(name => <th key={name}>{name}</th>)}</tr>
      </thead>
      <tbody>
        {props.data.map((lineProps, i) => (
          <tr key={i}>
            {lineProps.map(prop => <td key={prop}>{prop}</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;

import './App.css';

export default function BasicFunction(props) {
  return (
    <div className="BasicFunction">
       <p className={props.className}> {props.personDetails.fname}</p>
       <p className={props.className}> {props.personDetails.email}</p>
    </div>
  );
}
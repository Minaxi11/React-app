import './Style.css';
export default function Style(props) {
    const ele={
        color:'yellow',
        fontSize: '40px'
    }
    const ele1={
        color:'blue',
        fontSize: '40px'
    }
  return (
    <div className="BasicFunction">
       <h1 className={props.class} style={ele}> {props.text}</h1>
       <h1 className={props.class} style={props.data=='Style Data' ? ele1 : ele}> {props.text}</h1>
       <header className={props.class} > {props.text}</header>
    </div>
  );
}
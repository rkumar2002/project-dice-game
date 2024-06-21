// import '../index.css';

function Button(props){
  return (
    <>
        <button className={`bt ${props.hoverStyle}`}>{props.desc}</button>
    </>
  );
}

export default Button;
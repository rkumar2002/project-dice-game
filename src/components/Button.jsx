import { Link } from 'react-router-dom';

function Button(props){
  if(props.link === "true"){
    return(
      <Link to="/gamepage"><button className={`bt ${props.hoverStyle}`}>{props.desc}</button></Link>
    );
  }
 
  return <button className={`bt ${props.hoverStyle}`}>{props.desc}</button>;
  
}

export default Button;
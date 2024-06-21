const MyButton = ({text}) => {
  return (
    <button className="btnhover" style={{width : "58px", height : "58px", border : "2px solid black", backgroundColor : "white", fontWeight : "bold"}}>
      {text}
    </button>
  );
};

export default MyButton;

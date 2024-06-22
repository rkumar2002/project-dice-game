const MyButton = ({text, onClick}) => {
  // console.log(props.onClick);
  return (
    <button className="btnhover" style={{width : "58px", height : "58px", border : "2px solid black", backgroundColor : "white", fontWeight : "bold"}}
    onClick={onClick}>
      {text}
    </button>
  );
};

export default MyButton;

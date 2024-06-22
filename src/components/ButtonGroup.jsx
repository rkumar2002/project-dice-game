import MyButton from './MyButton';

function ButtonGroup(props){
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      {[1, 2, 3, 4, 5, 6].map((index) => (
        <MyButton key={index} text={`${index}`} onClick={() => props.onButtonClick(index)}/>
      ))}
    </div>
  );
};

export default ButtonGroup;

import MyButton from './MyButton';

const ButtonGroup = () => {
  const handleClick = (buttonIndex) => {
    alert(`Button ${buttonIndex} clicked!`);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      {[1, 2, 3, 4, 5, 6].map((index) => (
        <MyButton key={index} text={`${index}`} onClick={() => handleClick(index)} />
      ))}
    </div>
  );
};

export default ButtonGroup;

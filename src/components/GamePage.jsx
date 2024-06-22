import { useState } from "react";
import Button from "./Button";
import ButtonGroup from "./ButtonGroup";
import dice1 from './images/dice_1.png';
import dice2 from './images/dice_2.png';
import dice3 from './images/dice_3.png';
import dice4 from './images/dice_4.png';
import dice5 from './images/dice_5.png';
import dice6 from './images/dice_6.png';

function GamePage(){
    
    const [score,setScore] = useState(0);
    const [image, setImage] = useState(dice1);
    const [selectedNumber, setSelectedNumber] = useState(null);
    const [error, setError] = useState("");

    const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];

    function resetScore(){
        setScore(0);
        setImage(dice1);
        setSelectedNumber(null);
    }

    function handleButtonClick(number){
        setError("");
        setSelectedNumber(number);
    }

    function handleDiceClick(){
        if (selectedNumber === null) {
            setError("Select a number first");
            return;
        }

        const random = Math.floor(Math.random() * 6) + 1;
        console.log(random);
        setImage(diceImages[random - 1]);

        if (selectedNumber === random) {
            setScore(score + 10);
        } else {
            setScore(score - 1);
        }

        setSelectedNumber(null);
    }


    return (
    <>
        <div style={{fontSize : "18px", color: "#FF0C0C", fontWeight: "bold", position: "absolute", right: "14.5rem", top: "5px"}}>{error}</div>
        <div className="d-flex justify-content-around mt-5">
            <div className="d-flex flex-column" style={{width : "135px", height : "151px"}}>
                <span className="text-center" style={{fontSize : "60px", fontWeight : "bold"}}>{score}</span>
                <span className="text-center" style={{fontWeight : "bold"}}>Total Score</span>
            </div>
            <div>
                <div style={{width : "552px", height : "93px"}}>
                    <ButtonGroup onButtonClick={handleButtonClick}/>
                </div>
                <p className="text-end" style={{fontWeight : "bold"}}>
                    Select Number
                </p>
            </div>
        </div>
        <div className="d-flex flex-column align-items-center" style={{width : "100%"}}>
            <div onClick={handleDiceClick}>
                <img src={image} width={150} alt=""/>
            </div>
            <p style={{fontSize : "20px", fontWeight : "bold"}}>
                Click on Dice to roll
            </p>
            <div className="mb-3">
                <Button desc="Reset Score" hoverStyle="bt-w" onClick={resetScore}/>
            </div>
            <div onClick ={RulesDisplay}>
                <Button desc="Show Rules" hoverStyle="bt-b"/>
            </div>
            <div className="mt-4 p-2" id="rules">
                <h4>How to play dice game</h4>
                <p>Select any number</p>
                <p>Click on dice image</p>
                <p>After click on dice if selected number is equal to dice number you will get 10 points</p>
                <p>If your guess is wrong then 1 point will be dedcuted</p>
            </div>
        </div>
        <Button desc="Go back" hoverStyle="bt-b" position="down"/>
    </>
  )
}

function RulesDisplay(){
    let x = document.getElementById("rules");
    if(x.style.display === "block"){
        x.style.display = "none";
    }
    else{
        x.style.display = "block";
    }
}

export default GamePage;
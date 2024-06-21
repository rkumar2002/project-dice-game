import Button from "./Button";
import ButtonGroup from "./ButtonGroup";
import dices from './images/dice_1.png';

function GamePage(){
    return (
    <>
        <div className="d-flex justify-content-around mt-5">
            <div className="d-flex flex-column" style={{width : "135px", height : "151px"}}>
                <span className="text-center" style={{fontSize : "60px", fontWeight : "bold"}}>0</span>
                <span className="text-center" style={{fontWeight : "bold"}}>Total Score</span>
            </div>
            <div>
                <div style={{width : "552px", height : "93px"}}>
                    <ButtonGroup/>
                </div>
                <p className="text-end" style={{fontWeight : "bold"}}>
                    Select Number
                </p>
            </div>
        </div>
        <div className="d-flex flex-column align-items-center" style={{width : "100%"}}>
            <div>
                <img src={dices} width={150} alt=""/>
            </div>
            <p style={{fontSize : "20px", fontWeight : "bold"}}>
                Click on Dice to roll
            </p>
            <div className="mb-3">
                <Button desc="Reset Score" hoverStyle="bt-w"/>
            </div>
            <div onClick ={RulesDisplay}>
                <Button desc="Show Rules" hoverStyle="bt-b"/>
            </div>
            <div className="rules mt-4 p-2" id="showrules">
                <h4>How to play dice game</h4>
                <p>Select any number</p>
                <p>Click on dice image</p>
                <p>After click on dice if selected number is equal to dice number you will get same point as dice</p>
                <p>If your guess is wrong then 1 point will be dedcuted</p>
            </div>
        </div>
        <Button desc="Go back" hoverStyle="bt-b"/>
    </>
  )
}

function RulesDisplay(){
    let x = document.getElementById("showrules");
    if(x.style.display === "none"){
        x.style.display = "block";
    }
    else{
        x.style.display = "none";
    }
}

export default GamePage;
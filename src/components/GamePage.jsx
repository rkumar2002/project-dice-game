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
        <div className="d-flex justify-content-center" style={{width : "100%"}}>
            <div>
            <img src={dices}/>
            </div>
        </div>
    </>
  )
}

export default GamePage;
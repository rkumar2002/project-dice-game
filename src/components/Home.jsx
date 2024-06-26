import Button from './Button';
import dice from './images/dice.png';

function Home(){
    return(
        <div className='outer'>
        <div className='d-flex h-outer'>
        <div>   
            <img src={dice} alt='COVER PAGE' id="home-pic"/>
        </div>
        <div className='ms-5'>
            <div className='d-flex flex-column h-inner'>
                <h1 style={{fontSize : "96px", fontFamily : "sans-serif", fontWeight : "bolder"}}>DICE GAME</h1>
                <div className="right"><Button desc="Play Now" hoverStyle="bt-b" link="true"/></div>
            </div>
        </div>
        </div>
        </div>
    );


}

export default Home;

import './Food.css'
import devilfruits from './img/devilfruits.webp';
import seafood from './img/seafood.webp';

function Food()
{
    return(
        <div className="main">
            <div className="header">
                <h1 style ={{fontFamily: "Roboto"}}>Places to stay</h1>
                <h3 style ={{fontFamily: "Roboto"}}>Try out some of well known foods in One Piece!</h3>
            </div>
            <img src = {devilfruits} className="devilfruitspic" alt="devilfruits" />
            <h4 style={{fontFamily: "Oxygen"}}>
                The most sought after food in One Piece is not even tasty! Then, what why are people willing to fight and kill for it?
                While the fruit might not be tasty, these fruits, called Devil Fruits, are the easiest way for 
                an individual to get superhuman strength and powers! These can range from being able to control fire to controlling gravity!
                In the picture above, you can see the various type of Devil Fruits available. 
                Try them at your own risk! Once you eat them, you will be unable to swim for the rest of your life and water will become your weakness!
            </h4>
            <img src = {seafood} className="seafoodpic" alt="seafood" />
            <h4 style={{fontFamily: "Oxygen"}}>
                Aside from yucky power fruits, here is food cherish by many pirates in One Piece, including the future king of the Pirate's crew.
                It is called seafood risotto and is composed of various types of seafood. This food is most well known 
                due to Straw Hat Pirate crew's chef Sanji Vinsmoke, who would give it out to people who were starving.
                It a dish eaten by the East Blue, the eastern part of the One Piece world. If you do not seek power and 
                just want a yummy dish, then look no further!
            </h4>
        </div>
    );
}

export default Food;
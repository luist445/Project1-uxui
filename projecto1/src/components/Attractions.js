import './Attractions.css'
import wholecake from './img/cakeisland.png'
import weatheria from './img/Weatheria.webp'
function Attractions()
{
    return(
        <div className="main1">
            <div className="header1">
                <h1 style ={{fontFamily: "Roboto"}}>Attractions</h1>
                <h3 style ={{fontFamily: "Roboto"}}>Where Should I Visit?</h3>
            </div>
            <img src = {wholecake} className="wholecake" alt="wholecake" />
            <h4 style={{fontFamily: "Oxygen"}}>
                Welcome to Whole Cake Island! In this island, everything is made out of food! Floors, buildings, and even certain people living in the island! The island is controlled by Big Mom, one of the four
                great emperors of One Piece. What this means for you is that this area is relatively safe from pirate invasion since Big Mom is feared throughout One Piece. However, it is advised that you stay from Big Mom.
                She is known to have hunger cravings and will not hesitate to eat anything that is front of her. Despite this, you will find many residents of various races living peaceful lives. Despite Big Mom's flaws
                she believes in racial equality and does not judge others based on their appearance. If you are lucky, you might be able to eat the infamous Wedding Cake- a giant cake made with the best ingredients 
                only to be eaten whenever Big Mom's children get married.
            </h4>
            <img src = {weatheria} className="weatheria" alt="weatheria" />
            <h4 style={{fontFamily: "Oxygen"}}>
                Want to enlighten yourself with the science of One Piece? Well, visit Weatheria! Weatheria is a place where science wizards study the weather and climate in the One Piece universe. Unlike our world, the weather in One Piece
                is very unpredictable. It can be snowing one hour and scorching hot in another. This unpredictablity is what they study and observe. This place is most famous for aiding in advancing the Straw Hat's navigator Nami's weapon of choice:
                a baton. With the science of Weatheria, her baton can summon thunderstorms, rain, wind, and cast illusions! Perhaps you will be the one to solve the weather dilemma in One Piece!
            </h4>
        </div>
    );
}

export default Attractions;
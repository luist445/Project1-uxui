import './Lodging.css'
import foosha from './img/foosha.webp';
import Mariejois from './img/Mariejois.webp';
function Lodging()
{
    return(
        <div className="main2">
        <div className="header2">
            <h1 style ={{fontFamily: "Roboto"}}>Places To Stay</h1>
            <h3 style ={{fontFamily: "Roboto"}}>Where Should I Rest?</h3>
        </div>
        <img src = {foosha} className="foosha" alt="foosha" />
        <h4 style={{fontFamily: "Oxygen"}}>
            Want to relax in a cozy, tranquil area? Well, I have the place for you! Welcome to Foosha Village! In this village, people live peaceful without much fear from pirates or other criminals.
            Far from the interest of most pirates, Foosha Village is a perfect place for experiencing One Piece's more rural areas. Foosha Village is the hometown of the captain of the Straw Hats crew: Monkey D. Luffy.
            In Foosha Village, there is not much to do but with the calm seas and the carefree nature of the village, the place provides a perfect getaway from the daily busy city life.
        </h4>
        <img src = {Mariejois} className="mariejois" alt="mariejois" />
        <h4 style={{fontFamily: "Oxygen"}}>
            Want to experience a life of luxury instead? Spend the night at Mariejois! The focal city of the World Government, Mariejois is where all the elite families reside and live in excessive wealth.
            Due to this, the city is heavily protected by elite Marine commanders and soldiers. With the many of rooms available in Mariejois, you will have trouble just picking one spot! However, one must be aware 
            of the families living there. Avoid them at all cost! They are above the law, which can be bad if they are in a bad mood. Mariejois is a perfect place to excessive the wealth the elites have on an everyday 
            basis.
        </h4>
    </div>
    );
}

export default Lodging;
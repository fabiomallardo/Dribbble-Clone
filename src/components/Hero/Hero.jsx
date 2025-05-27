import './SubtitleHero.css';
import Profile from './Profile.jsx';
import Video from './Video.jsx';
import Main from './Main.jsx';
import Carosello from './Carosello.jsx';
import Main2 from './Main2.jsx';
import ImgHero from './ImgHero.jsx';

function Hero()  {
return (
    <div className="subtitle-hero">
        <h2 className="subtitle"><strong>
            🚀 Cognivo - Brain Productivity Dashboard 
       </strong> </h2>
       <Profile />
       <Video />
       <Main />
       <Carosello />
       <Main2 />
       <ImgHero />
    </div>
)
}

export default Hero;
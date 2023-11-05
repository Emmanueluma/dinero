import './home.css'
import Nav from '../nav/Nav'
import {BsPlus} from 'react-icons/bs'
import {BsPlayFill} from 'react-icons/bs'
import {BiMinus} from 'react-icons/bi'
import {BiPause} from 'react-icons/bi'
import { Typewriter } from 'react-simple-typewriter'
import sound from '../../asset/sound.mp3'
import { useRef, useState } from 'react'
import Article from '../article/Article'

const Home = ({ article, setArticle }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isOpened, setIsOpended] = useState(false);

  const togglePlayPause = () => {
    const audioElement = document.getElementById('myAudio');
    if (isPlaying) {
      audioElement.pause();
    } else {
      audioElement.play();
    }
    setIsPlaying(!isPlaying);
  };
  
  return (
    <header id="home" className='maxWidth' >
        <Nav />
        <Article article={article} setArticle={setArticle} />
        <div className="flex--container">
          <div className='text'>
              {/* <p className='p'>DINERO</p> */}
              {/* <h1>a synergy of ardent builders,</h1>
              <h1>alphas and gamers in web3.</h1> */}
              
          </div>
          <section className={isOpened ? `controller` : `controller active`}>
            <audio id="myAudio" loop>
              <source src={sound} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          <div className="contain">
            <div className="minmax" onClick={() => setIsOpended(prev => !prev)}>{isOpened? <BsPlus /> : <BiMinus />}</div>
            <div onClick={togglePlayPause} className={isPlaying ? "player a": "player"}>
              <span className='e'></span>
              <span className='e1'></span>
              <span className='e2'></span>
              <span className='e3'></span>
              <span className='e4'></span>
              <span className='e5'></span>
            </div>
            <div className="name">
              <h4>dinero</h4>
              <p>dinero audio</p>
            </div>
            <div className="playbtn" onClick={togglePlayPause}>
              {isPlaying ? <BiPause className='playStop' /> : <BsPlayFill className='playStop' />}
            </div>
          </div>
          </section>
        </div>
    </header>
  )
}

export default Home

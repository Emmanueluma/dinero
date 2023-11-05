import './about.css'
import {WiDirectionUpRight} from 'react-icons/wi'
import { useRef, useState, useEffect } from 'react';
import {Link} from 'react-router-dom'


const About = ({setArticle}) => {
    const photo1Ref = useRef();
    const [photo1Visible, setPhoto1Visible] = useState(false);

    useEffect(() => {
        const Option = {
            threshold: 0.5
        }
        
        const photo1Observer = new IntersectionObserver((entry, photo1Observer)=> {
            if(entry[0].isIntersecting === true){
                setPhoto1Visible(entry[0].isIntersecting);
                photo1Observer.unobserve(photo1Ref.current)
            }
        }, Option)
        photo1Observer.observe(photo1Ref.current)
    },[])
    const toggleArticle = () => {
    setArticle(prev => !prev)
    }

  return (
    <section className="maxWidth about" id="about">
        <h1 className='header-h1'>about <span>us</span></h1>

        <section>
            <div ref={photo1Ref} className={`flex--items text ${photo1Visible && "inter"}`}>
                <p>
                    We are a Synergy Of Ardent Builders, Alphas And Gamers In Web3.
                    DINERO is on a mission to empower, educate, and connect Web3 explorers. We are dedicated to providing a safe and inclusive space where our members feel valued, supported, and part of a global movement. Through networking opportunities, educational resources, and a commitment to personal and collective growth, we aim to be the trusted home for NFT enthusiasts and Web3 explorers.
                </p>
                <div className='links'>
                <button className="linkbtn" onClick={toggleArticle} > read more <WiDirectionUpRight className="icon" /></button>
                <Link className="linkform" to='/form'>join <WiDirectionUpRight className="icon" /></Link>
                </div>
            </div>
        </section>
    </section>
  )
}

export default About

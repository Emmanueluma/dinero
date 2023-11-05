import { useEffect, useRef, useState } from 'react';
import './partnerships.css'
import {WiDirectionUpRight} from 'react-icons/wi'
import img from '../../asset/homepage.png'

const Partnerships = () => {
  const pRef = useRef();
  const [pVisible, setPVisible] = useState(false);

  useEffect(() => {
    const Option = {
        threshold: 0.7
    }
    
    const pObserver = new IntersectionObserver((entry, pObserver)=> {
        if(entry[0].isIntersecting === true){
            setPVisible(entry[0].isIntersecting);
            pObserver.unobserve(pRef.current)
        }
    }, Option)
    pObserver.observe(pRef.current);

},[])
  return (
    <section className="path" id='partnerships'>
    <h1 className='header-h1'>partnerships</h1>
    
    <section className="imgcontainer">
    <div className="img">
      <img src={img} alt="background" />
    </div>
    <article ref={pRef} className={pVisible && 'active'}>
        <p>
          We support Web3 projects and founders who are bringing something 
          new and unique to the Web3 ecosystem. We have collaborated with over 
          500 projects, and we welcome new top-tier projects and builders to 
          collaborate with us. To contact us about collaborations and partnerships,
          click the button below.
        </p>
        <a href="https://twitter.com/Dineroxyz"  className='btnw' target="_blank" rel="noopener noreferrer">get in touch <WiDirectionUpRight className='logo' /></a>
      </article>
    </section>

      

    </section>
  )
}

export default Partnerships

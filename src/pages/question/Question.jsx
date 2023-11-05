import './question.css'
import QuestionImg from '../../asset/dineroAvatar.png';
import {Link} from 'react-router-dom'
import { useEffect, useRef, useState } from 'react';





const Question = () => {
  
  const qRef = useRef();
  const [qVisible, setQVisible] = useState(false);
  const q1Ref = useRef();
  const [q1Visible, setQ1Visible] = useState(false);

  useEffect(() => {
    const Option = {
        threshold: 0.7
    }
    
    const qObserver = new IntersectionObserver((entry, qObserver)=> {
        if(entry[0].isIntersecting === true){
            setQVisible(entry[0].isIntersecting);
            qObserver.unobserve(qRef.current)
        }
    }, Option)
    qObserver.observe(qRef.current);

    const q1Observer = new IntersectionObserver((entry, q1Observer)=> {
        if(entry[0].isIntersecting === true){
            setQ1Visible(entry[0].isIntersecting);
            q1Observer.unobserve(q1Ref.current)
        }
    }, Option)
    q1Observer.observe(q1Ref.current);

},[])

  return (
    <section id="question" className="maxWidth question">
    <h1 className='header-h1'>join <span>community</span></h1>
        <div className="flex--container">
            <div ref={qRef} className={`flex--items one ${qVisible && "active"}`}>
                <img src={QuestionImg} alt="" />
            </div>
            <div ref={q1Ref}
            className={`flex--items two ${q1Visible && "active"}`}>
              <h3>Fill the form below to join us.</h3>
              <Link to='/form' className='btn'>start</Link>
            </div> 
        </div>
    </section>
  )
}

export default Question

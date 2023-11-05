import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './form.css'
import img from '../../asset/Dinero\ white.JPEG.jpg' 
import {BiLoaderAlt} from 'react-icons/bi'
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'

const Form = ({setSent}) => {

  const form = useRef();
  const [formdata, setformdata] = useState({
    twitter : '',
    discord : '',
    level : '',
    how : '',
    why : '',
    message : ''
  })
  const [loader, setLoader] = useState(false);
 const handleChange = (e) => {
    setformdata(prev => {
        return{
            ...prev,
            [e.target.name]: e.target.value
        }
    })
 } 
 const nav = useNavigate();
  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_ot2o7de', 'template_xkzd8rz', form.current, 'n1_R7vM9hWLeE8Pna')
      .then((result) => {
          console.log(result.text);
          setLoader(prev => !prev);
          setformdata({
            twitter : '',
            discord : '',
            level : '',
            how : '',
            why : '',
            message : ''
          })
      }, (error) => {
          console.log(error.text);
          setLoader(prev => !prev);
          setformdata({
            twitter : '',
            discord : '',
            level : '',
            how : '',
            why : '',
            message : ''
          })
      });
  };

  return (
    <section className="form">
        <Link to='/' className='back'>back</Link>
            <form ref={form} onSubmit={sendEmail}>
                <div className='img'>
                    <img src={img} alt='dinero logo' />
                </div>
            <h3>Fill the form below to join us.</h3>
                <input type="text" onChange={handleChange} value={formdata.twitter} className='st' name='twitter' placeholder='Twitter Handle:' required/>
                <input type="text" onChange={handleChange} className='st' value={formdata.discord} name='discord' placeholder='Discord id:' required/>
                <input type="text" onChange={handleChange} className='st' value={formdata.level} name='level' placeholder='Level of experience in web3:' required/>
                <input type="text" onChange={handleChange} className='st' value={formdata.how} name='how' placeholder='How did you get to know about Dinero:' required/>
                <input type="text" onChange={handleChange} className='st' value={formdata.why} name='why' placeholder='Why do you want be a part of Dinero:' required/>
                <textarea className='st' onChange={handleChange} value={formdata.message} name='message' placeholder="How will you support Dinero's growth?" required/>
            <button onClick={() => setLoader(prev => !prev)}>{loader === false ? 'submit' : <BiLoaderAlt className='loader' />}</button>
        </form>
    </section>
  )
}

export default Form

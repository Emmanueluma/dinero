import React from 'react'
import './dinav.css'
import imgg from '../../../asset/Dinero\ white.JPEG.jpg' 

const Dinav = () => {
    return (
        <section className='section--nav'>
            <div className='image'>
                <img src={imgg} alt="image" />
            </div>
            <div>
                <a href="">CRYPTO BASICS</a>
                <a href="">DEFI</a>
                <a href="">NFT BASICS</a>
                <a href="">ORDINALS</a>
            </div>
        </section>
    )
}

export default Dinav

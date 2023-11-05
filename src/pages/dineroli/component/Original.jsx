import React from 'react'
import video from '../../../asset/backvideo.mp4'

const Original = () => {
  return (
    <div className='chamber'>
      <div className="video">
        <video autoPlay muted loop id="video">
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="content">
      <h1>4.0 ORDINALS</h1>
        <article>    
            <a href="http://" target="_blank" rel="noopener noreferrer">4.1 Bitcoin Whitepaper</a>
            <a href="http://" target="_blank" rel="noopener noreferrer">4.2 Ordinals Ecosytem Overview</a>
            <a href="http://" target="_blank" rel="noopener noreferrer">4.3 Ordinals most used Tools & Marketplaces</a>
            <a href="http://" target="_blank" rel="noopener noreferrer">4.4 What are Ordinals</a>
            <a href="http://" target="_blank" rel="noopener noreferrer">4.5 Getting a taproot wallet</a>
            <a href="http://" target="_blank" rel="noopener noreferrer">4.6 Inscribing your first ordinal</a>
            <a href="http://" target="_blank" rel="noopener noreferrer">4.7 Trading your first ordinal</a>
            <a href="http://" target="_blank" rel="noopener noreferrer">4.8 Satoshis Rarity</a>
            <a href="http://" target="_blank" rel="noopener noreferrer">4.9 BRC-20 Tokens</a>
            <a href="http://" target="_blank" rel="noopener noreferrer">4.10 Recursive Inscriptions</a>
            <a href="http://" target="_blank" rel="noopener noreferrer">4.11 Cursed Inscriptions</a>
            <a href="http://" target="_blank" rel="noopener noreferrer">4.12 Sat Hunting</a>
            <a href="http://" target="_blank" rel="noopener noreferrer">4.13 Using ord wallet receive to receive sats</a>
            <a href="http://" target="_blank" rel="noopener noreferrer">4.14 Creating inscriptions with ord wallet inscribe</a>
            <a href="http://" target="_blank" rel="noopener noreferrer">4.15 Sending inscriptions with ord wallet send</a>
            <a href="http://" target="_blank" rel="noopener noreferrer">4.16 Receiving inscriptions with ord wallet receive</a>
            <a href="http://" target="_blank" rel="noopener noreferrer">4.17 Ordinal Rarity</a>
            <a href="http://" target="_blank" rel="noopener noreferrer">4.18 Special Sats</a>
        </article>
    </div>
    </div>
  )
}

export default Original

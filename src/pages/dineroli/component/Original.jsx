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
            <a href="https://bitcoin.org/bitcoin.pdf" target="_blank" rel="noopener noreferrer">4.1 Bitcoin Whitepaper</a>
            <a href="https://docs.ordinals.com/overview.html" target="_blank" rel="noopener noreferrer">4.2 Ordinals Ecosytem Overview</a>
            <a href="https://x.com/swapski/status/1645485402105561088?s=46" target="_blank" rel="noopener noreferrer">4.3 Ordinals Marketplaces</a>
            <a href="https://docs.ordinals.com/inscriptions.html" target="_blank" rel="noopener noreferrer">4.4 What are Inscriptions</a>
            <a href="https://academy.binance.com/en/articles/what-are-ordinals-an-overview-of-bitcoin-nfts" target="_blank" rel="noopener noreferrer">4.5 What Are Ordinals</a>
            <a href="https://x.com/beb8p/status/1671400063396880386?s=46" target="_blank" rel="noopener noreferrer">4.6 Getting A Taproot Wallet (xVerse)</a>
            <a href="https://x.com/cryptocooldude/status/1657569434331148288?s=46" target="_blank" rel="noopener noreferrer">4.7 Getting A Taproot Wallet (Unisat)</a>
            <a href="https://x.com/cryptocooldude/status/1657569434331148288?s=46" target="_blank" rel="noopener noreferrer">4.8 How to inscribe .Sats name </a>
            <a href="https://x.com/meonbtc/status/1691834855317713375?s=46" target="_blank" rel="noopener noreferrer">4.9 Inscribing Your First Ordinal using ME </a>
            <a href="https://x.com/waleswoosh/status/1660601584538079234?s=46" target="_blank" rel="noopener noreferrer">4.10 Trading Your First Ordinal</a>
            <a href="https://x.com/const_quary/status/1674040726777151488?s=46" target="_blank" rel="noopener noreferrer">4.11 Satoshis Rarity</a>
            <a href="https://x.com/jiurn/status/1640377171800911872?s=46" target="_blank" rel="noopener noreferrer">4.12 BRC-20 Tokens</a>
            <a href="https://x.com/nealinnft/status/1719007709930848503?s=46" target="_blank" rel="noopener noreferrer">4.13 Recursive Inscriptions</a>
            <a href="https://x.com/billyrestey/status/1661406587511271424?s=46" target="_blank" rel="noopener noreferrer">4.14 Cursed Inscriptions</a>
            <a href="https://x.com/itsfranken/status/1671807110244610048?s=46" target="_blank" rel="noopener noreferrer">4.15 UTXOs</a>
            <a href="https://x.com/itsfranken/status/1639202586074152969?s=46" target="_blank" rel="noopener noreferrer">4.16 Sat Hunting</a>
            <a href="https://x.com/buxors/status/1626828300168626178?s=46" target="_blank" rel="noopener noreferrer">4.17 How to find your Ordinal Rarity</a>
            <a href="https://blog.gamma.io/special-sats-and-ordinals#:~:text=Rare%20sats%3A%20The%20first%20sat,residing%20in%20the%20genesis%20block" target="_blank" rel="noopener noreferrer">4.18 Special Sats</a>
        </article>
    </div>
    </div>
  )
}

export default Original

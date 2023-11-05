import React from 'react'
import '../dinero.css'
import video from '../../../asset/backvideo.mp4'

const Crypto = () => {
  return (
    <div className='chamber'>
      <div className="video">
        <video autoPlay muted loop id="video">
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="content">
        <h1>1.0 CRYPTO BASICS</h1>
          <article>
          <a href="https://www.coursera.org/articles/how-does-cryptocurrency-work" target="_blank" rel="noopener noreferrer">1.1 What Is Cryptocurrency?</a>
          <a href="https://www.coindesk.com/learn/what-is-bitcoin/" target="_blank" rel="noopener noreferrer">1.2 What is bitcoin?</a>
          <a href="https://www.investopedia.com/terms/b/blockchain.asp" target="_blank" rel="noopener noreferrer">1.3 What is blockchain?</a>
          <a href="https://www.brex.com/resources/key-crypto-terms" target="_blank" rel="noopener noreferrer">1.4 Crypto terms and meanings</a>
          <a href="https://www.tastylive.com/concepts-strategies/types-of-crypto-wallets" target="_blank" rel="noopener noreferrer">1.5 Crypto wallets and types</a>
          <a href="https://www.nasdaq.com/articles/3-different-types-cryptocurrency-exchanges-cex-dex-and-hybrid-2018-07-12" target="_blank" rel="noopener noreferrer">1.6 Crypto exchanges and types</a>
          <a href="https://www.mitrade.com/insights/crypto/cryptocurrencies-investment/make-money-with-cryptocurrency-best-ways" target="_blank" rel="noopener noreferrer">1.7 Ways to make money from cryptocurrency</a>
          <a href="https://coinmarketcap.com/alexandria/article/coin-vs-token:-what-is-the-difference" target="_blank" rel="noopener noreferrer">1.8 Difference between coins and Tokens</a>
          <a href="https://www.investopedia.com/terms/a/altcoin.asp" target="_blank" rel="noopener noreferrer">1.9 Altcoins</a>
          <a href="https://www.britannica.com/money/top-crypto-exchanges" target="_blank" rel="noopener noreferrer">1.10 Cryptocurrency Exchanges</a>
          <a href="https://academy.binance.com/en/articles/what-s-the-difference-between-a-cex-and-a-dex" target="_blank" rel="noopener noreferrer">1.11 CEX vs DEX</a>
          <a href="https://bitpay.com/blog/crypto-security-tips/" target="_blank" rel="noopener noreferrer">1.12 Security Best Practices</a>
          <a href="https://bitpay.com/blog/what-are-public-and-private-keys/" target="_blank" rel="noopener noreferrer">1.13 Public and Private Keys</a>
          <a href="https://support.bitso.com/hc/en-us/articles/13101555815956-Get-started-What-is-a-crypto-address-and-why-do-I-need-one-" target="_blank" rel="noopener noreferrer">1.14 Transactions and Addresses</a>
          </article>
    </div>
    </div>
  )
}

export default Crypto

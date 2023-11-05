import './dinero.css'
import {Link} from 'react-router-dom'
/* import {IoIosArrowBack} from 'react-icons/io' */
import { Outlet } from 'react-router-dom'
import img1 from '../../../src/asset/d1.jpg'
import img2 from '../../../src/asset/d2.jpg'
import img3 from '../../../src/asset/d3.jpg'
import img4 from '../../../src/asset/d4.jpg'

const Dineroli = () => {
  return (
    <section className="dineroli">
        {/* <Link className='back' to='/'><IoIosArrowBack /> back</Link> */}
        
      <section className="massive--link">
        <Link to='/dineroli/cryptobasic' className='link'>
          <img className="img--fill" src={img1} alt="imageOne" />
        </Link>
        <Link  to='/dineroli/defi' className='link'>
          <img className="img--fill" src={img2} alt="imageTwo" />
        </Link>
        <Link to='/dineroli/nftbasic' className='link'>
          <img className="img--fill" src={img3} alt="imageThree" />
        </Link>
        <Link to='/dineroli/originals' className='link'>
          <img className="img--fill" src={img4} alt="imageFour" />
        </Link>
      </section>
      <Outlet />
        {/* <h1>1.0 CRYPTO BASICS</h1>
        <article>
        <a href="https://g.co/kgs/b62XYh" target="_blank" rel="noopener noreferrer">1.1 What Is Cryptocurrency?</a>
        <a href="https://g.co/kgs/vsABP3" target="_blank" rel="noopener noreferrer">1.2 What is bitcoin?</a>
        <a href="https://en.wikipedia.org/wiki/Blockchain" target="_blank" rel="noopener noreferrer">1.3 What is blockchain?</a>
        <a href="https://www.forbes.com/advisor/investing/cryptocurrency/crypto-glossary/" target="_blank" rel="noopener noreferrer">1.4 Crypto terms and meanings</a>
        <a href="https://www.blockchain-council.org/blockchain/types-of-crypto-wallets-explained/" target="_blank" rel="noopener noreferrer">1.5 Crypto wallets and types</a>
        <a href="https://wundertrading.com/journal/en/learn/article/types-of-cryptocurrency-exchanges" target="_blank" rel="noopener noreferrer">1.6 Crypto exchanges and types</a>
        <a href="https://www.stilt.com/blog/2021/06/how-to-make-money-with-cryptocurrency/" target="_blank" rel="noopener noreferrer">1.7 Ways to make money from cryptocurrency</a>
        <a href="https://www.ledger.com/academy/crypto/what-is-the-difference-between-coins-and-tokens#:~:text=KEY%20TAKEAWAYS%3A,interesting%20properties%20relating%20to%20interoperability." target="_blank" rel="noopener noreferrer">1.8 Difference between coins and Tokens</a>
        <a href="https://www.fool.com/terms/a/altcoin/#:~:text=Altcoins%20(alternative%20coins)%20is%20a,there%20are%20thousands%20of%20them." target="_blank" rel="noopener noreferrer">1.9 Altcoins</a>
        <a href="https://www.forbes.com/advisor/in/investing/cryptocurrency/what-is-a-crypto-exchange/#:~:text=Show%20more-,Meaning%20of%20A%20Cryptocurrency%20Exchange,functions%20similarly%20like%20e%2Dbrokerages." target="_blank" rel="noopener noreferrer">1.10 Cryptocurrency Exchanges</a>
        <a href="https://zebpay.com/blog/centralised-exchanges-vs-decentralised-exchanges#:~:text=CEX%20vs%20DEX-,What%20Is%20The%20Difference%20Between%20A%20Cex%20And%20A%20Dex,rely%20on%20a%20central%20authority." target="_blank" rel="noopener noreferrer">1.11 CEX vs DEX</a>
        <a href="https://www.financemagnates.com/cryptocurrency/education-centre/crypto-wallet-security-and-best-practices/" target="_blank" rel="noopener noreferrer">1.12 Security Best Practices</a>
        <a href="https://www.gemini.com/cryptopedia/public-private-keys-cryptography#:~:text=A%20public%20key%20allows%20you,cryptocurrency%20received%20in%20the%20transaction." target="_blank" rel="noopener noreferrer">1.13 Public and Private Keys</a>
        <a href="https://www.bitcoin.com/get-started/how-bitcoin-transactions-work/" target="_blank" rel="noopener noreferrer">1.14 Transactions and Addresses</a>
        </article>

        <h1>2.0 DEFI</h1>
        <article>
            <a href="http://" target="_blank" rel="noopener noreferrer">2.1 What is DeF</a>
            <a href="http://" target="_blank" rel="noopener noreferrer">2.2 Advantages and disadvantages of DeFi</a>
            <a href="http://" target="_blank" rel="noopener noreferrer">2.3 Creating and funding your first self custody web3 wallet</a>
            <a href="http://" target="_blank" rel="noopener noreferrer">2.4 Transferring funds, bridging, trading and operating on chain</a>
            <a href="http://" target="_blank" rel="noopener noreferrer">2.5 Lending/Borrowing, leverage and stablecoins</a>
            <a href="http://" target="_blank" rel="noopener noreferrer">2.6 What are DEXs?</a> 
            <a href="http://" target="_blank" rel="noopener noreferrer">2.7 Liquidity pools and automated market makers (AMMs)</a>
            <a href="http://" target="_blank" rel="noopener noreferrer">2.8 Yield Farming and Liquidity Provision</a>
            <a href="http://" target="_blank" rel="noopener noreferrer">2.9 Stablecoins and Asset Management</a> 
            <a href="http://" target="_blank" rel="noopener noreferrer">2.10 DeFi yield aggregators</a> 
            <a href="http://" target="_blank" rel="noopener noreferrer">2.11 Security and Risks</a>
            <a href="http://" target="_blank" rel="noopener noreferrer">2.12 Smart contracts</a>
            <a href="http://" target="_blank" rel="noopener noreferrer">2.13 Risks associated with smart contracts</a>
            <a href="http://" target="_blank" rel="noopener noreferrer">2.14 DeFi hacks and vulnerabilities</a> 
            <a href="http://" target="_blank" rel="noopener noreferrer">2.15 DeFi tools</a>
            <a href="http://" target="_blank" rel="noopener noreferrer">2.16 How to use Dexscreener</a>
            <a href="http://" target="_blank" rel="noopener noreferrer">2.17 How to use Pancake Swap</a>
            <a href="http://" target="_blank" rel="noopener noreferrer">2.18 How to use Trust wallet</a>
            <a href="http://" target="_blank" rel="noopener noreferrer">2.19 Risk Management</a>
            <a href="http://" target="_blank" rel="noopener noreferrer">2.20 Understanding tokenomics</a>
            <a href="http://" target="_blank" rel="noopener noreferrer">2.21 Finding alpha and understanding the space</a>
            <a href="http://" target="_blank" rel="noopener noreferrer">2.22 Airdrop hunting</a>
        </article>

        <h1>3.0 NFT BASICS</h1>
        <article>
            <a href="http://" target="_blank" rel="noopener noreferrer">3.1 What Are NFTs?</a>
            <a href="http://" target="_blank" rel="noopener noreferrer">3.2 What is Minting and how do I Mint an NFT?</a>
            <a href="http://" target="_blank" rel="noopener noreferrer">3.3 What is a Whitelist?</a>
            <a href="http://" target="_blank" rel="noopener noreferrer">3.4 What is a Gas Fee?</a>
            <a href="http://" target="_blank" rel="noopener noreferrer">3.5 How do I Avoid Scams?</a>
            <a href="http://" target="_blank" rel="noopener noreferrer">3.6 How to mint an NFT from contract?</a>
            <a href="http://" target="_blank" rel="noopener noreferrer">3.7 How to cancel a transaction using nonce.</a>
            <a href="http://" target="_blank" rel="noopener noreferrer">3.8 Creating NFTs</a>
            <a href="http://" target="_blank" rel="noopener noreferrer">3.9 Buying and Selling NFTs</a>
            <a href="http://" target="_blank" rel="noopener noreferrer">3.10 NFT Marketplaces</a>
            <a href="http://" target="_blank" rel="noopener noreferrer">3.11 What is a Blue Chip NFT</a>
            <a href="http://" target="_blank" rel="noopener noreferrer">3.12 How to use NFT Track</a>
            <a href="http://" target="_blank" rel="noopener noreferrer">3.13 How to check NFT Rarity</a>
            <a href="http://" target="_blank" rel="noopener noreferrer">3.14 Royalties in NFT</a>
        </article>

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
        </article> */}
    </section>
  )
}

export default Dineroli

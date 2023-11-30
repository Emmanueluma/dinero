import { useRef, useState } from "react";
import { BiMenuAltRight } from 'react-icons/bi'
import {IoMdClose} from 'react-icons/io'
import './nav.css'
import logo from '../../asset/Dinero_black-removebg-preview.png'
import {Link} from 'react-router-dom'
import {WiDirectionUpRight} from 'react-icons/wi'


const Nav = () => {
    const [nav, setNav] = useState('#');
    const [displayNav, setDisplayNav] = useState(false);
    const toggleNav = () => {
        setDisplayNav(prev => !prev)
    }
    const path = e => {
        setNav(`${e}`)
        setDisplayNav(prev => !prev)
    }
    return ( 
        <nav>
            <div className="img">
                <img src={logo} alt="logo" />
            </div>
            <ul className="desktop">
                <li><a href="#" className={nav === '#' ? 'active' : ''} onClick={() => setNav('#')}>home</a></li>
                <li><a href="#about" className={nav === '#about' ? 'active' : ''} onClick={() => setNav('#about')}>about</a></li>
                <li><a href="#feature" className={nav === '#feature' ? 'active' : ''} onClick={() => setNav('#feature')}>Features</a></li>
                <li><Link to='dineroli'>Library</Link></li>
                <li><a href="#joinus" className={nav === '#joinus' ? 'active' : ''} onClick={() => setNav('#joinus')}>join</a></li>
                <li><a href="#partnerships" className={nav === '#partnerships' ? 'active' : ''} onClick={() => setNav('#partnerships')}>partnerships</a></li>
            </ul>
            <a href="https://tally.so/r/merNgE" className="linkform" target="_blank" rel="noopener noreferrer">join <WiDirectionUpRight className="icon" /></a>
            <button onClick={toggleNav} className="menu">{ displayNav == false ? <BiMenuAltRight />  : <IoMdClose /> } </button>
            <div className={`phone--container ${displayNav && 'active'}`} >
                <ul className={`phone ${displayNav && 'active'}`}>
                    <li><a href="#" className={nav === '#' ? 'active' : ''} onClick={() => path('#')}>home</a></li>
                    <li><a href="#about" className={nav === '#about' ? 'active' : ''} onClick={() => path('#about')}>about</a></li>
                    <li><a href="#feature" className={nav === '#sfeature' ? 'active' : ''} onClick={() => path('#feature')}>Features</a></li>
                    <li><Link to='dineroli'>Library</Link></li>
                    <li><a href="#joinus" className={nav === '#joinus' ? 'active' : ''} onClick={() => path('#joinus')}>join</a></li>
                    <li><a href="#partnerships" className={nav === '#partnerships' ? 'active' : ''} onClick={() => path('#partnerships')}>partnerships</a></li>
                </ul>
            </div>
        </nav>
    );
}
 
export default Nav;
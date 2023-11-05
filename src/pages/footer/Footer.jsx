import './footer.css'
import {BsFillArrowUpSquareFill} from 'react-icons/bs'
import {MdOutlineEmail} from 'react-icons/md'
import {AiOutlineInstagram} from 'react-icons/ai'
import {FaTwitter} from 'react-icons/fa'
import {TbNeedleThread} from 'react-icons/tb'
import {FaYoutube} from 'react-icons/fa'
import img from '../../asset/Dinero_black-removebg-preview.png'
 

const Footer = () => {
    return ( 
        <footer className='maxWidth'>
            {/* <small>created by <a href="https://webrug.pages.dev"> emmanuel uma</a></small>
            <section className="button">
            <a href="mailto:dinerocommunity@gmail.com" target="_blank" rel="noopener noreferrer"><MdOutlineEmail className='icons' /></a>
            <a href="https://www.instagram.com/direct/t/17848597500009533" target="_blank" rel="noopener noreferrer"><AiOutlineInstagram className='icons' /></a>
            <a href="https://twitter.com/Dineroxyz" target="_blank" rel="noopener noreferrer"><FaTwitter className='icons' /></a>
            <a href="https://www.threads.net/@dineroxyz" target="_blank" rel="noopener noreferrer"><TbNeedleThread className='icons' /></a>
            <a href="https://www.youtube.com/@Dineroxyz" target="_blank" rel="noopener noreferrer"><FaYoutube className='icons' /></a>
            </section>
            <a className='a' href="#home"><BsFillArrowUpSquareFill /></a> */}
            {/* <div className="box img">
                <img src={img} alt="" />
            </div> */}
            <div className="box button">
            <a href="mailto:dinerocommunity@gmail.com" target="_blank" rel="noopener noreferrer"><MdOutlineEmail className='icons' /></a>
            <a href="https://www.instagram.com/direct/t/17848597500009533" target="_blank" rel="noopener noreferrer"><AiOutlineInstagram className='icons' /></a>
            <a href="https://twitter.com/Dineroxyz" target="_blank" rel="noopener noreferrer"><FaTwitter className='icons' /></a>
            <a href="https://www.threads.net/@dineroxyz" target="_blank" rel="noopener noreferrer"><TbNeedleThread className='icons' /></a>
            <a href="https://www.youtube.com/@Dineroxyz" target="_blank" rel="noopener noreferrer"><FaYoutube className='icons' /></a>
            </div>
            <div className="box box-border">
                <p>© 2023 Dinero. All rights reserved.</p>
            </div>
        </footer>
     );
}
 
export default Footer;

import Navbar from 'react-bootstrap/Navbar';
import { AiOutlineGithub } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";

const Footer = () => {
    return (
        <div className='footercon'>
            <Navbar className='footerMain'>
                <Navbar.Brand className='footerLogos' href='https://github.com/Edward-Arth'>
                    <AiOutlineGithub/>
                </Navbar.Brand>
                <Navbar.Brand className='footerLogos' href='https://linkedin.com/in/edward-strahlendorf'>
                    <AiOutlineLinkedin/>
                </Navbar.Brand> 
            </Navbar>
        </div>
    )
}

export default Footer;
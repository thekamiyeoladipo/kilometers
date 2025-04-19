import logo from "../assets/Airtable.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";  
import { FaTwitter } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";


const Nav = () => {
    return (
       <nav className="flex items-center justify-between py-6">
        {/* logo */}
        <div className="flex flex-shrink-0 items-center">
        <a href="" aria-label="Home">
            <img src={logo} className="mx-2" width={100} height={100} alt="brand-logo" />
        </a>
        </div>
        {/*links */}
       <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/kamiyeoladipo/"
        aria-label="linkedin"
        rel="noopener noreferrer"
        target="_blank">
            <FaLinkedin />
        </a>
        <a href="https://github.com/thekamiyeoladipo"
        aria-label="Github"
        rel="noopener noreferrer"
        target="_blank">
            <FaGithub />
        </a>
        <a href="https://x.com/kamiyeoladiipo"
        aria-label="twitter"
        rel="noopener noreferrer"
        target="_blank">
            <BsTwitterX />
        </a>
        <a href="https://www.instagram.com/thekamiyeoladipo/"
        aria-label="instagram"
        rel="noopener noreferrer"
        target="_blank">
            <FaInstagram />
        </a>
       </div>
       </nav>
    );
};
export default Nav;
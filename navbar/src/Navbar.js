import React,{useState, useEffect, useRef} from 'react';
import { FaBars } from 'react-icons/fa';
import { links, social } from './data';
import logo from './logo.svg';

const Navbar = () =>{
    const [showLinks, setShowLinks] = useState(false);
    const linksContainerRef = useRef(null);
    const linksRef = useRef(null);
    const toggleLinks = () => {
        setShowLinks(!showLinks);
    };
    useEffect(() => {
        const linksHeight = linksRef.current.getBoundingClientRect().height;
      
        if (showLinks) {
            linksContainerRef.current.style.height = `${linksHeight}px`;
        } else {
            linksContainerRef.current.style.height = '0px';
        }
    }, [showLinks]);
    return(
        <nav>
            <div className="nav-center">
                <div className="nav-header">
                    <img src={logo} className="logo" alt="logo"/>
                    <button className="nav-toggle" onClick={toggleLinks}><FaBars/></button>    
                </div> 
                <div className="links-container" ref={linksContainerRef}>
                    <ul className="links" ref={linksRef}>
                        {links.map((link) =>{
                           const {id, url, text} = link;
                           return(
                            <li key={id}>
                                <a href={url}>{text}</a>
                            </li>  
                         ) 
                        })}                                            
                    </ul>
                </div>
                <div>
                <ul className="social-icons">
                        {social.map((socialIcons)=>{
                            const {id, url, icon} = socialIcons;
                            return(
                                <li key={id}>
                                    <a href={url}>{icon}</a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>     
        </nav>
        
    )
}

export default Navbar;

//By using useRef mutating the .current property won’t cause a re-render.

//see below without using useRef
// {showLinks && (
//     <div className="links-container show-container" >
//         <ul className="links" r>
//             {links.map((link) =>{
//                 const {id, url, text} = link;
//                 return(
//                 <li key={id}>
//                     <a href={url}>{text}</a>
//                 </li>  
//                 ) 
//             })}                                            
//         </ul>
//     </div>
// )}

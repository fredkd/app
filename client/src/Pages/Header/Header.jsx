import {FaEnvelope, FaFacebook, FaInstagram, FaPhoneAlt, FaSearchLocation} from 'react-icons/fa'
import { RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import './Header.css'
import { Link } from 'react-router-dom'
import img1 from '../indexpics/images/icon-hamburger.svg'
import img2 from '../indexpics/images/icon-close.svg'
import { Component, useState } from 'react'

function Header () {

    const [toogle, setToogle] = useState(false)
    return(
        <>
        <div className="container">
            <div className="upper-head">
                <div className="phone flex">
                    <span>Welcome To Stylish Golden Palace</span>
                    <FaInstagram />
                    <FaFacebook />
                </div>
                <div className="aboutr ">
                    <FaPhoneAlt />
                    <span>+254715939294</span>
                    <FaEnvelope />
                    <span>info@thegoldenpalace.co.ke</span>
                    <FaSearchLocation />
                    <span>Junction of Kago St. and Sosiani St</span>
                </div>
            </div>
            <nav className="nav-wrapper">
                    <div className="navbar-links">
                        <div className="logo">
                            <img src={img1} alt="" />
                        </div>
                        <ul className='navbar'>
                            <li><Link to={'/'} className='active'>Home</Link></li>
                            <li><Link to={'/about'}>About</Link></li>
                            <li><Link to={'/rooms'}>Rooms</Link></li>
                            <li><Link to={'/events'}>Events</Link></li>
                            <li><Link to={'/gallery'}>Gallery</Link></li>
                            <li><Link to={'/contact'}>Contact</Link></li>
                        </ul>
                        <div className="navbar-menu">
                            {toogle ? (
                                <RiCloseLine 
                                color='#000'
                                size={27}
                                onClick={()=> setToogle(false)} />
                            ): (
                                <RiMenu3Line 
                                color='#000'
                                size={27}
                                onClick={() => setToogle(true)} />
                            )}
                            {toogle && (
                                <div className="navbar-menu-container scale-up-center">
                                    <ul className="container-links">
                                        <li><Link to={'/'} className='active'>Home</Link></li>
                                        <li><Link to={'/about'}>About</Link></li>
                                        <li><Link to={'/rooms'}>Rooms</Link></li>
                                        <li><Link to={'/events'}>Events</Link></li>
                                        <li><Link to={'/gallery'}>Gallery</Link></li>
                                        <li><Link to={'/contact'}>Contact</Link></li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
            </nav>

        </div>
        </>
    ) 

}

export default Header
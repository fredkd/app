import { FaBath, FaShieldAlt, FaShower, FaTable, FaTv, FaWifi } from "react-icons/fa"
import Header from "../Header/Header"
import './Room.css'
import img1 from '../Images/DSC_0052.jpg'
import img2 from '../Images/DSC_0085.jpg'
import img3 from '../Images/bed1.jpg'
import { useEffect, useRef } from "react"
import Footer from "../Footer/Footer"
import { Link } from "react-router-dom"
function room () {
    const toTopRef = useRef()
    useEffect(() => {
        window.scroll(0,0)
    }, [])
    return(
        <>
        <span ref={toTopRef}></span>
        <Header />
        <div className="room-wrapper"></div>
        <section className="room">
            <h3>OUR ROOMS</h3>
            <h1>Comfort And Convinience</h1>
            <p>
                Our hotel offers a variety of comfortable and well-appointed rooms to cater to
                the diverse needs of our guests. Each room is designed with a focus on comfort,
                functionality, and style, ensuring a pleasant stay for all. Whether you choose a 
                standard room or a luxurious suite, you can expect a clean and inviting space with 
                carefully selected furnishings and modern amenities. From cozy beds and spacious bathrooms
                to convenient workspaces and thoughtful touches, our rooms provide a welcoming retreat after 
                a day of travel or exploration. Our goal is to create an atmosphere where you can relax,
                recharge, and make yourself at home during your stay with us
                
            </p>
        </section>
        <section className="room1">
            <div className="box4" id="box4">
                    <div className="img-side">
                        <img src={img1} alt="" />
                    </div>
                    <div className="desc-side">
                        <h2>STANDARD ROOM</h2>
                        <p>
                            Our Standard Room offers a cozy and comfortable space for a relaxing stay. 
                            Equipped with a queen-sized bed, a well-appointed bathroom, and essential amenities,
                            it provides all the necessary comforts for a pleasant experience, ideal for budget-conscious 
                            travelers.
                        </p>
                        <div className="even-columns" id='icon' >
                            <FaBath className="icons" />
                            <FaShieldAlt className="icons" />
                            <FaShower className="icons" />
                            <FaTv className="icons" />
                            <FaWifi className="icons" />
                            <FaTable className="icons" />
                        </div>
                        <p>ksh 3,000 per night</p>
                        <Link to={''}><button className="buttonn">Book Now</button></Link>
                        
                    </div>
            </div>
        </section>
        <section className="room1">
            <div className="box4" id="box4">
                    <div className="img-side">
                        <img src={img2} alt="" />
                    </div>
                    <div className="desc-side">
                        <h2>DELUXE ROOM</h2>
                        <p>
                            Our Standard Room offers a cozy and comfortable space for a relaxing stay. 
                            Equipped with a queen-sized bed, a well-appointed bathroom, and essential amenities,
                            it provides all the necessary comforts for a pleasant experience, ideal for budget-conscious 
                            travelers.
                        </p>
                        <div className="even-columns" id='icon' >
                            <FaBath className="icons" />
                            <FaShieldAlt className="icons" />
                            <FaShower className="icons" />
                            <FaTv className="icons" />
                            <FaWifi className="icons" />
                            <FaTable className="icons" />
                        </div>
                        <p>ksh 3,500 per night</p>
                        <Link to={''}><button className="buttonn">Book Now</button></Link>
                    </div>
                </div>
        </section>
        <section className="room1">
            <div className="box4" id="box4">
                    <div className="img-side">
                        <img src={img3} alt="" />
                    </div>
                    <div className="desc-side">
                        <h2>PENTHOUSE</h2>
                        <p>
                            Our Standard Room offers a cozy and comfortable space for a relaxing stay. 
                            Equipped with a queen-sized bed, a well-appointed bathroom, and essential amenities,
                            it provides all the necessary comforts for a pleasant experience, ideal for budget-conscious 
                            travelers.
                        </p>
                        <div className="even-columns" id='icon' >
                            <FaBath className="icons" />
                            <FaShieldAlt className="icons" />
                            <FaShower className="icons" />
                            <FaTv className="icons" />
                            <FaWifi className="icons" />
                            <FaTable className="icons" />
                        </div>
                        <p>ksh 5,000 per night</p> 
                        <Link to={''}><button className="buttonn">Book Now</button></Link>
                    </div>
                </div>
        </section>
        <Footer />
        </>
    )
}

export default room
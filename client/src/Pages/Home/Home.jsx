import './Home.css'
import Header from '../Header/Header'
import img1 from "../Images/DSC_0106.jpg"
import img3 from '../Images/DSC_0052.jpg'
import img4 from '../Images/conference1.jpg'
import img5 from '../Images/conference3.jpg'
import img6 from '../Images/room1.jpg'
import img7 from '../Images/room2.jpg'
import img8 from '../Images/room7.jpg'
import img9 from '../Images/DSC_0106.jpg'
import img10 from '../indexpics/DSC_0253.jpg'
import { Link } from "react-router-dom"
import { useEffect, useRef } from 'react'
import Footer from '../Footer/Footer'


function Home() {

    const toTopRef = useRef()
    useEffect(() => {
        window.scroll(0,0)
    }, [])
    return(
        <div>
            <span ref={toTopRef}></span>
            <div className="container">
                <Header />
                <div className="wrapper"></div>
                <div className="heading" id='heading'>
                    <h1>STYLISH GOLDEN PALACE </h1>
                    <section className="about">
                        <div className="left">
                            <h2>ABOUT US</h2>
                            <p>
                                Golden Palace is set in Eldoret, 17 km from Leseru Station, Golden Palace Hotel offers 
                                accommodation with a restaurant, free private parking, a bar and a shared lounge.
                                The units in the hotel are equipped with a flat-screen TV.
                                Guests at Golden Palace Hotel can enjoy a à la carte breakfast.
                                Eldoret Airport is 21 km from the accommodation, while Leseru is 21 km away. The nearest airport is Eldoret, 21 
                                km from Golden Palace Hotel.
                            </p>
                            <Link to={'/about'}><button className="buttonn">Read More</button></Link>
                        </div>
                        <div className="image" id='image'>
                        </div>
                        <div className="images">
                            <img src={img10} alt="" />
                        </div>
                    </section>
                    <section className="rooms">
                        <div className="upper">
                            <div className="left">
                                <img src={img1} alt="" />
                            </div>
                            <div className="room-desc">
                                <h2>OUR ROOMS</h2>
                                <p>
                                    Our hotel offers a variety of comfortable and well-appointed rooms to suit the needs of every guest. 
                                    Each room is designed with your comfort in mind, providing a relaxing and inviting atmosphere for a restful
                                    stay. Whether you choose a standard room or a luxurious suite, you can expect tasteful decor, cozy beds,
                                    and a range of modern amenities to enhance your experience. Our rooms are meticulously maintained and 
                                    equipped with features such as private bathrooms, complimentary toiletries, flat-screen TVs, 
                                    and high-speed internet access. 
                                </p>
                                
                            </div>
                        </div>
                    </section>
                    <section className="lower">
                        <div className="flex">
                            <div className="box3 box">
                                <div className="room-img">
                                    <img src={img3} alt="" />
                                </div>
                                <img src="" alt="" />
                                <span>STANDARD ROOMS</span>
                                <Link to={"/rooms"}>
                                    <button className="buttonn">See Availabity</button>
                                </Link> 
                            </div>
                            <div className="box2 box">
                                <div className="room-img">
                                    <img src={img3} alt="" />
                                </div>
                                <span>DELUXE ROOMS </span>
                                <Link to={'/rooms'}>
                                    <button className="buttonn">See Availabity</button>
                                </Link>
                            </div>
                            <div className="box1 box">
                                <div className="room-img">
                                    <img src={img3} alt="" />
                                </div>
                                <span>PENTHOUSE</span>
                                <Link to={'/rooms'}>
                                    <button className="buttonn">See Availabity</button>
                                </Link>

                            </div>
                        </div>
                    </section>
                    <section className="events">
                        <h1>CONFERENCE AND EVENTS</h1>
                        <div className="flex">
                            <div className="left"><img src={img4} alt="" /></div>
                            <div className="center">
                                <p>
                                    The conference room is a meticulously designed space that
                                    provides the ideal setting for productive meetings, 
                                    brainstorming sessions, and impactful presentations. With its sophisticated ambiance and thoughtful amenities, it sets the stage for successful
                                    gatherings and collaborative discussions.
                                </p>
                                <Link to={'/events'}><button className="buttonn">Read More</button></Link>
                            </div>
                            <div className="right"><img src={img5} alt="" /></div>
                        </div>
                    </section>
                    <section className="gallery">
                        <div className="photos">
                            <div className="pics">
                                <img src={img6} alt="" />
                            </div>
                            <div className="pics">
                                <img src={img7} alt="" />
                            </div>
                            <div className="pics">
                                <img src={img8} alt="" />
                            </div>
                            <div className="pics">
                                <img src={img9} alt="" />
                            </div>
                            <div className="pics">
                                <img src={img1} alt="" />
                            </div>
                            <div className="pics">
                                <img src={img3} alt="" />
                            </div>
                            <div className="c">
                                <Link to={'/gallery'}>Golden gallery </Link>
                            </div>
                        </div>
                    </section>
                    <Footer />
                </div>
            </div>
             
        </div>
    )
}

export default Home
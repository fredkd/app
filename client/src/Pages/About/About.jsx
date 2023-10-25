import { Link } from "react-router-dom"
import img1 from '../Images/room2.jpg'
import img2 from '../Images/DSC_0106.jpg'
import img3 from '../Images/DSC_0227.jpg'

import './About.css'
import { useEffect, useRef } from "react"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"

function about () {
    const toTopRef = useRef()
    useEffect(() => {
        window.scroll(0,0)
    }, [])
    return(
        <>
        <span ref={toTopRef}></span>
        <Header />
        <section className="about-wrapper">
        </section>
        <div className="details">
            <h2>STYLISH GOLDEN PALACE</h2>
            <p>
             Golden Palace Hotel caters to travelers and other individuals who want to experience the best of Eldoret.
             Our hotel is known for its modern amenities, friendly staff, and comfortable rooms. We pride ourselves in
             providing a high level of service that ensures an unforgettable experience. We offer a variety of room
             options that are suitable for any budget. Our rooms are spacious and cable Tv and free WI-FI. 
             Addtionally, we proveide a complimentary breakfast each morning and have a restaurant on-site for lunch 
             and dinner
            We look forward to welcoming you to The Golden Palace Hotel and providing the best service possible
            </p>
        </div>
        <div className="row1">
            <div className="even-columns">
                <div className="left-img">
                    <img src={img1} alt="" />
                </div>
                <div className="row-center">
                    <img src={img2} alt="" />
                </div>
                <div className="right-img">
                    <img src={img3} alt="" />
                </div>
            </div>
        </div>
        <section className="facilities">
            <h2>FACILITIES IN STYLISH GOLDEN PALACE</h2>
            <div className="even-columns">
                <div className="facility-left">
                    <h4>Accommodation</h4>
                    <i></i>
                    <p>Clean and comfortable rooms with various types (standard, deluxe, suites, etc.)</p>
                    <p>En-suite bathrooms with toiletries</p>
                    <h4>Food & Drink</h4>
                    <i></i>
                    <p>Special Diet Meals</p>
                    <p>breakfast in Room</p>
                    <p>Bar</p>
                    <p>restaurant</p>
                    <h4>Internet</h4>
                    <i></i>
                    <p>Internet access available</p>
                </div>
                <div className="facility-center">
                    <h4>Dining and Refreshments</h4>
                    <i></i>
                    <p>A Restaurant offering breakfast, lunch, and dinner</p>
                    <p>Room service</p>
                    <h4>parking</h4>
                    <i></i>
                    <p>Free parking is Available on site</p>
                    <h4>Front Desk Services</h4>
                    <i></i>
                    <p>Invoice Provided</p>
                    <p>Baggage Storage</p>
                    <p>24-hour front desk</p>
                </div>
          </div>
        </section>
        <Footer />
        </>
    )
}

export default about
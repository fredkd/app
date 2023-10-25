import Header from "../Header/Header"
import './Event.css'
import React, { useEffect, useRef, useState } from "react"
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import img1 from '../Images/conference6.jpg'
import img2 from '../Images/room9.jpg'
import img3 from '../Images/gppics3.jpg'
import img4 from '../Images/conference4.jpg'
import img5 from '../Images/conference5.jpg'
import img6 from '../Images/conference1.jpg'
import img7 from '../Images/conference2.jpg'
import Footer from "../Footer/Footer"

function event () {
    const images = [
        img1,
        img2,     
        img3, 
        img7,     
        img4,     
        img5,     
        img6,     
    ]
    const [data, setData] = useState({img: '',i: 0})
    const viewImage = (img, i) => {
        setData({img, i})
    }

    const imgAction = (action) => {
        let i = data.i;
        if(action === 'next-img'){
            setData({img: images[i + 1], i: i+ 1})
        }
        if(action === 'prev-img'){
            setData({img: images[i - 1], i: i- 1})
        }
        if(!action){
            setData({img:'', i: 0})
        }
    }

    const toTopRef = useRef()
    useEffect(() =>{
        window.scroll(0,0)
    }, [])
    return (
        <>
        <span ref={toTopRef}></span>
        {data.img && 
            <div style={{
               width: '100%',
               height: '100vh',
               background: 'black',
               position: 'fixed',
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center',
               overflow: 'hidden',
            }}>
                <button  onClick={()=> imgAction()} style={{position: 'absolute', top: '0',right: '0'}}>x</button>
                <button onClick={() => imgAction('prev-img') }>prev</button>
                <img src={data.img} style={{width:'auto', maxHeight:'90%', maxWidth: '90%' }} alt="" />
                <button onClick={() => imgAction('next-img') }>next</button>
            </div>
        }
        <Header />
        <div className="event-wrapper"></div>
        <section className="container">
            <h3 id="meeting">MEETING AND EVENTS</h3>
            <p id="p">
                Our conference room is dedicated to host meetings, presentations and other gatherings.
                It provides a comfortable and professional environment for attendeed to collaborate and interact. The 
                conference room is typically equipped with essential amenities such as large tables, chairs and audiovisual
                equipment (Such as a projector and screen), and a whiteboard or flip chart, and notepads for note taking
                The room may also offer amenities such as WI-FI connectivity power outlets and catering services to enhance the 
                overall experience.
                The conference room is convininet for both business travelers and local professionals seeking a professional
                space to conduct meetings or hold events.
            </p>
        </section>
        <div style={{padding: "20px"}}>
            <ResponsiveMasonry 
                columnsCountBreakPoints={{350:1, 750:2, 900:3}}>
                    <Masonry gutter="20px">
                        {images.map((image, i) => (
                            <img 
                                key={i}
                                src={image}
                                style={{width:"100%",display:"block", cursor:"pointer"}}
                                alt=""
                                onClick={() => viewImage(image, i)}
                            />
                        ))}
                    </Masonry>
            </ResponsiveMasonry>
        </div>
        <Footer/>
   
        </>
    )
}

export default event
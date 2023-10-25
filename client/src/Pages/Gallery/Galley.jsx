import './Gallery.css'
import Header from '../Header/Header'
import img1 from '../Images/room1.jpg'
import img2 from '../Images/room8.jpg'
import img3 from '../Images/room7.jpg'
import img4 from '../Images/room3.jpg'
import img6 from '../Images/gppics5.jpg'
import img7 from '../Images/room9.jpg'
import img8 from '../Images/golden palace.jpg'
import img9 from '../Images/DSC_0253.jpg'
import img11 from '../Images/DSC_0106.jpg'
import img12 from '../Images/DSC_0207.jpg'
import img13 from '../Images/DSC_0227.jpg'
import img14 from '../Images/DSC_0328.jpg'
import img15 from '../Images/DSC_0212.jpg'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import { useEffect, useRef, useState } from 'react'
import { RiSkipRightFill, RiSkipLeftFill , } from 'react-icons/ri'
import {BsXCircle} from 'react-icons/bs'
import Footer from '../Footer/Footer'

function gallery() {

    const images = [
        img1,
        img2,
        img3,
        img14,
        img6,
        img13,
        img7,
        img8,
        img9,
        img11,
        img12,
        img4,
        img15,
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
    useEffect(() => {
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
                <BsXCircle onClick={() => imgAction()} 
                    style={{position: 'absolute', top: '4', right: '4'}}
                    color='#fff'
                    size={35}
                    cursor= 'pointer'/>
        
                <RiSkipLeftFill onClick={() => imgAction('prev-img')}
                    color='#fff'
                    cursor= 'pointer'
                    size={35}
                />
                <img src={data.img} style={{width:'auto', maxHeight:'80%', maxWidth: '80%' }} alt="" />
                <RiSkipRightFill onClick={() => imgAction('next-img')}
                    color='#fff'
                    cursor= 'pointer'
                    size={35}
                />
            </div>
        }
        <Header />
        <div className="gallery-wrapper">

        </div>
        <div style={{padding: '20px'}}>
            <ResponsiveMasonry
                columnsCountBreakPoints={{350:1, 750:2 ,900:3}}>
                <Masonry gutter='20px' >
                    {images.map((image, i) => (
                        <img 
                            key={i}
                            src={image}
                            style={{width: '100%',display: 'block', cursor: 'pointer'}}
                            alt=''
                            onClick={() => viewImage(image, i)}
                        />
                    ))}
                </Masonry>
            </ResponsiveMasonry>
        </div>
        <Footer />
        </>
    )
}

export default gallery
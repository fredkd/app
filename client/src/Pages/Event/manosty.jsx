import React, { useState } from "react"
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import img1 from '../Images/conference6.jpg'
import img2 from '../Images/room9.jpg'
import img3 from '../Images/gppics3.jpg'
import img4 from '../Images/conference4.jpg'
import img5 from '../Images/conference5.jpg'
import img6 from '../Images/conference1.jpg'
import img7 from '../Images/conference2.jpg'


function manosry() {

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
    return(
        <>
            {data.img &&
                <div style={{
                    width: '100%',
                    height: '100vh',
                    background: 'black',
                    position: 'absolute',
                    justifyContent: 'center',
                    alignItems: 'center',
                    overflow: 'hidden',
                }}>
                    <img src={data.img} style={{ alignItems:'center',width:'100%', height: '90%', maxWidth:'90%', maxHeight: '90%'}} alt="" />
                </div>

            }
            <div style={{padding: "20px"}}>
                <ResponsiveMasonry
                    columnsCountBreakPoints={{350:1, 750:2, 900:3}}
                    >
                    <Masonry gutter="25px">
                        {images.map((image, i) =>(
                            <img 
                                key={i}
                                src={image}
                                style={{width:"100%", display: "block", cursor: "pointer"}}
                                alt=""
                                onClick={() => viewImage(image, i)}
                            />
                        ))}
                    </Masonry>
                </ResponsiveMasonry>
            </div>
        </>

    )
}


export default manosry
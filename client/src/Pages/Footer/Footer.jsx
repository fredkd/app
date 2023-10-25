import { Link } from 'react-router-dom'
import {FaEnvelope, FaFacebook, FaInstagram, FaPhoneAlt} from 'react-icons/fa'

import './Footer.css'
function Footer () {
    return (
        <> 
        <div className="footer section-padding">

            <hr />
            <div className="fotter-links">
                <div className="footer-copyright">
                    <p>
                        @{new Date().getFullYear()} STYLISH GOLDEN PALACE. All rights reserved.
                    </p>
                </div>
            </div>
                    
        </div>
        </>
    )
}

export default Footer
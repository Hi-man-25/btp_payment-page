import React from "react";
import './footer.css';
import {FaFacebookF , FaInstagram, FaLinkedin, FaTwitter} from 'react-icons/fa';

const Footer=()=>{
    return(
        <div className="footer">
            <div className="sb__footer section__padding">
                <div className="sb__footer-links">
                    <div className="sb__footer-links_div">
                        <p>Terms and Condition</p>
                        <a href="/employer">
                            <p>Privacy Policy</p>
                        </a>
                        <a href="/healthplan">
                            <p>Cookie Policy</p>
                        </a>
                        <a href="/individual">
                            <p>FAQ</p>
                        </a>

                    </div>
                

<div className="sb__footer-links_div">
                    <h4>Company</h4>
                    <a href="/about">
                        <p>About</p>
                    </a>

                    <a href="/press">
                        <p>Reviews</p>
                    </a>

                    <a href="/career">
                        <p>Help Center</p>
                    </a>

                    <a href="/contact">
                        <p>Contact</p>
                    </a>
                  </div>

                  <div className="sb__footer-links_div">
                    <h4>Address</h4>
                    <a href="/employer">
                            <p>James Thomson Building,
                              IIT Roorkee, Roorkee,
                             Uttarakhand 247667</p>
                        </a>
                       
                  </div>

                


                  <div className="sb__footer-links_div" >
                    <h4>Contact:</h4>
                    <p>rozgaarindia@gmail.com
+91-997568489
</p>
                    <div className="socialmedia">
                       

                         <FaFacebookF/> {' '}
                         <FaTwitter/>  {' '}
                         <FaLinkedin/>  {' '}
                         <FaInstagram/>
                        
                        


                    </div>
                  </div>
                    
                </div>
                  
                  <hr></hr>

                  <div className="sb__footer-below">
                      <div className="sb__footer-copyright">
                        <p>
                            @{
                                new Date().getFullYear()
                            }
                            RozGaar. All right reserved.
                        </p>
                      </div>

                     <div className="sb__footer-below-links">

                           <a href="/terms"><div><p>Terms & Conditions</p></div></a>
                           <a href="/privacy"><div><p>Privacy</p></div></a>
                           <a href="/security"><div><p>Security</p></div></a>
                           <a href="/cookie"><div><p>Cookie Declaration</p></div></a>
                         
                        </div> 
                  </div>

            </div>
        </div>

    )
}

export default Footer;
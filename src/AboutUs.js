import React, {Component, useEffect} from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import Typical from 'react-typical'
import Aos from 'aos';
import "aos/dist/aos.css";
import img from './MyImage/pageimg.PNG';
import img1 from './MyImage/p1.PNG';
import img2 from './MyImage/p2.PNG';
import img3 from './MyImage/p3.PNG';
import img4 from './MyImage/p4.PNG';
import img5 from './MyImage/p5.PNG';
import { AiOutlineFacebook } from "react-icons/ai";
import { AiFillMail } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineDribbble } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";

import Carousel from 'react-elastic-carousel';



// class AboutUs extends Component{
    const AboutUs = ()=>{
        useEffect(()=>{
            Aos.init({duration: 2000});
        }, []);
 
   
   
   
    // render(){
        
        return(
            <div className="front-page-background">
                <h2>
                    <Typical
                        steps={[' ', 1000, 'Developed by : Mahedi Kamal', 500]}
                        loop={Infinity}
                        wrapper="p"
                    />
                </h2>
                <Carousel>
                    <div className="img-chard">
                    <img src={img1} alt="question"/>
                    </div>
                    <div className="img-chard">
                    <img src={img2} alt="question"/>
                    </div>
                    <div className="img-chard">
                    <img src={img3} alt="question"/>
                    </div>
                    <div className="img-chard">
                    <img src={img4} alt="question"/>
                    </div>
                    <div className="img-chard">
                    <img src={img5} alt="question"/>
                    </div>
                </Carousel>


                <div className="animation-text">
                    <Typical
                        steps={['W ', 1000, 'We are glad to help you !', 500]}
                        loop={Infinity}
                        wrapper="p"
                    />
                </div>
                <br/><br/><br/>
                <div className="grids">
                    <div data-aos="fade-up" className="about-us-box">
                        <h3>About software:</h3>
                        This software is not affiliated anyway with ETS.This doesn't 
                        belong to any organisation. This is a self-initiated project
                        by Mahedi Kamal(Avash)
                    </div>
                    <br/><br/>
                    <div data-aos="fade-right" className="about-us-box">
                        <h3>About developer:</h3>
                        developer -------------- Mahedi Kamal<br/>
                        profession ---- Student(CSE19 , MIST)<br/>
                        home town ----------------- Jhenaidah
                    </div>
                    <br/><br/>
                    <div data-aos="fade-up" className="about-us-box">
                        <h3>Contact us:</h3>
                        {/* <Link to="https://www.facebook.com/mahedikamal.avash.3/"> */}
                        <a href="https://www.facebook.com/mahedikamal.avash.3">
                            <i className="link-icon"> <AiOutlineFacebook size={50}/> </i>
                        </a>
                        <Link to="/GREPreparationCenter/gREPreparationCenter">
                            <i className="link-icon"> <AiFillMail size={50}/> </i>
                        </Link>
                        <br/>
                        <a href="https://github.com/MahediKamal?fbclid=IwAR3cGRCfJXujlFl_MZG-2WeKncNJkdhHi9l7ZQmG1IoK7rAXpiApECwAkeI">
                            <i className="link-icon"> <AiOutlineGithub size={50}/> </i>
                        </a>
                        
                        <a href="https://mk-avash.blogspot.com/2020/07/lightoj-1307-counting-tringles.html#comments">
                            <i className="link-icon"> <AiOutlineDribbble size={50}/> </i>
                        </a>
                        <br/>
                        <Link to="/GREPreparationCenter/gREPreparationCenter">
                            <i className="link-icon"> <AiFillLinkedin size={50}/> </i>
                        </Link>
                    </div><br/>
                </div>
            </div>
        )
    // }
}
export default AboutUs ;
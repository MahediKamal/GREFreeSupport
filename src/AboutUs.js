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
                        This software is not affiliated anyway with ETS.This doesn't 
                        belong to any organisation. This is a self-initiated project
                        by Mahedi Kamal(Avash)
                    </div>
                    <br/><br/>
                    <div data-aos="fade-right" className="about-us-box">
                        about us bos
                    </div>
                    <br/><br/>
                    <div data-aos="fade-up" className="about-us-box">
                        Contact us:<br/>
                        <Link to="/GREPreparationCenter/gREPreparationCenter">
                            <i> <AiOutlineFacebook size={25}/> </i>
                        </Link><br/>
                        <Link to="/GREPreparationCenter/gREPreparationCenter">
                            <i> <AiFillMail size={25}/> </i>
                        </Link>
                        <br/>
                        <Link to="/GREPreparationCenter/gREPreparationCenter">
                            <i> <AiFillLinkedin size={25}/> </i>
                        </Link>
                        <br/>
                        <Link to="/GREPreparationCenter/gREPreparationCenter">
                            <i> <AiOutlineDribbble size={25}/> </i>
                        </Link>
                        <br/>
                        <Link to="/GREPreparationCenter/gREPreparationCenter">
                            <i> <AiFillLinkedin size={25}/> </i>
                        </Link>
                    </div><br/>
                </div>
            </div>
        )
    // }
}
export default AboutUs ;
import React, {Component, useEffect} from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import Typical from 'react-typical'
import Aos from 'aos';
import "aos/dist/aos.css";
import img from './MyImage/pageimg.PNG';



// class AboutUs extends Component{
    const AboutUs = ()=>{
        useEffect(()=>{
            Aos.init({duration: 2000});
        }, []);
 
   
   
   
    // render(){
        
        return(
            <div className="front-page-background">
                <img src={img} alt="question"/>
                <div className="animation-text">
                    <Typical
                        steps={['W ', 1000, 'We are honoured to help you !', 500]}
                        loop={Infinity}
                        wrapper="p"
                    />
                </div>
                <br/><br/><br/>
                <div className="grids">
                    <div data-aos="fade-up" className="about-us-box">
                        about us bos
                    </div>
                    <br/><br/>
                    <div data-aos="fade-right" className="about-us-box">
                        about us bos
                    </div>
                    <br/><br/>
                    <div data-aos="fade-up" className="about-us-box">
                        about us bos
                    </div><br/>
                </div>
            </div>
        )
    // }
}
export default AboutUs ;
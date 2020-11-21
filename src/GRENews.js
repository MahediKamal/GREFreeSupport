import React, {Component} from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import Typical from 'react-typical'
import Aos from 'aos';
import "aos/dist/aos.css";
 import Carousel from 'react-elastic-carousel';


class GRENews extends Component{
    render(){
        return(
            <div className="news-background">
                <div className="animation-text">
                    <Typical
                        steps={[' ', 1000, 'N E W S  !', 500]}
                        loop={Infinity}
                        wrapper="p"
                    />
                </div>
                <br/><br/>
                <Carousel>
                    <div className="news-chard">
                        The GRE® General Test at home is here to stay and is now a continuing part of the GRE portfolio of products. Test takers now have the option to test at home or at a center. Centers continue to reopen worldwide, including in Mainland China. A new version of the at home webinar presentation is now available.
                    </div>
                    <div className="news-chard">
                        We are hosting a series of webinars about at home testing to facilitate the sharing of information and answer questions from programs and institutions. We hope you and your colleagues can join us; register for the webinar to learn more
                    </div>
                    <div className="news-chard">news</div>
                    <div className="news-chard">news</div>
                    <div className="news-chard">news</div>
                </Carousel>
                    
            </div>
        )
    }
}
export default GRENews ;
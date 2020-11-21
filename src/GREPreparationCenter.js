import React, {Component , useEffect} from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import Typical from 'react-typical'
import Aos from 'aos';
import "aos/dist/aos.css";
 import Carousel from 'react-elastic-carousel';
 import { FaGraduationCap } from "react-icons/fa";
 import { FaUser } from "react-icons/fa";
 import { FaMailBulk } from "react-icons/fa";
 import { AiOutlineCarryOut } from "react-icons/ai";


// class GREPreparationCenter extends Component{
const GREPreparationCenter = ()=>{
        useEffect(()=>{
            Aos.init({duration: 2000});
        }, []);
        return(
            <div className="tutors-background">
                <br/>
                <div className="teacher-profile-container">
                    <div className="icon-point"><i> <FaUser size={20}/> </i></div>
                    <div className="icon-point">Emrul H.</div>
                        <br/><br/>
                    <div className="icon-point"><i> <FaMailBulk size={30}/> </i></div>
                    <div className="icon-point">Emrul@gmail.com</div>
                        <br/><br/>
                    <div className="icon-point"><i> <FaGraduationCap size={30}/> </i></div>
                    <div className="icon-point">Education</div>
                        <br/><br/>
                        <div data-aos="fade-right" className="teacher-profile">B.Sc engineering from KUET, civil ,3.45(out of 4),2011 Msc Scholar at BUET (Ongoing)
                        </div>
                        <br/>
                    <div className="icon-point"><i> <AiOutlineCarryOut size={30}/> </i></div>
                    <div className="icon-point">Experience</div>
                        <br/><br/>
                        <div data-aos="fade-left" className="teacher-profile">7 years experience as a house tutor Math, Biology, Chemistry, Physics, Organic Chemistry, English, GRE, Computer Skills 7 years experience as a house tutor Math, Biology, Chemistry, Physics, Organic Chemistry, English, GRE, Computer Skills
                        </div>
                </div>
                <br/>

                <div className="teacher-profile-container">
                    <div className="icon-point"><i> <FaUser size={20}/> </i></div>
                    <div className="icon-point">Mohammad H.</div>
                        <br/><br/>
                    <div className="icon-point"><i> <FaMailBulk size={30}/> </i></div>
                    <div className="icon-point">Emrul@gmail.com</div>
                        <br/><br/>
                    <div className="icon-point"><i> <FaGraduationCap size={30}/> </i></div>
                    <div className="icon-point">Education</div>
                        <br/><br/>
                        <div data-aos="fade-right" className="teacher-profile">M.Com(1st Class in Finance) from Dhaka University.
                        </div>
                        <br/>
                    <div className="icon-point"><i> <AiOutlineCarryOut size={30}/> </i></div>
                    <div className="icon-point">Experience</div>
                        <br/><br/>
                        <div data-aos="fade-left" className="teacher-profile">Those who need high score in Writing Section of IELTS, GMAT, GRE or any competitive examination, don't hesitate to contact me via email or at cell phone . Furthermore, I will assist to remove your anxiety and restore confidence in Learning English Language and Math. 10th...
                        </div>
                </div>
                <br/>

                <div className="teacher-profile-container">
                    <div className="icon-point"><i> <FaUser size={20}/> </i></div>
                    <div className="icon-point">Emrul H.</div>
                        <br/><br/>
                    <div className="icon-point"><i> <FaMailBulk size={30}/> </i></div>
                    <div className="icon-point">Emrul@gmail.com</div>
                        <br/><br/>
                    <div className="icon-point"><i> <FaGraduationCap size={30}/> </i></div>
                    <div className="icon-point">Education</div>
                        <br/><br/>
                        <div data-aos="fade-right" className="teacher-profile">B.Sc engineering from KUET, civil ,3.45(out of 4),2011 Msc Scholar at BUET (Ongoing)
                        </div>
                        <br/>
                    <div className="icon-point"><i> <AiOutlineCarryOut size={30}/> </i></div>
                    <div className="icon-point">Experience</div>
                        <br/><br/>
                        <div data-aos="fade-left" className="teacher-profile">7 years experience as a house tutor Math, Biology, Chemistry, Physics, Organic Chemistry, English, GRE, Computer Skills 7 years experience as a house tutor Math, Biology, Chemistry, Physics, Organic Chemistry, English, GRE, Computer Skills
                        </div>
                </div>
                <br/>

                <div className="teacher-profile-container">
                    <div className="icon-point"><i> <FaUser size={20}/> </i></div>
                    <div className="icon-point">Emrul H.</div>
                        <br/><br/>
                    <div className="icon-point"><i> <FaMailBulk size={30}/> </i></div>
                    <div className="icon-point">Emrul@gmail.com</div>
                        <br/><br/>
                    <div className="icon-point"><i> <FaGraduationCap size={30}/> </i></div>
                    <div className="icon-point">Education</div>
                        <br/><br/>
                        <div data-aos="fade-right" className="teacher-profile">B.Sc engineering from KUET, civil ,3.45(out of 4),2011 Msc Scholar at BUET (Ongoing)
                        </div>
                        <br/>
                    <div className="icon-point"><i> <AiOutlineCarryOut size={30}/> </i></div>
                    <div className="icon-point">Experience</div>
                        <br/><br/>
                        <div data-aos="fade-left" className="teacher-profile">7 years experience as a house tutor Math, Biology, Chemistry, Physics, Organic Chemistry, English, GRE, Computer Skills 7 years experience as a house tutor Math, Biology, Chemistry, Physics, Organic Chemistry, English, GRE, Computer Skills
                        </div>
                </div>
                <br/>

                <div className="teacher-profile-container">
                    <div className="icon-point"><i> <FaUser size={20}/> </i></div>
                    <div className="icon-point">Emrul H.</div>
                        <br/><br/>
                    <div className="icon-point"><i> <FaMailBulk size={30}/> </i></div>
                    <div className="icon-point">Emrul@gmail.com</div>
                        <br/><br/>
                    <div className="icon-point"><i> <FaGraduationCap size={30}/> </i></div>
                    <div className="icon-point">Education</div>
                        <br/><br/>
                        <div data-aos="fade-right" className="teacher-profile">B.Sc engineering from KUET, civil ,3.45(out of 4),2011 Msc Scholar at BUET (Ongoing)
                        </div>
                        <br/>
                    <div className="icon-point"><i> <AiOutlineCarryOut size={30}/> </i></div>
                    <div className="icon-point">Experience</div>
                        <br/><br/>
                        <div data-aos="fade-left" className="teacher-profile">7 years experience as a house tutor Math, Biology, Chemistry, Physics, Organic Chemistry, English, GRE, Computer Skills 7 years experience as a house tutor Math, Biology, Chemistry, Physics, Organic Chemistry, English, GRE, Computer Skills
                        </div>
                </div>
                <br/>

                <div className="teacher-profile-container">
                    <div className="icon-point"><i> <FaUser size={20}/> </i></div>
                    <div className="icon-point">Emrul H.</div>
                        <br/><br/>
                    <div className="icon-point"><i> <FaMailBulk size={30}/> </i></div>
                    <div className="icon-point">Emrul@gmail.com</div>
                        <br/><br/>
                    <div className="icon-point"><i> <FaGraduationCap size={30}/> </i></div>
                    <div className="icon-point">Education</div>
                        <br/><br/>
                        <div data-aos="fade-right" className="teacher-profile">B.Sc engineering from KUET, civil ,3.45(out of 4),2011 Msc Scholar at BUET (Ongoing)
                        </div>
                        <br/>
                    <div className="icon-point"><i> <AiOutlineCarryOut size={30}/> </i></div>
                    <div className="icon-point">Experience</div>
                        <br/><br/>
                        <div data-aos="fade-left" className="teacher-profile">7 years experience as a house tutor Math, Biology, Chemistry, Physics, Organic Chemistry, English, GRE, Computer Skills 7 years experience as a house tutor Math, Biology, Chemistry, Physics, Organic Chemistry, English, GRE, Computer Skills
                        </div>
                </div>
                <br/>
                
                    
            </div>
        )
    
}
export default GREPreparationCenter ;
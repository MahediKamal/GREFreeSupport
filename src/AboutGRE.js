import React, {Component ,useEffect} from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import Typical from 'react-typical'
import Aos from 'aos';
import "aos/dist/aos.css";


// class AboutGRE extends Component{
const AboutGRE = ()=>{
        useEffect(()=>{
            Aos.init({duration: 2000});
        }, []);
        return(
            <div className="front-page-background grids">
                {/* -------------------section 1---------------------------- */}
                <br/>
                <div className="about-gre-title">Test Content</div>
                <br/>
                <div data-aos="fade-up" className="about-gre-point-header">
                    Analytical Writing
                </div><br/>
                <div className="about-gre-point-description">
                <h3>The Analytical Writing section measures your ability to:</h3>
                a) articulate complex ideas clearly and effectively<br/>
                b) support ideas with relevant reasons and examples<br/>
                c) examine claims and accompanying evidence<br/>
                d) sustain a well-focused, coherent discussion<br/>
                e) control the elements of standard written English<br/>
                The Analytical Writing section requires you to provide focused responses based on the tasks presented, so you can accurately demonstrate your skill in directly responding to a task.
                </div><br/>

                <div data-aos="fade-up" className="about-gre-point-header">
                    Verbal Reasoning
                </div><br/>
                <div data-aos="fade-right" className="about-gre-point-description">
                <h3>The Verbal Reasoning section measures your ability to:</h3>

                a) analyze and draw conclusions from discourse; reason from incomplete data; identify author's assumptions and/or perspective; understand multiple levels of meaning, such as literal, figurative and author's intent
                <br/>b) select important points; distinguish major from minor or irrelevant points; summarize text; understand the structure of a text
                <br/>c) understand the meanings of words, sentences and entire texts; understand relationships among words and among concepts
                </div><br/>

                <div data-aos="fade-up" className="about-gre-point-header">
                    Quantitative Reasoning
                </div><br/>
                <div data-aos="fade-right" className="about-gre-point-description">
                <h3>The Quantitative Reasoning section measures your ability to:</h3>

                a) understand, interpret and analyze quantitative information<br/>
                b) solve problems using mathematical models<br/>
                c) apply basic skills and elementary concepts of arithmetic, algebra, geometry and data analysis<br/>
                The Quantitative Reasoning section includes an on-screen calculator.<br/>
                </div><br/>

                <div data-aos="fade-up" className="about-gre-point-header">
                    Modified Versions of Verbal Reasoning and Quantitative Reasoning Questions
                </div><br/>
                <div data-aos="fade-right" className="about-gre-point-description">
                The test you take may include questions that are modified versions of published questions or of questions you have already seen on the test. Some modifications are substantial; others are less apparent.
                <br/><br/>
                Even if a question appears to be similar to a question you have already seen, it may in fact be different and have a different answer. Pay careful attention to the wording of each question
                </div><br/>


                {/* -------------------section 2---------------------------- */}
                <br/>
                <div className="about-gre-title">Test Structure</div>
                <br/>
                <div data-aos="fade-up" className="about-gre-point-header">
                    Analytical Writing
                </div><br/>
                <div data-aos="fade-right" className="about-gre-point-description">
                a) (One section with two separately timed tasks)<br/>
                b) One "Analyze an Issue" task and one "Analyze an Argument" task<br/>
                c) 30 minutes per task<br/>
                </div><br/>

                <div data-aos="fade-up" className="about-gre-point-header">
                    Verbal Reasoning
                </div><br/>
                <div data-aos="fade-right" className="about-gre-point-description">
                    a) (Two sections)<br/>
                    b) 20 questions per section<br/>
                    c) 30 minutes per section
                </div><br/>

                <div data-aos="fade-up" className="about-gre-point-header">
                    Quantitative Reasoning
                </div><br/>
                <div data-aos="fade-right" className="about-gre-point-description">
                    a) (Two sections)<br/>
                    b) 20 questions per section<br/>
                    c) 35 minutes per section
                </div><br/>

                <div data-aos="fade-up" className="about-gre-point-header">
                    Unscored
                </div><br/>
                <div data-aos="fade-right" className="about-gre-point-description">
                    number of question and time varies
                </div><br/>

                <div data-aos="fade-up" className="about-gre-point-header">
                    Research
                </div><br/>
                <div data-aos="fade-right" className="about-gre-point-description">
                    number of question and time varies
                </div><br/>


                {/* -------------------section 3---------------------------- */}
                <br/>
                <div className="about-gre-title">Fees</div>
                <br/>

                <div data-aos="fade-up" className="about-gre-point-header">
                    GRE® General Test
                </div><br/>
                <div data-aos="fade-right" className="about-gre-point-description">
                    Australia  $230<br/>
                    China	$231.30<br/>
                    India	$213<br/>
                    Nigeria	$226<br/>
                    Turkey	$255<br/>
                    All other areas of the world	$205
                </div><br/>

                <div data-aos="fade-up" className="about-gre-point-header">
                    Special Handling Requests
                </div><br/>
                <div data-aos="fade-right" className="about-gre-point-description">
                Rescheduling fee — China	$53.90<br/>
                Rescheduling fee — All other areas of the world	$50<br/>
                Changing your test center	$50
                </div><br/>


                <div data-aos="fade-up" className="about-gre-point-header">
                    topic
                </div><br/>
                <div data-aos="fade-right" className="about-gre-point-description">
                    description
                </div><br/>

            </div>
        )
    
}
export default AboutGRE ;
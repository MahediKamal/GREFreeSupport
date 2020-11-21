import React, {Component} from 'react';
import './App.css';
import { Link } from 'react-router-dom';



class ExamCenter extends Component{
    render(){
        return(
            <div className="exam-center-page">
                <h1> # GRE test centers in Dhaka : </h1>
                <table className="exam-center-container">
                    <tr>
                        <td className="centers-description-container">
                            <div className="exam-center-description exam-center-simple-button">
                                <h2>Center -1 </h2>
                                <p> Center ID: APCU-8815<br/>
                                    Center type: prometric<br/>
                                    AMERICAN ALUMNI ASSOCIATION (AAA)<br/>
                                    HOUSE 145, ROAD 13B, BLOCK #E, BANANI<br/>
                                    DHAKA<br/>
                                    Bangladesh
                                </p>
                            </div>
                        </td>
                        <td>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3650.7765919597514!2d90.40506491445659!3d23.79096859314342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sAMERICAN%20ALUMNI%20ASSOCIATION%20HOUSE%20145%2C%20ROAD%2013B%2C%20BLOCK%20%23E%2C%20BANANI%20DHAKA%20Bangladesh!5e0!3m2!1sen!2sbd!4v1605279387515!5m2!1sen!2sbd" width="80%" height="200px" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                        </td>
                    </tr>
                    <br/>
                    <tr>
                        <td className="centers-description-container">
                            <div className="exam-center-description exam-center-simple-button">
                                <h2>Center -2 </h2>
                                <p> Center IDs: ITBD18A ITBD18B ITBD18C ITBD18D<br/>
                                    Center type: non-prometric<br/>
                                    US Software Limited<br/>
                                    69/B Panthapath<br/>
                                    Dhaka-1205<br/>
                                    DHAKA<br/>
                                    Bangladesh<br/>
                                </p>
                            </div>
                        </td>
                        <td>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9107805780995!2d90.38579241498134!3d23.75056078458925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8bb51884d03%3A0xa8faf6fd1f993941!2sUS%20Software%20Limited!5e0!3m2!1sen!2sbd!4v1605281051283!5m2!1sen!2sbd" width="80%" height="200px" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                        </td>
                    </tr>

                    <br/>
                    <tr>
                        <td className="centers-description-container">
                            <div className="exam-center-description exam-center-simple-button">
                                <h2>Center -3 </h2>
                                <p> Center ID: STN12077A<br/>
                                    Center type: non-prometric<br/>
                                    American International University-Bangladesh(AIUB)<br/>
                                    Campus 5,Road#21, House # 55/B<br/>
                                    Kemal Ataturk Avenue,Banani, Besite Banani Ma<br/>
                                    Opposite Side of Iqbal Center, AIUB, Campus-5<br/>
                                    DHAKA<br/>
                                    Bangladesh<br/>
                                </p>
                            </div>
                        </td>
                        <td>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9107805780995!2d90.38579241498134!3d23.75056078458925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8bb51884d03%3A0xa8faf6fd1f993941!2sUS%20Software%20Limited!5e0!3m2!1sen!2sbd!4v1605281051283!5m2!1sen!2sbd" width="80%" height="200px" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                        </td>
                    </tr>

                    <br/>
                    <tr>
                        <td className="centers-description-container">
                            <div className="exam-center-description exam-center-simple-button">
                                <h2>Center -4 </h2>
                                <p> Center ID: STN14395A<br/>
                                    Center type: non-prometric<br/>
                                    DNS Software Ltd.<br/>
                                    Paragon House<br/>
                                    5 Mohakhali C/A, 4th Floor<br/>
                                    DHAKA<br/>
                                    Bangladesh<br/>
                                </p>
                            </div>
                        </td>
                        <td>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9107805780995!2d90.38579241498134!3d23.75056078458925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8bb51884d03%3A0xa8faf6fd1f993941!2sUS%20Software%20Limited!5e0!3m2!1sen!2sbd!4v1605281051283!5m2!1sen!2sbd" width="80%" height="200px" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                        </td>
                    </tr>
                    <br/>
                </table>
            </div>
        )
    }
}
export default ExamCenter ;
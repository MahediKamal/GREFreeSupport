import React, {Component, useEffect, useState} from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import firebase from "./firebase";
import {v4 as uuidv4} from 'uuid';
import fmg from './MyImage/pageimg.PNG';
import Typical from 'react-typical'
import Aos from 'aos';
import "aos/dist/aos.css";

// class FrontPage extends Component{
    function FrontPage(){
    // render(){
        const [comments , setComments] = useState([]);
        const [loading ,setloading] = useState(false);
        const [description ,setdescription] = useState('');
        const ref = firebase.firestore().collection("GREWordBook");

        function getcomments(){
            setloading(true);
            ref.onSnapshot((querySnapshot) => {
                const items = [];
                querySnapshot.forEach((doc)=>{
                    items.push(doc.data());
                });
                setComments(items);
                setloading(false);
            });
        }
        useEffect(()=>{
            getcomments();
        }, []);

        function addComment(newcomment){
            ref
            .doc(newcomment.id)
            .set(newcomment)
            .catch((err)=>{
                console.error(err);
            });

        }

         if(loading){
             return <h1>loading....</h1>
         }
        return(
            <div className="front-page-background">
                <div>
                <img src={fmg} alt="question"/>
                </div>
                <br/>
                <h1>
                    <Typical
                        steps={[' ', 1000, 'welcome to our page !', 500]}
                        loop={Infinity}
                        wrapper="p"
                    />
                </h1>
                <br/>
                <p className="para-text">
                    We believe in the life-changing power of learning. For the last 70 years, we’ve been driven by a vision of what’s possible when all people can improve their lives through education. It’s why our uncompromising commitment to equity and fairness is behind everything we do.
                </p>
                <br/><br/>

                <table className="front-page-topic-section grids">
                    <tr>
                        <td>
                            <Link to="/AboutUs/aboutUs">
                                <div className="front-page-topic-button front-page-simple-button">
                                    <h1>About US</h1>
                                </div>
                            </Link>
                        </td>
                        <td>
                            <Link to="/AboutGRE/aboutGRE">
                                <div className="front-page-topic-button front-page-simple-button">
                                <h1>About GRE</h1>
                                </div>
                            </Link>
                        </td>
                        <td>
                            <Link to="/GRENews/gRENews">
                                <div className="front-page-topic-button front-page-simple-button">
                                <h1>GRE NEWS</h1>
                                </div>
                            </Link>
                        </td>
                    </tr>
                </table>
                <br/><br/><br/>
                <Link to="/Home/home">
                    <div className="front-page-topic-horizontal-button front-page-simple-button">
                        <h2>Gre Practice Section</h2>
                        <br/>
                        Click here to practice some great resource for GRE exam . 
                        It is totally free , and you don't need to create any account......
                    </div>
                    </Link>
                <br/>
                <Link to="/ExamCenter/examCenter">
                    <div className="front-page-topic-horizontal-button front-page-simple-button">
                        <h2>GRE exam center in Bangladesh</h2>
                        <br/>
                        Click here to about all available locations in bangladesh .
                        We have attached all informations you need about each center......
                    </div>
                </Link>
                <br/>
                <Link to="/GREPreparationCenter/gREPreparationCenter">
                    <div className="front-page-topic-horizontal-button front-page-simple-button">
                        <h2>Tutor Information(GRE)</h2>
                        <br/>
                        Click here to about all available locations in bangladesh .
                        We have attached all informations you need about each center......
                    </div>
                </Link>
                <br/>

                {/* ----------------comment section---------------------- */}
                <br/> <br/> <br/> 
                {/* <input type='text' onChange={(e) => setComments(e.target.value)}/> */}
                <div className="comment-title">Write yout comment here -</div>
                <div className="write-comment">
                    <textarea onChange={(e)=> setdescription(e.target.value)} className="new-comment"/>
                </div>  
                    <button onClick={()=> addComment({description,id:uuidv4()})} className="submit-button">
                        Submit
                    </button>
                

                {comments.map((comment)=>(
                    <div key={comment.id}>
                        {/* <h2>{comment.title}</h2> */}
                        <div className="comment-box">{comment.description}</div>

                    </div>
                ))}


            </div>
        )
    // }
}
export default FrontPage ;
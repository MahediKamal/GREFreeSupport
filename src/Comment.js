import React, {Component, useEffect, useState} from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import firebase from "./firebase";
import {v4 as uuidv4} from 'uuid';
import fmg from './MyImage/pageimg.PNG';
import Typical from 'react-typical'
import Aos from 'aos';
import "aos/dist/aos.css";
import { AiOutlineMessage } from "react-icons/ai";


function Comment(){
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
                        <div className="comment-box">
                            <i className="mgs-icon"> <AiOutlineMessage size={25}/> </i>
                            {comment.description}
                        </div>

                    </div>
                ))}


            </div>
        )
    // }
}
export default Comment ;
import React, {Component} from 'react';
import './App.css';
import Question2 from './Question2';


class QuestionLoader extends Component{
    render(){
        return(
            <div className="question-page">
                <Question2/>
            </div>
        )
    }
}
export default QuestionLoader;
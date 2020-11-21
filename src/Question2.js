import React, {Component} from 'react';
import './App.css';
import qs from './MyImage/gre1.PNG';

class Question2 extends Component{
    constructor(){
        super();
        this.state = {
            value : "opt0"
        }
    }
    click =e =>{
        this.setState({
            value : e.target.value
        });
    }
    render(){
        const{value}=this.state;
        return(
            <div>
                <div className="question-image-section">
                    <div className="question-image-container"><img src={qs} alt="question"/></div>
                </div>

                <table className="question-description">
                    <tr>
                        <td className="description-part">
                            Quality A<br/>
                            _________<br/>
                            PS
                        </td>
                        <td className="description-part">
                            Quality B<br/>
                            _________<br/>
                            SR
                        </td>
                    </tr>
                </table>
                <div className="mcq-section">
                    <ul>
                        <li>
                            <label>
                                <input type="radio" value="opt1" checked={value === "opt1"} onChange={this.click}/>
                                Quantity A is greater.
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type="radio" value="opt2" checked={value === "opt2"} onChange={this.click}/>
                                Quantity B is greater.
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type="radio" value="opt3" checked={value === "opt3"} onChange={this.click}/>
                                The two quantities are equal.
                            </label>
                        </li>
                        <li>
                        <label>
                                <input type="radio" value="opt4" checked={value === "opt4"} onChange={this.click}/>
                                The relationship cann't be determined from the information.
                            </label>
                        </li>
                    </ul>
                </div>
                <div className="question-bottom-text">
                    <p>Select one answer choice</p>
                </div>
            </div>
        )
    }
}
export default Question2;
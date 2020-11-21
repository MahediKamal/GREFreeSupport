import React, {Component} from 'react';
import './App.css';
import { Link } from 'react-router-dom';

class Home extends Component{
    render(){
        return(
            <div className="home content">
                <div className="content-title">
                    <h3 className="home-title">Experience & practice in real GRE-like environment for free!</h3>
                </div>
                <div className="content-text">
                    <p className="hone-text">You can start from:</p>
                    <table className="home-button-container-table">
                        <tr>
                            <td><div className="home-button simple-button"><Link to="/Awa/awa"><br/>AWA<br/>(Issue Practice)</Link></div></td>
                            <td><div className="home-button simple-button"><Link to="/AwaArgument"><br/>AWA<br/>(Argument Practice)</Link></div></td>
                        </tr>
                        <tr>
                            <td><div className="home-button simple-button"><Link to="/Calculator/calculator"><br/><br/>Calculator</Link></div></td>
                            <td><div className="home-button simple-button"><Link to="/QuestionLoader/questionloader"><br/><br/>QuestionLoader</Link></div></td>
                        </tr>
                        <tr>
                            <td><div className="home-button simple-button"><Link to="/GREWordList/grewordlist"><br/><br/>GREWord</Link></div></td>
                            <td><div className="home-button simple-button"><Link to="/QuestionLoader/questionloader"><br/><br/>About</Link></div></td>
                        </tr>
                    </table>
                </div>
            </div>
        )
    }
}
export default Home;
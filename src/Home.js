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
                            <td><div className="home-button simple-button"><a href="https://mahedikamal.github.io/FreeGRESupport/#/awa?type=issue"><br/>AWA<br/>(Issue Practice)</a></div></td>
                            <td><div className="home-button simple-button"><a href="https://mahedikamal.github.io/FreeGRESupport/#/awa?type=argument"><br/>AWA<br/>(Argument Practice)</a></div></td>
                        </tr>
                        <tr>
                            <td><div className="home-button simple-button"><a href="https://mahedikamal.github.io/FreeGRESupport/#/calculator"><br/><br/>Calculator</a></div></td>
                            <td><div className="home-button simple-button"><Link to="/QuestionLoader/questionloader"><br/><br/>QuestionLoader</Link></div></td>
                        </tr>
                        <tr>
                            <td><div className="home-button simple-button"><Link to="/GREWordList/grewordlist"><br/><br/>GREWord</Link></div></td>
                            <td><div className="home-button simple-button"><Link to="/AboutUs/aboutUs"><br/><br/>About</Link></div></td>
                        </tr>
                    </table>
                </div>
            </div>
        )
    }
}
export default Home;
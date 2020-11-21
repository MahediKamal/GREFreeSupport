import React, {Component} from 'react';
import './App.css';

class Footer extends Component{
    render(){
        return(
            <div className="footer">
                <div className="footer-text">
                    <div className="footer-text-left"><a href="https://github.com/MahediKamal/FreeGRESupport">This software</a> is not affiliated anyway with ETS.</div>
                    <div className="footer-text-right">Developers: <a href="https://github.com/MahediKamal">Mahedi Kamal</a></div>
                </div>
            </div>
        )
    }
}
export default Footer;
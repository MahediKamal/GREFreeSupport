import React, {Component} from 'react';
import './App.css';
import { Link } from 'react-router-dom';

class Header extends Component{
    render(){
        return(
            <div className="header">
                <div className="header-title-and-subtitle">
                    <Link to="/Home">
                        <ul className="header-content">
                            <li className="header-title horizontally-aligned-listitem">GRE</li>
                            <li className="header-subtitle horizontally-aligned-listitem">Free Support</li>
                        </ul>
                    </Link>
                </div>
                <div className="header-menu">

                </div>
            </div>
        )
    }
}
export default Header;
import React, {Component} from 'react';
import './App.css';
import Timer from './Timer';
import { Router, Route, browserHistory, IndexRoute} from 'react-router'
// import {syncHistoryWithStore, routerReducer} from 'react-router-redux'

class SubHeader extends Component{
    constructor(props) {
        super(props);
    }
    render(){
        console.log(this.props);
        console.log(404);
        return(
            <div className="sub-header">
                <div className="sub-header-title">title</div>
                <div className="sub-header-timer"><Timer/></div>
            </div>
        )
    }
}
export default SubHeader;
import React, {Component} from 'react';
import './App.css';
import { BsClock } from "react-icons/bs";
import { BsArrowCounterclockwise } from "react-icons/bs";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlinePauseCircle } from "react-icons/ai";

class Timer extends Component{
    constructor(){
        super();
        this.state = {
            fullTime : 1800,
            time : 1800,
            hour : 0,
            Tmin : 0,
            min : 0,
            sec : 0,
            H1  : 0,
            H2  : 0,
            M1  : 0,
            M2  : 0,
            S1  : 0,
            S2  : 0,
            isShow : 1,
            isPuse : 1,
            one : 0
        }
        this.componentDidMount= this.componentDidMount.bind(this)
        this.showHide = this.showHide.bind(this)
        this.reset = this.reset.bind(this)
        this.playPuse = this.playPuse.bind(this)
    }
    reset(){
        this.setState({
            time : this.state.fullTime
        })
    }
    showHide(){
        this.setState({
                isShow : this.state.isShow * -1,
                
        })
    }
    playPuse(){
        this.setState({
            isPuse : this.state.isPuse * -1,
            one : this.state.one ^ 1
        })
    }

    componentDidMount(){
        setInterval(()=>{
            return this.setState((state,props)=>{
                return{
                    time : this.state.time-this.state.one,
                    Tmin : Math.floor(this.state.time/60),
                    hour : Math.floor(this.state.Tmin/60),
                    H1 : this.state.hour%10,
                    H2 : Math.floor(this.state.hour/10),
                    min : this.state.Tmin%60,
                    M1  : this.state.min%10,
                    M2 : Math.floor(this.state.min/10),
                    sec : this.state.time%60,
                    S1 : this.state.sec%10,
                    S2 : Math.floor(this.state.sec/10)
                }
            });
        },1000);
    }

    render(){
        let timershow;
        let timerHideIcon;
        let timerShowHideText;
        let timeEditIcon;
        let timerResetIcon;
        let timerPlayPuseIcon;
        if(this.state.isPuse===1){
            timerPlayPuseIcon=<i className="timer-play-pause material-icons borderless-button"><AiOutlinePlayCircle/></i>
        }else{
            timerPlayPuseIcon=<i className="timer-play-pause material-icons borderless-button"><AiOutlinePauseCircle/></i>
        }

        if(this.state.isShow===1){
            
            timerResetIcon=<i className="timer-reset material-icons borderless-button-extra"><BsArrowCounterclockwise/></i>
            timeEditIcon=<i className="timer-edit material-icons borderless-button-extra"><BsClock/></i>
            timerHideIcon=<i className="timer-hide-icon material-icons"><AiOutlineMinusCircle/></i>
            timershow=<p>{this.state.H2}{this.state.H1}:{this.state.M2}{this.state.M1}:{this.state.S2}{this.state.S1}</p>
            timerShowHideText=<p>Hide Time</p>
        }else{
            timerPlayPuseIcon=<p></p>
            timeEditIcon=<p></p>
            timershow=<p></p>
            timerHideIcon=<i className="timer-hide-icon material-icons"><AiOutlinePlusCircle/></i>
            timerResetIcon=<p></p>
            timerShowHideText=<p>Show Time</p>
        }

        

        return(
            <div className="timer">
                <ul className="timer-content">
                    <li className="horizontally-aligned-listitem">
                        {timeEditIcon}
                    </li>
                    <li onClick={this.reset} className="horizontally-aligned-listitem">
                        {timerResetIcon}
                    </li>
                    <li onClick={this.playPuse} className="horizontally-aligned-listitem">
                        {timerPlayPuseIcon}
                    </li>
                    <li className="timer-display horizontally-aligned-listitem">
                       {timershow}
                    </li>
                    <li className=" horizontally-aligned-listitem">
                        <ul onClick={this.showHide}  className="timer-hide borderless-button">
                            <li className="horizontally-aligned-listitem">
                                {timerHideIcon}
                            </li>
                            <li className="timer-hide-text horizontally-aligned-listitem">
                                {timerShowHideText}
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>

        )
    }

}
export default Timer;

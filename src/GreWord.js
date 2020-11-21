import React, {Component} from 'react';
import ReactCardFlip from 'react-card-flip';
import './App.css';
import { BsFillSkipForwardFill } from "react-icons/bs";
import { BsFillSkipBackwardFill } from "react-icons/bs";
import { AiTwotoneSound } from "react-icons/ai";



class GreWord extends Component{
    constructor() {
        super();
          this.state = {
              wordNum : 1,
              showword : 1,
          isFlipped: false
        };
        this.nextWord = this.nextWord.bind(this)
        this.prevWord = this.prevWord.bind(this)
        this.changeState = this.changeState.bind(this)
        this.handleClick = this.handleClick.bind(this);
      }
     
      nextWord(){
          this.setState({
              wordNum : this.state.wordNum + 1,
              showword : 1
          })
      }
      prevWord(){
          this.setState({
              wordNum : this.state.wordNum - 1,
              showword : 1
          })
      }
      changeState(){
          this.setState({
              showword : this.state.showword * -1
          })
      }
  
      handleClick(e) {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
        this.changeState();
      }
     
      render() {
          let text;
          if(this.state.showword===1){
              text=this.state.wordNum
          }else{
              text=<p>meaning</p>
          }
  
  
        return (
            <div className="word-chard-page">
                <div className="word-chard-container">
                    <div className="simple-button word-sound-button">
                        <i><AiTwotoneSound/></i>
                    </div>
          <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
                      <div onClick={this.handleClick} className="word-chard-text-area simple-button">
                          <br/><br/>{text}
                      </div>
                      <div onClick={this.handleClick} className="word-chard-text-area simple-button">
                          <br/><br/>{text}
                      </div>
          </ReactCardFlip>
                    <table className="button-area">
                        <tr>
                            <td><div onClick={this.prevWord} className="word-change-button simple-button"><i className="forward-backword-icon"><BsFillSkipBackwardFill/></i></div></td>
                            <td><div onClick={this.nextWord} className="word-change-button simple-button"><i className="forward-backword-icon"><BsFillSkipForwardFill/></i></div></td>
                        </tr>
                    </table>
                </div>
            </div>
        )
      }
}
export default GreWord;
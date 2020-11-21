import React, {Component} from 'react';
import './App.css';

class Awa extends Component{
    render(){
        return(
            <div className="awa content">
                <ul className="awa-content">
                    <li className="awa-left-block horizontally-aligned-listitem">
                        <ul className="awa_left-sub-block">
                            <li className="awa_question-description">
                                <textarea className="awa-question" readOnly></textarea>
                            </li>
                            <li className="awa_question-description">
                                <textarea className="awa-description" readOnly></textarea>
                            </li>
                        </ul>
                    </li>

                    <li className="awa-right-block horizontally-aligned-listitem">
                        <textarea className="awa-writing-place" spellCheck="false" placeholder="Write answer here"></textarea>
                    </li>
                </ul>
            </div>
        )
    }
}
export default Awa;
import React, {Component} from 'react';
import './App.css';

class Calculator extends Component{
    render(){
        return(
            <div className="calculator">
                <div className="calculator-top"><b>Calculator</b>
                    <div className="calculator-cross simple-button">X</div>
                </div>
                <div className="calculator-disply"></div>
                <table className="calculator-button-group">
                    <tr>
                        <td className="calculator-button simple-button">MR</td>
                        <td className="calculator-button simple-button">MC</td>
                        <td className="calculator-button simple-button">M+</td>
                        <td className="calculator-button simple-button">(</td>
                        <td className="calculator-button simple-button">)</td>
                    </tr>
                    <tr>
                        <td className="calculator-button simple-button">7</td>
                        <td className="calculator-button simple-button">8</td>
                        <td className="calculator-button simple-button">9</td>
                        <td className="calculator-button simple-button">/</td>
                        <td className="calculator-button simple-button">C</td>
                    </tr>
                    <tr>
                        <td className="calculator-button simple-button">4</td>
                        <td className="calculator-button simple-button">5</td>
                        <td className="calculator-button simple-button">6</td>
                        <td className="calculator-button simple-button">*</td>
                        <td className="calculator-button simple-button">CE</td>
                    </tr>
                    <tr>
                        <td className="calculator-button simple-button">1</td>
                        <td className="calculator-button simple-button">2</td>
                        <td className="calculator-button simple-button">3</td>
                        <td className="calculator-button simple-button">-</td>
                        <td className="calculator-button simple-button">√</td>
                    </tr>
                    <tr>
                        <td className="calculator-button simple-button">±</td>
                        <td className="calculator-button simple-button">0</td>
                        <td className="calculator-button simple-button">.</td>
                        <td className="calculator-button simple-button">+</td>
                        <td className="calculator-button simple-button">=</td>
                    </tr>
                    
                </table>
                <div className="calculator-transfer-display simple-button"><b>Transfer Disply</b></div>
            </div>
        )
    }
}
export default Calculator;
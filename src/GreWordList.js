import React, {Component} from 'react';
import './App.css';
import { Link } from 'react-router-dom';

class GreWordList extends Component{
    render(){
        return(
            <div className="word-list-page">
                <h3 className="word-list-title">Basic</h3>
                <table className="list-word-container-table">
                    <tr>
                        <td><Link to="/GREWord/greword"><div className="word-group-button simple-button"><br/><br/>20<br/>words</div></Link></td>
                        <td><Link to="/GREWord/greword"><div className="word-group-button simple-button"><br/><br/>30<br/>words</div></Link></td>
                        <td><Link to="/GREWord/greword"><div className="word-group-button simple-button"><br/><br/>40<br/>words</div></Link></td>
                        <td><Link to="/GREWord/greword"><div className="word-group-button simple-button"><br/><br/>50<br/>words</div></Link></td>
                        <td><Link to="/GREWord/greword"><div className="word-group-button simple-button"><br/><br/>60<br/>words</div></Link></td>
                    </tr>
                </table>
                <h3 className="word-list-title">Common</h3>
                <table className="list-word-container-table">
                    <tr>
                        <td><Link to="/GREWord/greword"><div className="word-group-button simple-button"><br/><br/>40<br/>words</div></Link></td>
                        <td><Link to="/GREWord/greword"><div className="word-group-button simple-button"><br/><br/>50<br/>words</div></Link></td>
                        <td><Link to="/GREWord/greword"><div className="word-group-button simple-button"><br/><br/>60<br/>words</div></Link></td>
                        <td><Link to="/GREWord/greword"><div className="word-group-button simple-button"><br/><br/>70<br/>words</div></Link></td>
                        <td><Link to="/GREWord/greword"><div className="word-group-button simple-button"><br/><br/>80<br/>words</div></Link></td>
                    </tr>
                </table>
                <h3 className="word-list-title">Advance</h3>
                <table className="list-word-container-table">
                    <tr>
                        <td><Link to="/GREWord/greword"><div className="word-group-button simple-button"><br/><br/>60<br/>words</div></Link></td>
                        <td><Link to="/GREWord/greword"><div className="word-group-button simple-button"><br/><br/>70<br/>words</div></Link></td>
                        <td><Link to="/GREWord/greword"><div className="word-group-button simple-button"><br/><br/>80<br/>words</div></Link></td>
                        <td><Link to="/GREWord/greword"><div className="word-group-button simple-button"><br/><br/>90<br/>words</div></Link></td>
                        <td><Link to="/GREWord/greword"><div className="word-group-button simple-button"><br/><br/>100<br/>words</div></Link></td>
                    </tr>
                </table>
                
            </div>
        )
    }
}
export default GreWordList;
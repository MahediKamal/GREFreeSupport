import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import Footer from './Footer.js';
import SubHeader from './SubHeader';
import Awa from './Awa';
import Home from './Home';
import Calculator from './Calculator'
import GreWord from './GreWord'
import GreWordList from './GreWordList'
import FrontPage from './FrontPage'
import ExamCenter from './ExamCenter'
import AboutUs from './AboutUs'
import AboutGRE from './AboutGRE'
import GRENews from './GRENews'
import GREPreparationCenter from './GREPreparationCenter'
import QuestionLoader from './QuestionLoader'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="window">
      <Header/>
      <SubHeader/>
      <Switch>
        <Route path="/Awa/:awa" component={Awa}/>
        <Route path="/Calculator/:calculator" component={Calculator}/>
        <Route path="/GreWord/:greword" component={GreWord}/>
        <Route path="/GreWordList/:grewordlist" component={GreWordList}/>
        <Route path="/QuestionLoader/:questionloader" component={QuestionLoader}/>
        <Route path="/Home/:home" component={Home}/>
        <Route path="/ExamCenter/:examCenter" component={ExamCenter}/>
        <Route path="/AboutUs/:aboutUs" component={AboutUs}/>
        <Route path="/AboutGRE/:aboutGRE" component={AboutGRE}/>
        <Route path="/GRENews/:gRENews" component={GRENews}/>
        <Route path="/GREPreparationCenter/:gREPreparationCenter" component={GREPreparationCenter}/>
        <Route path="/" component={FrontPage}/>
       
      </Switch>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;

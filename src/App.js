import React, { Component } from 'react';
import Track from './components/Track';
<<<<<<< HEAD
import TrackInfo from './components/TrackInfo';
import { Button } from 'react-bootstrap';
=======
import { Button} from 'react-bootstrap';
// import TrackInfo from './components/TrackInfo';
>>>>>>> e5fe131f7ed54c2e59a8ca8b66dd8645547bb9d8

import './App.css';
import Main from './components/Main';
import CostCalcuate from './components/CostCalculate';
import MakeRequest from './components/MakeRequest';
import TrackInfo from './components/TrackInfo';
import ReqDone from './components/ReqDone';

class App extends Component {
  constructor(){
    super();
    this.state = {
    activePage: 'app'
    }
  }

  renderTrack(){
    console.log('render track');
    return (
        <div>
            <Track/>  
        </div>
    )
}

  setActivePage(activePage){
    this.setState({
      activePage: activePage
    })
  }

  renderPage() {
    console.log(this.state.activePage);
    if (this.state.activePage === 'app'){
      return (
        <div>
          <Main setActivePage={this.setActivePage.bind(this)}/>
        </div>
      )
    } 
    // else if (this.state.activePage === 'main') {
    //     return (
    //       <div>
    //         {/* <Main/> */}
    //       </div>
    //     )
    // } 
    else if (this.state.activePage === 'costCalculate') {
        return (
          <div>
            <CostCalcuate setActivePage={this.setActivePage.bind(this)}/>
          </div>
        )
    } else if (this.state.activePage === 'makeReq') {
        return (
          <div>
            <MakeRequest setActivePage={this.setActivePage.bind(this)}/>
          </div>
        )
    } else if (this.state.activePage === 'track') {
        return (
          <div>
            <Track setActivePage={this.setActivePage.bind(this)}/>
          </div>
        )
    } else if (this.state.activePage === 'trackInfo') {
      return (
        <div>
          <TrackInfo setActivePage={this.setActivePage.bind(this)}/>
        </div>
      )
    } else if (this.state.activePage === 'ReqDone') {
      return (
        <div>
          <ReqDone setActivePage={this.setActivePage.bind(this)}/>
        </div>
      )
  }
   }
  
   render() {
    return (
      <div className="app">
        <div>
          <header className="header">
            C&D
         
          <Button className="track" bsStyle="primary" onClick={() => this.setActivePage('track')}>Track</Button>
          {/* {this.renderTrack()} */}
          </header>
<<<<<<< HEAD
          <button bsStyle="primary" onClick={() => this.setActivePage('track')}>Track</button>
         
          {/* {this.renderTrack()} */}
=======
>>>>>>> e5fe131f7ed54c2e59a8ca8b66dd8645547bb9d8
        </div>
        <div>
        {/* {this.renderPage()} */}
        {/* <h1>Main</h1>
              <button onClick={()=>this.setActivePage('costCalculate')}>Show</button> */}
              {this.renderPage()}
              {/* {this.renderCostCalcuate()} */}
              {/* <CostCalcuate/> */}
        </div>
      </div>
    );
  }
}

export default App;

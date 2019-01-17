import React, { Component } from 'react';
import Track from './components/Track';

import { Button} from 'react-bootstrap';
import { Player } from 'video-react';

// import TrackInfo from './components/TrackInfo';

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
         <div>  
<div class="btn-group" role="group" aria-label="">
<Button bsStyle="primary" onClick={() => this.setActivePage('track')}>Track</Button>
</div>
<div class="btn-group" role="group" aria-label="">
<Button  bsStyle="primary" onClick={() => this.setActivePage('app')}>Home</Button>
</div>
</div> 
           
          {/* {this.renderTrack()} */}
          </header>
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

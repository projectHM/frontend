import React, { Component } from 'react';
import Track from './components/Track';
import TrackInfo from './components/TrackInfo';
import { Button } from 'react-bootstrap';
import YouTube from "react-youtube";
// import TrackInfo from './components/TrackInfo';
import { Player } from 'video-react';

import './App.css';
import Main from './components/Main';
import CostCalcuate from './components/CostCalculate';
import MakeRequest from './components/MakeRequest';
import ReqDone from './components/ReqDone';


class App extends Component {
  constructor(){
    super();
    this.state = {
    activePage: 'app',
    reqInfo: '',
    // clientInfo: '',
    total: '',
    videos: [],
    loading: true
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

  setReqInfo(reqInfo, total){
    this.setState({
      reqInfo: reqInfo,
      total: total
    })
  }

  // setClientInfo(clientInfo){
  //   this.setState({
  //     clientInfo: clientInfo
  //   })
  // }

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
            <CostCalcuate setActivePage={this.setActivePage.bind(this)} setReqInfo={this.setReqInfo.bind(this)}/>
          </div>
        )
    } else if (this.state.activePage === 'makeReq') {
        return (
          <div>
            <MakeRequest setActivePage={this.setActivePage.bind(this)} reqInfo={this.state.reqInfo} total={this.state.total}/>
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
          <TrackInfo setActivePage={this.setActivePage.bind(this)} clientInfo={this.state.clientInfo}/>
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

   componentDidMount() {
    var that = this;
    var API_key = "AIzaSyAaerLQ4J0s-XFVud9oLZLOwf8zRrPg_R8";
    var channelID = "UCs3o4RhBiP2wcwqkZR2QVLw";
    var maxResults = 10;
    var url ='https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=C-YfsWfZr7M&maxResults=1&key=AIzaSyDC13vOF-HRmV4qmexZAoc1b6_RU2B-I5s';

    fetch(url)
      .then(function(response) {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      })
      .then(function(data) {
        that.setState({ videos: data.items, loading: false });
      })
      .catch(error => {
        console.error(error);
      });
  }
  
   render() {
    const { loading, videos } = this.state;

    if (loading) {
      return null;
    }
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
        {/* {this.renderPage()} */}
        {/* <h1>Main</h1>
              <button onClick={()=>this.setActivePage('costCalculate')}>Show</button> */}
              {this.renderPage()}
         
              {/* {this.renderCostCalcuate()} */}
              {/* <CostCalcuate/> */}
        </div>
 
         <YouTube
           videoId={videos[0].id}
           opts={{
             height: "390",
             width: "640",
             playerVars: {
               autoplay: 1
             }
           }}
           onReady={this._onReady}
         />

      </div>
    );
  }
}

export default App;

import React, {Component} from 'react';
import CostCalcuate from './CostCalculate';
import {Button } from  'react-bootstrap';
import App from '../App.css';
import { Player } from 'video-react';
import YouTube from "react-youtube";


class Main extends Component {
    constructor(){
        super();
        this.state ={
            total: '',
            videos: [],
            loading: true
        }
    }

    componentDidMount(){
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
    renderCostCalcuate(){
        console.log('render');
        return (
            <div>
                <CostCalcuate/>
            </div>
        )
    }

    render(){

        const { loading, videos } = this.state;

        if (loading) {
          return null;
        }

        return (
            <div className="">
              
                {/* <h1>Main</h1> */}
          
          <div className="firstPage">
 
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

              {/* <div 
              style=
              {{ 'height': "390px",
                  'width': "640px",'backgroundColor':'black'}}
                  >

              </div> */}
              <br/>
          </div>

              {/* <Button bsStyle="primary" onClick={()=>this.props.setActivePage('costCalculate')}>Price Comparison</Button> */}

                {/* {this.renderCostCalcuate()} */}
                {/* <CostCalcuate/> */}

            </div>  
        )
    }
}
export default Main;
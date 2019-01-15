import React, { Component } from 'react';

import TrackInfo from './TrackInfo';

class Track extends Component{
    constructor(){
        super();
        this.state = {
         req:[],
         name: '',
         email: '',
         phone: '',
         location: ''
        }
    }

    rendeRenderTrack(){
        console.log('render track page');
        return (
            <div>
                <TrackInfo />
            </div>
        )
        }

    render() {
    return(

     <div className="modal">
     <form >
   
     <label>Email: </label><input type="email" name="email" /><br/>
   
     <button>Supmit</button>
     </form>

     {this.rendeRenderTrack()}
     </div>
 

     
      ) 
    }

}
export default Track;
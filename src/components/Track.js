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

    handelSubmit(event){
        event.preventDefault();
        const url = '';
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setTrackActivePage('track')
            })
            .catch(error => console.log(error))
    }

    setTrackActivePage(activePage) {
        this.setState( {
            activePage: activePage
        })
    }

    render() {
    return(

     <div className="modal">
     <form onSubmit={this.handelSubmit.bind(this)}>
   
     <label>Email: </label><input type="email" name="email" /><br/>
   
     <button>Supmit</button>
     </form>

     {/* {this.rendeRenderTrack()} */}
     </div>
 

     
      ) 
    }

}
export default Track;
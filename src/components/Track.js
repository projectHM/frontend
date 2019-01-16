import React, { Component } from 'react';

import TrackInfo from './TrackInfo';

class Track extends Component{
    constructor(){
        super();
        this.state = {
         req:[],
         clientInfo: '',
         name: '',
         email: '',
         phone: '',
         location: '',
         activePage: ''
        }
       }
    
       rendeRenderTrack(){
        console.log('render track page');
        if (this.state.activePage === 'TrackInfo'){
            return (
                <div>
              <TrackInfo clientInfo={this.state.clientInfo}/>
                </div>
            )
        } else {
            return (
                <div>
                   <form onSubmit={this.handleSubmit.bind(this)}>
                    <label>Email: </label><input type="email" name="email" onChange={this.handleChange.bind(this)}/><br/>
                    <button>Supmit</button>
                    </form>
                </div>
              )
        }
    }

    // handelSubmit(event){
    //     event.preventDefault();
    //     const url = '';
    //     fetch(url)
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data);
    //             this.setState({
    //                 clientInfo: data
    //             })
    //             this.setTrackActivePage('TrackInfo');
    //         })
    //         .catch(error => console.log(error))
    // }

    setTrackActivePage(activePage) {
        this.setState( {
            activePage: activePage
        })
    }

        handleChange(event){
            // console.log({[event.target.email]:event.target.value});
            this.setState({ [event.target.name] : event.target.value })
        }

        handleSubmit(event){
            event.preventDefault();
            console.log('user Email '+ this.state.email)
            const url =`http://localhost:3000/cd/clients?email=${this.state.email}`;
            // const email = this.state.email;
            fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                // this.props.setActivePage('trackInfo');
                this.setState({
                    clientInfo: data
                })
                this.setTrackActivePage('TrackInfo');
            })
            .catch(error => console.error('Error:', error));
        }
            
    render() {
    return(
     <div className="modal">
     {/* <form onSubmit={this.handelSubmit.bind(this)}>
   
     <label>Email: </label><input type="email" name="email" /><br/>
    */}
     {/* <form onSubmit={this.handleSubmit.bind(this)}>
     <label>Email: </label><input type="email" name="email" onChange={this.handleChange.bind(this)}/><br/>
     <button>Supmit</button>
     </form> */}
     {this.rendeRenderTrack()}
     {/* {this.rendeRenderTrack()} */}
     </div>
      ) 
    }
}
export default Track;
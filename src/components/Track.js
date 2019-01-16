import React, { Component } from 'react';
//import { Button } from 'react-bootstrap';

import TrackInfo from './TrackInfo';

class Track extends Component {
    constructor() {
        super();
        this.state = {
<<<<<<< HEAD
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
                <div className="trackEmail">
                    
                   <form onSubmit={this.handleSubmit.bind(this)}>
                
                   <label>Email: </label><input type="email" name="email" onChange={this.handleChange.bind(this)}/><br/>
                   <button> Supmit </button>
                  
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
=======
            req: [],
            clientInfo: '',
            name: '',
            email: '',
            phone: '',
            location: '',
            activePage: ''
        }
    }

    rendeRenderTrack() {
        console.log('render track page');
        if (this.state.activePage === 'TrackInfo') {
            return (
                <div>
                    <TrackInfo clientInfo={this.state.clientInfo} />
                </div>
            )
        } else {
            return (
                <div className="trackEmail">

                    <form onSubmit={this.handleSubmit.bind(this)}>

                        <label>Email: </label><input type="email" name="email" onChange={this.handleChange.bind(this)} /><br />
                        <button> Supmit </button>
                        {this.state.clientInfo === 'invalid' ? <p>invalid user, try again.</p> : ''}

                    </form>
                </div>
            )
>>>>>>> e5fe131f7ed54c2e59a8ca8b66dd8645547bb9d8
        }
    }

<<<<<<< HEAD
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
     <div>
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
=======
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
        this.setState({
            activePage: activePage
        })
    }


    handleChange(event) {
        // console.log({[event.target.email]:event.target.value});
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log('user Email ' + this.state.email)
        const url = `http://localhost:3000/cd/clients?email=${this.state.email}`;
        // const email = this.state.email;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                // this.props.setActivePage('trackInfo');

                if (data.clinets === undefined) {
                    this.setState({
                        clientInfo: 'invalid'
                    })
                } else {
                    this.setState({
                        clientInfo: data
                    })
                    this.setTrackActivePage('TrackInfo');
                }
            })
            .catch(error => console.error('Error:', error));
    }
    render() {
        return (
            <div>
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
>>>>>>> e5fe131f7ed54c2e59a8ca8b66dd8645547bb9d8
}
export default Track;
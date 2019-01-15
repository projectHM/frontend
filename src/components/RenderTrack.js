import React, {Component} from 'react';

class RenderTrack extends Component {

    constructor(){
        super();
        this.state ={
           req:[],
           name: '',
           email: '',
           phone: '',
           location: ''
        }
    } 
  
    render(){
        return(
        
            <div className="details">      
          <div>
            <h2>{props.state.name}</h2>
            <h2>{props.stateemail}</h2>
            <h2>{props.state.phone}</h2>
            <h2>{props.state.location}</h2>
          </div>
          
              <div className="buttons">
                <button onClick={() => {props.toggleModal()}}>Edit</button>
                <button onClick={() => {props.deleteRequest(props.id)}}>Delete</button>
          </div>
          </div>
        )
    }}
export default RenderTrack ;
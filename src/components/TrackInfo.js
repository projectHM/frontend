import React, { Component } from 'react';
import RenderTrack from './RenderTrack';

class TrackInfo extends Component{
  constructor(){
        super();
    state={
        req:[],
        modal:false
    }
    }
    componentDidMount(){
       
        console.log('fetching data');
        fetch('http://localhost:3000/')
        .then( response => response.json())
        .then( data => {
         console.log(data);
         this.setState({
         req: data
          })
          })
          .catch( error => {
            console.log(error)
          })
      }
    
    update(data) {
        const url = `http://localhost:3000/`
        fetch(url, {
          method: 'PUT',
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
    
       const update =this.state.req.map(el => {
        return el.id === data.id ? data : el
          })
          console.log('current state: ', this.state.req);
          console.log('new state: ', update)
    
          this.setState({
          
        })
        .catch(error => {
          console.log(error);
        })
    })}
    deleteRequest(id) {
        const url = `http://localhost:3000/`;
        fetch(url, {
            method: 'DELETE'
          })
          .then(response => response.json())
          .then(data => {
            //const delete 
            this.setState({
             

            })
          })
          .catch(error => {
            console.log(error);
          })
      }
    
      toggleModal(){
        this.setState({
          modal: !this.state.modal
        })
      }
    
    renderTrack(){
        console.log('render track');
        return (
            <div>
                <RenderTrack req={this.state.req} 
                deleteRequest={this.deleteRequest.bind(this)}
                toggleModal={this.toggleModal.bind(this)}
                />
            </div>
        )
    }

}
export default TrackInfo;
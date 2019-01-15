import React, { Component } from 'react';
import RenderTrack from './RenderTrack';

class TrackInfo extends Component{
  constructor(){
        super();
    this.state={
        req:[],
        name: '',
        email: '',
        phone: '',
        location: ''
        
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
          req: data
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
                req: data

            })
          })
          .catch(error => {
            console.log(error);
          })
      }

     handelChange(event){

     }

     renderRequest(allRequest) {
        return allRequest.map((req) => {
          return (
            <RenderTrack key={req.id}
              req={req}
            />
          )
        })
      }
    renderTrack(){
        console.log('render track');
        return (
          <div> 
              <h1>Track Info page</h1>
              <form onSubmit>
                <label>Name: </label><input type="text" name="name" onChange={this.handelChange.bind(this)}/><br/>
                <label>Email: </label><input type="email" name="email" onChange={this.handelChange.bind(this)}/><br/>
                <label>Phone: </label><input type="number" name="phone" onChange={this.handelChange.bind(this)}/><br/>
                <label>Location: </label><input type="text" name="location" onChange={this.handelChange.bind(this)}/><br/>
                <button>Edit</button>
            </form>
            <div>
                <RenderTrack req={this.state.req} 
                deleteRequest={this.deleteRequest.bind(this)}
                update={this.update.bind(this)}
                />
            </div>
            </div>
        )
    }
    render(){
        return (
            <div>
                {this.renderTrack()}
                {this.renderRequest(this.state.req)}
            </div>
        )
    }

}
export default TrackInfo;
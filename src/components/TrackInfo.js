import React, { Component } from 'react';
import RenderTrack from './RenderTrack';

class TrackInfo extends Component{
  constructor(props){
    super(props);
    this.state={
        req:[],
        name: props.clientInfo ? props.clientInfo.clinets.name: '',
        email: props.clientInfo ? props.clientInfo.clinets.email: '',
        phone: props.clientInfo ? props.clientInfo.clinets.phone: '',
        location: props.clientInfo ? props.clientInfo.clinets.location: '',
        id: props.clientInfo ? props.clientInfo.clinets.id: ''
        
    }
    }
    componentDidMount(){
        console.log('fetching data');
        fetch(`http://localhost:3000/cd/requests?client_id=${this.state.id}`)
        .then( response => response.json())
        .then( data => {
          console.log(data);
          this.setState({
          req: data.request
            })
        })
          .catch( error => {
            console.log(error)
          })
      }

    update(id, userData) {
        const url = `http://localhost:3000/cd/clients/${id}`
        fetch(url, {
          method: 'PUT',
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(userData)
        })
        .then(response => response.json())
        .then(data => {
          console.log(data);
      //  const update =this.state.req.map(el => {
      //   return el.id === data.id ? data : el
      // //     })
      //     console.log('current state: ', this.state.req);
      //     console.log('new state: ', update)
    
        //   this.setState({
        //   req: data
        // })
        })
        .catch(error => {
          console.log(error);
        })
    // })
  }


    deleteRequest(id) {
        // const url = `http://localhost:3000/`;
        // fetch(url, {
        //     method: 'DELETE'
        //   })
        //   .then(response => response.json())
        //   .then(data => {
        //     //const delete 
        //     this.setState({
        //         req: data

        //     })
        //   })
        //   .catch(error => {
        //     console.log(error);
        //   })
      }

     handelChange(event){
      this.setState({ [event.target.name] : event.target.value })
     }

     handelSubmit(event){
        event.preventDefault();
      
        const clientInfo = {
          name: this.state.name,
          email: this.state.email,
          phone: this.state.phone,
          location: this.state.location
        }
        this.update(this.state.id, clientInfo);
     }

     renderRequest(allRequest) {
       console.log(allRequest);
        return allRequest.map((req) => {
          return (
            <RenderTrack 
              key={req.id}
              req={req}
            />
          )
        })
      }

    renderTrack(){
        console.log('render track');
        // console.log(this.props.);
        return (
          <div> 
              <h1>Track Info page</h1>
              <form onSubmit={this.handelSubmit.bind(this)}>
                <label>Name: </label><input type="text" name="name" onChange={this.handelChange.bind(this)} value={this.state.name}/><br/>
                <label>Email: </label><input type="email" name="email" onChange={this.handelChange.bind(this)} value={this.state.email}/><br/>
                <label>Phone: </label><input type="number" name="phone" onChange={this.handelChange.bind(this)} value={this.state.phone}/><br/>
                <label>Location: </label><input type="text" name="location" onChange={this.handelChange.bind(this)} value={this.state.location}/><br/>
                <button>Edit</button>
            </form>
            <div>
              {/* {this.renderRequest(this.state.req)} */}
                {/* <RenderTrack req={this.state.req} 
                deleteRequest={this.deleteRequest.bind(this)}
                update={this.update.bind(this)}
                /> */}
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
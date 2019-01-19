import React, { Component } from 'react';
import RenderTrack from './RenderTrack';

class TrackInfo extends Component{
  constructor(props){
    super(props);
    this.state = {
        req:[],
        name: props.clientInfo.clinets ? props.clientInfo.clinets[0].name: '',
        email: props.clientInfo.clinets ? props.clientInfo.clinets[0].email: '',
        phone: props.clientInfo.clinets ? props.clientInfo.clinets[0].phone: '',
        location: props.clientInfo.clinets ? props.clientInfo.clinets[0].location: '',
        id: props.clientInfo.clinets ? props.clientInfo.clinets[0].id: ''   
    }
    }

    componentDidMount(){
        console.log('fetching data');
        console.log(this.state.email);
        fetch(`http://localhost:3000/cd/requests?client_email=${this.state.email}`)
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

          // const updateShows =this.state.req.map(el => {
          //   return el.id === data.id ? data : el
          // })
          // this.setState({
          //   shows: updateShows,
          //   activeShow: show,
          //   modal: false
          // })

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


    // deleteRequest(id) {
    //     const url = `http://localhost:3000/`;
    //     fetch(url, {
    //         method: 'DELETE'
    //       })
    //       .then(response => response.json())
    //       .then(data => {
    //         //const delete 
    //         this.setState({
    //             req: data
    //         })
    //       })
    //       .catch(error => {
    //         console.log(error);
    //       })
    // } 
     
     renderRequest() {
        // return this.state.req.map((req,index) => {
        //   return (
        //     <RenderTrack 
        //       key={index}
        //       req={req}
        //       setCurrentReq={this.setCurrentReq.bind(this)}

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

     setAllreq(allReq){
        this.setState({
          req: allReq
        })
     }

     renderRequest(allRequest) {
       console.log(allRequest);
        return allRequest.map((req) => {
          return (
            <RenderTrack 
              key={req.id}
              req={req}
              allReq={this.setAllreq.bind(this)}
              allReqArr={this.state.req}
            />
          )
        })
      }

    renderTrack(){
        console.log('render track');
        // console.log(this.props.);
        return (
          <div className="trackEmail"> 
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
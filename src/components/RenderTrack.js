import React, {Component} from 'react';


class RenderTrack extends Component {

    constructor(props){
        super(props);
        this.state = {
           req:[],
           name: '',
           email: '',
           phone: '',
           location: '',
           id: props.req.id,
           prodects: ''
        }
    } 

    componentDidMount(){
        const url = `http://localhost:3000/cd/reqProduct?request_id=${this.state.id}`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
            .catch(error => console.log(error));
    }

    handelChange(event){
        const currentInput = event.target.name;
        const newValue = event.target.value;
        this.setState({
            [currentInput]: newValue
        }, () => {
            console.log(this.state);
        })
    }

    handleSubmit(data) {
        data.preventDefault();
        const request = this.state.req;
        const client = {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            location: this.state.location
        }
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
    })
    }


    deleteFunction(id){
        const url = `http://localhost:3000/cd/requests/${id}`;
        fetch(url, {
            method: 'DELETE'
          })
          .then(response => response.json())
          .then(data => {
              console.log(data);
            //const delete 
            // this.setState({
            //     req: data

            // })
          })
          .catch(error => {
            console.log(error);
          })
    }

    render(){
        return(
    
            <div className="modal">
            <h1>Render Track page</h1>
            {/* <form onSubmit={this.handleSubmit.bind(this)}>
                <label>Name: </label><input type="text" name="name" onChange={this.handelChange.bind(this)}/><br/>
                <label>Email: </label><input type="email" name="email" onChange={this.handelChange.bind(this)}/><br/>
                <label>Phone: </label><input type="number" name="phone" onChange={this.handelChange.bind(this)}/><br/>
                <label>Location: </label><input type="text" name="location" onChange={this.handelChange.bind(this)}/><br/>
                <button>Edit</button>
            </form>
         */}
        
         <p>{this.props.req.date}</p>
         <p>{this.props.req.location}</p>
         <p>{this.props.req.total}</p>
             <div>
             <button onClick={()=>this.deleteFunction(this.props.req.id)}>Delete</button>
             </div>

             {/* <TrackInfo/> */}
             </div>
        )}}
export default RenderTrack;
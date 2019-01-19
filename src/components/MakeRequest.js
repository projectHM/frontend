import React, {Component} from 'react';
import Map from './Map'
import { cpus } from 'os';

class MakeRequest extends Component {
    constructor(props){
        super(props);
        this.state ={
            name: '',
            email: '',
            phone: '',
            location: '',
            req: props.reqInfo,
            total: props.total,
            reqId: '',
            clientID: '',
            date: '',
            clientEmail: ''
        }
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

    handelSubmit(event){
        event.preventDefault();
        const client = {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            location: this.state.location
        }
        const url = 'http://localhost:3000/cd/clients';
        fetch(url, {
            method: 'POST',
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify(client)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({
                    clientID: data.clinets.id,
                    clientEmail: data.clinets.email
                }, () => {
                    // console.log('clientEmail ', this.state.clientEmail)
                })
                this.createReq();
            })
            .catch(error => console.log(error));
    }

    createReq(){
        // const request = this.state.req;
        const requestInfo = {
            client_id: this.state.clientID,
            client_email: this.state.clientEmail,
            total: this.state.total,
            location: '',
            date: this.state.date
        }
        // const url = 'http://localhost:3000/cd/requests';
        fetch('http://localhost:3000/cd/requests', {
            method: 'POST',
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify(requestInfo)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data.request.id);
                this.setState({
                    reqId: data.request.id
                }, () => {
                    this.setJoinTable();
                })
            })
            .catch(error => console.log(error));
    }

    setJoinTable(){
        const reqProduct = {
            request_id: this.state.reqId,
            processType: this.state.req.cpu.id,
            processTypePrice: this.state.req.cpu.cost,
            Ram: this.state.req.ram.id,
            RamPrice: this.state.req.ram.cost,
            space: this.state.req.disk.id,
            spacePrice: this.state.req.disk.cost,
            router: this.state.req.router.id,
            routerPrice: this.state.req.router.cost,
            switch: this.state.req.switch.id,
            switchPrice: this.state.req.switch.cost
        };

        fetch('http://localhost:3000/cd/reqProduct', {
            method: 'POST',
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify(reqProduct)
        })
            .then(response => response.json())
            .then(data => {
                this.props.setActivePage('ReqDone');
            })
            .catch(error => console.log(error));
    }


    render(){
        {console.log(this.state.req)}
        return(
            <div>
                <h1>Make request</h1>
                <form onSubmit={this.handelSubmit.bind(this)}>
                    <label>Name: </label><input type="text" name="name" onChange={this.handelChange.bind(this)}/><br/>
                    <label>Email: </label><input type="email" name="email" onChange={this.handelChange.bind(this)}/><br/>
                    <label>Phone: </label><input type="number" name="phone" onChange={this.handelChange.bind(this)}/><br/>
                    {/* <label>Location: </label><input type="text" name="location" onChange={this.handelChange.bind(this)}/><br/> */}
                    <label>Date: </label><input type="date" name="date" min="2019-01-17" max="2020-01-01" onChange={this.handelChange.bind(this)}/>
                    {/* <Map
                    id="myMap"
                    options={{
                    center: { lat: 41.0082, lng: 28.9784 },
                    zoom: 8
                    }}
                    onMapLoad={map => {
                    var marker = new window.google.maps.Marker({
                        position: { lat: 41.0082, lng: 28.9784 },
                        map: map,
                        title: 'Hello Istanbul!'
                    });
                    }}
                    /> */}
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}
export default MakeRequest;
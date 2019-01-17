import React, {Component} from 'react';
import Map from './Map'

class MakeRequest extends Component {
    constructor(props){
        super(props);
        this.state ={
            name: '',
            email: '',
            phone: '',
            location: '',
            req: props.reqInfo
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
        this.props.setActivePage('ReqDone');
        event.preventDefault();
        const request = this.state.req;
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
                this.createReq();
                // this.props.setActivePage('track');
            })
            .catch(error => console.log(error));
    }

    createReq(){
        const request = this.state.req;

        // const url = 'http://localhost:3000/cd/requests';
        fetch('http://localhost:3000/cd/requests', {
            method: 'POST',
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify(request)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);

            })
            .catch(error => console.log(error));

            const v = '';

            fetch('http://localhost:3000/cd/reqProduct', {
                method: 'POST',
                headers: {
                "Content-Type": "application/json"
                },
                body: JSON.stringify(v)
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    // this.props.setActivePage('ReqDone');
                })
                .catch(error => console.log(error));
    }


    render(){
        return(
            <div className="modal">
                <h1>Make request</h1>
                <form onSubmit={this.handelSubmit.bind(this)}>
                    <label>Name: </label><input type="text" name="name" onChange={this.handelChange.bind(this)}/><br/>
                    <label>Email: </label><input type="email" name="email" onChange={this.handelChange.bind(this)}/><br/>
                    <label>Phone: </label><input type="number" name="phone" onChange={this.handelChange.bind(this)}/><br/>
                    <label>Location: </label><input type="text" name="location" onChange={this.handelChange.bind(this)}/><br/>
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
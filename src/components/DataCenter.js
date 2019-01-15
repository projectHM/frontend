import React, {Component} from 'react';

class DataCenter extends Component {
    constructor(){
        super();
        this.state ={
            cpu: '',
            ram: '',
            disk: '',
            router: '',
            switch: ''
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
        // event
        event.preventDefault();
        this.props.setReq(this.state);
    }

    renderCost(){
        return (
            <div>
                <p>{this.state.cpu}</p>
                <p>{this.state.ram}</p>
                <p>{this.state.disk}</p>
                <p>{this.state.router}</p>
                <p>{this.state.switch}</p>
            </div>
        )
    }

    render(){
        return(
            <div>
                <h1>Data Center</h1>
                <div>
                    <form>
                        <label>CPU</label><input type="text" name="cpu" onChange={this.handelChange.bind(this)}/><br/>
                        <label>RAM</label><input type="text" name="ram" onChange={this.handelChange.bind(this)}/><br/>
                        <label>Disk</label><input type="text" name="disk" onChange={this.handelChange.bind(this)}/><br/>
                        <label>Router</label><input type="number" name="router" onChange={this.handelChange.bind(this)}/><br/>
                        <label>Switch</label><input type="number" name="switch" onChange={this.handelChange.bind(this)}/><br/>
                        <button onClick={()=>this.props.setActivePage('makeReq')}>Make Request</button>
                    </form>
                    <div>
                        {this.renderCost()}
                    </div>
                </div>
            </div>
        )
    }
}
export default DataCenter;
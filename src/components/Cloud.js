import React, {Component} from 'react';

class Cloud extends Component {
    constructor(){
        super();
        this.state ={
            day: '',
            month: '',
            years: ''
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

    rnederCost(){
        return (
            <div>
                <p>{this.state.day}</p>
                <p>{this.state.month}</p>
                <p>{this.state.years}</p>
            </div>
        )
    }

    render(){
        return(
            <div>
                <h1>Cloud</h1>
                <form>
                    <label>Day: </label><input type="number" name="day" onChange={this.handelChange.bind(this)}/><br/>
                    <label>Month: </label><input type="number" name="month" onChange={this.handelChange.bind(this)}/><br/>
                    <label>Years: </label><input type="number" name="years" onChange={this.handelChange.bind(this)}/><br/>
                </form>
                {this.rnederCost()}
            </div>
        )
    }
}
export default Cloud;
import React, {Component} from 'react';

class Cloud extends Component {
    constructor(){
        super();
        this.state ={
            gb: 0,
            month: 0,
            price: 0,
            output: 0
        }
    }

    componentDidMount(){
        const url = "http://localhost:3000/cd/category";
        fetch(url)
            .then( response => response.json())
            .then(data => {
                console.log(data);
                this.setState({
                    price: data.category[0].price
                })
            })
            .catch(error => console.log(error))
    }

    handelChange(event){
        const currentInput = event.target.name;
        const newValue = event.target.value;
        this.setState({
            [currentInput]: newValue
        }, () => {
            console.log(this.state);
            const total = (this.state.gb * this.state.price) * this.state.month ;
            // num.toFixed(1)
            this.setState({
                output: total.toFixed(2)
            })
        })
    }

    rnederCost(){
        return (
            <div className="cost">
                <p>{this.state.output}</p>
                {/* <p>{this.state.month}</p>
                <p>{this.state.years}</p> */}
            </div>
        )
    }

    render(){
        return(
            <div className="cloud">
                <h1>Cloud</h1>
                <div className="form">
                <form>
                    <label>GB: </label><br/><input type="number" name="gb" onChange={this.handelChange.bind(this)} required/><br/>
                    <label>Month: </label><br/><input type="number" name="month" onChange={this.handelChange.bind(this)} required/><br/>
                    {/* <label>Years: </label><input type="number" name="years" onChange={this.handelChange.bind(this)}/><br/> */}
                </form>
                </div>
                {this.rnederCost()}
            </div>
        )
    }
}
export default Cloud;
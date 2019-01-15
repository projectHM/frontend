import React, {Component} from 'react';
import CostCalcuate from './CostCalculate';

class Main extends Component {
    constructor(){
        super();
        this.state ={
            
        }
    }

    renderCostCalcuate(){
        console.log('render');
        return (
            <div>
                <CostCalcuate/>
            </div>
        )
    }

    render(){
        return (
            <div>
                <h1>Main</h1>
                <button onClick={()=>this.props.setActivePage('costCalculate')}>Show</button>
                {/* {this.renderCostCalcuate()} */}
                {/* <CostCalcuate/> */}
            </div>
        )
    }
}
export default Main;
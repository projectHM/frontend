import React, {Component} from 'react';
import CostCalcuate from './CostCalculate';
import {Button } from  'react-bootstrap';
import App from '../App.css';
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
            <div className="firstPage">
                <h1>Main</h1>

                <Button bsStyle="primary" onClick={()=>this.props.setActivePage('costCalculate')}>Show</Button>
                {/* {this.renderCostCalcuate()} */}
                {/* <CostCalcuate/> */}

            </div>
           
        )
    }
}
export default Main;
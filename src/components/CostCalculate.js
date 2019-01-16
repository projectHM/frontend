import React, { Component } from 'react';
import MakeRequest from './MakeRequest';
import DataCenter from './DataCenter';
import Cloud from './Cloud';

class CostCalcuate extends Component {
    constructor() {
        super();
        this.state = {
            cpu: '',
            ram: '',
            disk: '',
            router: '',
            switch: ''
        }
    }
<<<<<<< HEAD

    setReq(req) {
=======
    setReq(req){
        console.log(req.cpu);
        // const cpu = req.cpu;
        // const ram = req.ram;
        // const disk = req.disk;
        // const router = req.router;
        // const switch = req.switch;

>>>>>>> e5fe131f7ed54c2e59a8ca8b66dd8645547bb9d8
        this.setState({
            cpu: cpu,
            ram: req.ram,
            disk: req.disk,
            router: req.router,
            switch: req.switch
        },
        console.log('reqqqqq',this.state))
    }

    handelSubmit(event) {
        // event
        event.preventDefault();
        // this.setState({
        //     cpu: req.cpu,
        //     ram: req.ram,
        //     disk: req.disk,
        //     router: req.router,
        //     switch: req.switch
        // })
    }


    render() {
        return (
            <div>
                <p>cost calculate</p>
                <div className="box">
                    <div>
                        <DataCenter setReq={this.setReq.bind(this)} setActivePage={this.props.setActivePage.bind(this)} />
                        <form onSubmit={this.handelSubmit.bind(this)}>
                            {/* <button>Make Request</button> */}
                        </form>
                    </div>
                    <div>
                        <Cloud />
                    </div>
                </div>


                {/* <button>Make Req</button> */}
                {/* <MakeRequest req={this.state}/> */}
            </div>
        )
    }
}
export default CostCalcuate;
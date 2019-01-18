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

    setReq(req){
        console.log(req.cpu);
        const cpuInfo = req.cpu;
        const ramInfo = req.ram;
        const diskInfo = req.disk;
        const routerInfo = req.router;
        const switchInfo = req.switch;
        
        console.log(ramInfo,', ', cpuInfo, ', ', diskInfo, ', ',routerInfo, ', ',switchInfo);

        this.setState({
            cpu: cpuInfo,
            ram: ramInfo,
            disk: diskInfo,
            router: routerInfo,
            switch: switchInfo
        }, () => {
            console.log('after make req',this.state);
            this.props.setReqInfo(this.state);
            this.props.setActivePage('makeReq');
        })

        // console.log('cpu',this.state.cpu);
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
                <p> CostCalcuate</p>
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
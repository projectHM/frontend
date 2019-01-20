import React, {Component} from 'react';
import { timingSafeEqual } from 'crypto';
import { button} from 'react-bootstrap';

class DataCenter extends Component {
    constructor(){
        super();
        this.state ={
            cpu: '',
            ram: '',
            disk: '',
            router: 0,
            switch: 0,
            allProudcts: [],
            allCPU: [],
            allRAM: [],
            alldisk: [],
            allswitch: [],
            allrouter: [],
            output: 0
        }
    }
    componentDidMount(){
        const url = `http://localhost:3000/cd/products/`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    allProudcts: data.products
                },() => {
                    const filterCPU = this.state.allProudcts.filter(el => {
                        return el.name === 'CPU'
                    });

                    const filterRAM = this.state.allProudcts.filter(el => {
                        return el.name === 'RAM'
                    });

                    const filterdisk = this.state.allProudcts.filter(el => {
                        return el.name === 'disk'
                    });
                    const filterswitch = this.state.allProudcts.filter(el => {
                        return el.name === 'switch'
                    });
                    const filterrouter= this.state.allProudcts.filter(el => {
                        return el.name === 'router'
                    });
        
                    this.setState({
                        allCPU: filterCPU,
                        allRAM: filterRAM,
                        alldisk: filterdisk,
                        allswitch: filterswitch,
                        allrouter: filterrouter,
                    });
                    console.log('after mount',this.state);
                })
    
                console.log(data)
            })
            .catch(error => console.log(error))

            // const filterCPU = this.state.allProudcts.filter(el => {
            //     return el.name === 'CPU'
            // })

            // console.log(filterCPU);
        }

    handelChange(event){
        const currentInput = event.target.name;
        const newValue = event.target.value;
        this.setState({
            [currentInput]: newValue
        }, () => {
            console.log(this.state);

            const getCurrentCPU = this.state.allCPU.filter(el => {
                return (el.type === this.state.cpu) ? el : 0;
            });

            console.log('getCurrentCPU ', getCurrentCPU);
            let getCPUPrice, getRAMPrice, getDiskPrice;
            if (this.state.cpu != '' && this.state.ram != '' && this.state.cpu != ''){
                getCPUPrice = getCurrentCPU[0].cost;
                getRAMPrice = this.state.allRAM[0].cost;
                getDiskPrice = this.state.allCPU[0].cost;
            } else {
                getCPUPrice = 0;
                getRAMPrice = 0;
                getDiskPrice = 0;
            }
            // const getRAMPrice = this.state.allRAM[0].cost;
            // const getDiskPrice = this.state.allCPU[0].cost;
            const getswitchPrice = this.state.allswitch[0].cost;
            const getrouterPrice = this.state.allrouter[0].cost;

            console.log(getCPUPrice, ', ', getRAMPrice, ', ', getDiskPrice, ', ',getswitchPrice, ', ', getrouterPrice);

            const ptice = (getCPUPrice + getRAMPrice + getDiskPrice) + (getswitchPrice * this.state.switch) + (getrouterPrice * this.state.router);
            this.setState({
                output: ptice.toFixed(2)
            })

        })

        // this.setState({})
        // // var filterData;
        // if(event == " "){
        //     filteredData = this.props.data;
        // }else{
        //   filteredData = this.props.data.filter(function(item) {
        //   return 
        // });
        // }
    }

    handelSubmit(event){
        // event
        event.preventDefault();
        // console.log('sttttate in datacenter',this.state);

        const cpu = this.state.allCPU.filter(el => {
            return el.type === this.state.cpu
        });

        console.log('cpu ', cpu[0].id);

        const ram = this.state.allRAM.filter(el => {
            return el
        });
        console.log('raaaam ', ram[0]);

        const disk = this.state.alldisk.filter(el => {
            return el
        });

        const router = this.state.allrouter.map(el => {
            return el
        });

        const switchInfo = this.state.allswitch.map(el => {
            return el;
        });
        // console.log('switchInfo ', switchInfo);

        this.setState({
            cpu: cpu[0],
            ram: ram[0],
            disk: disk[0],
            router: router[0],
            switch: switchInfo[0]
        }, () => {
            console.log(this.state);
            this.props.setReq(this.state);
        })

        // this.props.setReq(this.state);
        // this.props.setActivePage('makeReq');
    }

renderProducts(){

}
    renderCost(){
        return (
            <div className="cost">
                {/* <p>{this.state.cpu}</p>
                <p>{this.state.ram}</p>
                <p>{this.state.disk}</p>
                <p>{this.state.router}</p>
                <p>{this.state.switch}</p> */}
                <p>{this.state.output}</p>
            </div>
        )
    }

    renderList(arr){
        return (arr.map((el) => {
            return <option value={el.type}>{el.type}</option>
        })
        )
    }


    render(){
        // {console.log(this.state.allProudcts)}
        return(
            <div className="dataCenter">
                <h1>Data Center</h1>
                <div class="dataCenterForm">
                <form onSubmit={this.handelSubmit.bind(this)}>
                        <label>CPU: </label>
                        {/* <input type="text" name="cpu" onChange={this.handelChange.bind(this)}/> */}
                        <select name="cpu" onChange={this.handelChange.bind(this)}>
                            {this.renderList(this.state.allCPU)}
                        </select>
                        <br/>
                        <label>RAM: </label>
                        {/* <input type="text" name="ram" onChange={this.handelChange.bind(this)}/> */}
                        <select name="ram" onChange={this.handelChange.bind(this)}>
                            {this.renderList(this.state.allRAM)}
                        </select>
                        <br/>
                        <label>Disk: </label>
                        {/* <input type="text" name="disk" onChange={this.handelChange.bind(this)}/> */}
                        <select name="disk" onChange={this.handelChange.bind(this)}>
                            {this.renderList(this.state.alldisk)}
                        </select>
                        <br/>
                        <label>Router: </label><input type="number" name="router" onChange={this.handelChange.bind(this)} required/><br/>
                        <label>Switch: </label><input type="number" name="switch" onChange={this.handelChange.bind(this)} required/><br/>
                        <button bsStyle="primary">Make Request</button>
                    </form>
                    {/* <div>
                    </div> */}
                </div>
                        {this.renderCost()}
            </div>
        )
    }
}
export default DataCenter;
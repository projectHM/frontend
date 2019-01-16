import React, {Component} from 'react';

class DataCenter extends Component {
    constructor(){
        super();
        this.state ={
            cpu: '',
            ram: '',
            disk: '',
<<<<<<< HEAD
            router: '',
            switch: '',
            allProudcts: [],
            allCPU: [],
            allRAM: [],
            alldisk: [],
            allswitch: [],
            allrouter: [],

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
                    console.log(filterCPU);
                })
    
                console.log(data)
            })
            .catch(error => console.log(error))

            // const filterCPU = this.state.allProudcts.filter(el => {
            //     return el.name === 'CPU'
            // })

            // console.log(filterCPU);
        }
=======
            routerInfo: '',
            switchInfo: ''
        }
    }
>>>>>>> e5fe131f7ed54c2e59a8ca8b66dd8645547bb9d8
    handelChange(event){
        // const currentInput = event.target.name;
        // const newValue = event.target.value;
        // this.setState({
        //     [currentInput]: newValue
        // }, () => {
        //     console.log(this.state);
        // })

        // this.setState({})
        // var filterData;
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
        console.log('sttttate in datacenter',this.state);
        this.props.setReq(this.state);
        this.props.setActivePage('makeReq');
    }

renderProducts(){

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

    renderList(arr){
        return ( arr.map((el) => {
            return <option value={el.type}>{el.type}</option>
    
        })
        )
    }

    render(){
        // {console.log(this.state.allProudcts)}
        return(
            <div className="dataCenter">
                <h1>Data Center</h1>
                <div>
                <form onSubmit={this.handelSubmit.bind(this)}>
                        <label>CPU</label>
                        {/* <input type="text" name="cpu" onChange={this.handelChange.bind(this)}/> */}
                        <select>
                            {this.renderList(this.state.allCPU)}
                        </select>
                        <br/>
                        <label>RAM</label>
                        {/* <input type="text" name="ram" onChange={this.handelChange.bind(this)}/> */}
                        <select>
                            {this.renderList(this.state.allRAM)}
                        </select>
                        <br/>
                        <label>Disk</label>
                        {/* <input type="text" name="disk" onChange={this.handelChange.bind(this)}/> */}
                        <select>
                            {this.renderList(this.state.alldisk)}
                        </select>
                        <br/>
                        <label>Router</label><input type="number" name="router" onChange={this.handelChange.bind(this)}/><br/>
                        <label>Switch</label><input type="number" name="switch" onChange={this.handelChange.bind(this)}/><br/>
                        <button>Make Request</button>
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
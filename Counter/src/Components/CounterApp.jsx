import { Component } from "react";
export default class CounterApp extends Component{
    constructor(props){
        super(props);
        this.state={
            count:0,
        };
    }
    handledAdd=()=>{
        this.setState({count:this.state.count+1});

    }
    handledMinus=()=>{
        this.setState({count:this.state.count-1});
    }
    handledReset=()=>{
        this.setState({count:0});
    };
    render(){
        return(
            <>
            <div id="Container">
            <h1 class="appName">Counter App</h1>
            <h1 class="count">Count:{this.state.count}</h1>
            <button onClick={this.handledAdd}>+</button>
            <button onClick={this.handledMinus}>-</button>
            <button onClick={this.handledReset}>Reset</button>
            </div>
            </>
        )
    }
}
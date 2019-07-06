import React from 'react';
import './App.css';
import World from "./universe/World/World";
import Filter from "./universe/Filter/Filter";

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            size: 10,
            numberOfGeneration: 10,
            aliveRules: ['001','010'],
        }
    }

    handleChange = (size, generation, aliveRules) => {
        this.setState({
            size: size,
            numberOfGeneration: generation,
            aliveRules: aliveRules
        }, ()=>{
            console.log(this.state.size,this.state.numberOfGeneration, this.state.aliveRules);
        })
    };

    render(){
        return (
            <div className="App">
                <header className="App-header">
                    <Filter onChange = {this.handleChange}/>
                    <World size = {2}
                           numberOfGeneration = {this.state.numberOfGeneration}
                           aliveRule = {this.state.aliveRules}/>
                </header>
            </div>
        );
    }

}

export default App;

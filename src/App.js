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
        })
    };

    render(){
        return (
            <div className="App">
                Game Of Life
                <header className="App-header">
                    <Filter onChange = {this.handleChange}/>
                    <br/>
                    <World size = {this.state.size}
                           numberOfGeneration = {this.state.numberOfGeneration}
                           aliveRules = {this.state.aliveRules}/>
                </header>
            </div>
        );
    }

}

export default App;

import React, { Component } from 'react';
const axios = require('axios').default;

class Fetch extends Component {
    constructor(props){
        super(props)
        this.state={
            data : null
        }
    }
componentDidMount(){
    axios("https://anapioficeandfire.com/api/characters/583")
        .then(response => this.setState({data : response}))
        .catch(error=> console.log(error));
        console.log(this.state.data)
}
    render() {
        
        return (
            <div>
                <h1>Fetch Component</h1>
            </div>
        );
    }
}

export default Fetch;
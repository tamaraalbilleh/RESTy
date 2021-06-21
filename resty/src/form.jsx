import React from 'react';
import './form.scss';
// const superagent = require('superagent')
class Form extends React.Component{
    constructor (props){
        super (props);
        this.state = {
            section : 'http://localhost:3000',
            method : 'GET'
        }
    }
    handleInput = e =>{
        let section = e.target.value;
        this.setState ({section})
    };

    handleClick = e =>{
        e.preventDefault ()
        let method = e.target.value;
        this.setState ({method})
    }
    submitHandler = async e =>{
        e.preventDefault();
         
        let req = this.state.section;
        // let method= this.state.method;
        let raw = await fetch(req);
        let header= await fetch(req).then((response) => {    
            for (let pair of response.headers.entries()) {
                let n = pair.length
                let string = '';
                for (let i =0;i<n;i++){
                    if (i %2 === 0){
                        string = string + pair[i] + ': ' + pair[i+1]
                    }
                }
                return string;
            }
        }); 
    
        
        let data = await raw.json()
        console.log ('headers', header)
        console.log ('data', data)
        const count = data.count;
        const results = data.results;
       
        this.props.handler(results, count ,header);
    }
    render (){
        return (
            <React.Fragment>
            <form onSubmit={this.submitHandler}>
                <label for="url-input">URL : </label>
                <input id="url-input"  type="text" name="url-input" onChange={this.handleInput}/>
                <input id="submit" type="submit" value="Go!"/><br/>
                <button id="get" onClick={this.handleClick} value="GET">GET</button>
                <button id="post" onClick={this.handleClick} value="POST">POST</button>
                <button id="put" onClick={this.handleClick} value="PUT">PUT</button>
                <button id="delete" onClick={this.handleClick} value="DELETE">DELETE</button>
            </form>
            <div id='formd'>
                <h4>{this.state.method}  :  {this.state.section} </h4>
            </div>
            </React.Fragment>
        )
    };
    
}




export default Form;
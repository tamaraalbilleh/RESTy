import React from 'react';
import './form.scss';

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
    render (){
        return (
            <main>
            <form>
                <label for="url-input">URL : </label>
                <input id="url-input"  type="text" name="url-input" onChange={this.handleInput}/>
                <input id="submit" type="submit" value="Go!"/><br/>
                <button id="get" onClick={this.handleClick} value="GET">GET</button>
                <button id="post" onClick={this.handleClick} value="POST">POST</button>
                <button id="put" onClick={this.handleClick} value="PUT">PUT</button>
                <button id="delete" onClick={this.handleClick} value="DELETE">DELETE</button>
            </form>
            <div>
                <h4>{this.state.method}  :  {this.state.section} </h4>
            </div>
            </main>
        )
    };
    
}




export default Form;
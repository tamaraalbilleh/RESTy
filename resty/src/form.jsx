import React from 'react';
import './form.scss';
// const superagent = require('superagent')
class Form extends React.Component{
    constructor (props){
        super (props);
        this.state = {
            section : 'http://localhost:3000',
            method : 'GET',
            body : {},
            array :[],

        }
        this.submitHandler = this.submitHandler.bind(this)
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
        let textBody = e.target.body.value
        // this.setState ({body : e.target.body.value})
        console.log ('target data',e.target.body.value)
        // console.log ('body data',this.state.body)

        let req = this.state.section;
        // let method= this.state.method;
        let raw;
        if ((this.state.method === 'PUT' || this.state.method === 'POST') ){
            raw = await fetch(req , {method : this.state.method , body :  textBody ,mode: "cors",
            headers: {
              "Content-Type": "application/json",
            },});
        }else if (this.state.method === 'GET' || this.state.method === 'DELETE' ) {
            
            raw = await fetch(req , {method : this.state.method});
        }
        
        // this.setState.body ({textBody})
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
        let array = [];
        if (data){
            let str = `${this.state.method},${this.state.section},${textBody}`
            // console.log('this is the req',str)
            let oldResult =JSON.parse(localStorage.getItem('request'))
            if (oldResult){
                // console.log ('these are old results' , oldResult)
                Object.values(oldResult).map((item) => {
                    if (!array.includes (item)){
                        array.push (item)
                    }
                });
            }
            if (!array.includes(str)){
                // console.log('inside for if ')
                array.push (str)
                // array.filter((item, index) => array.indexOf(item) === index)
                    localStorage.setItem('request', JSON.stringify(array));
                }
          
        }
        // console.log ('headers', header)
        // console.log ('data', data)
        let results;
        if (data.results){
            results  = data.results;
        }else {
            results = data
        }
        let count;
        if (data.count){    
            count = data.count;
        }else {
            count = data.length
        }
       
        this.props.handler(results, count ,header, array);
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
                <textarea rows="4" cols="50" id="textarea" name="body" placeholder="please enter a json body"></textarea>
            </form>
            <div id='formd'>
                <h4>{this.state.method}  :  {this.state.section} </h4>
            </div>
            </React.Fragment>
        )
    };
    
}




export default Form;
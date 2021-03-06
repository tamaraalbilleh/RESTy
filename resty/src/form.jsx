import React from 'react';
import './form.scss';
import IF from "./if";
import Loader from "./Loader";

class Form extends React.Component{
    constructor (props){
        super (props);
        this.state = {
            section : 'http://localhost:3000',
            method : 'GET',
            body : {},
            results :[],
            flag : false,

        }
        this.submitHandler = this.submitHandler.bind(this);
        this.toggle = this.toggle.bind (this)
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
        setTimeout(async () => {
 
   
        let raw;
        let method2 ;
        let url2 ;
        let body2 ;
        if (this.props.meth && this.props.ur){
            method2 = this.props.meth;
            url2 = this.props.ur;
            if (this.props.bod){
                body2 =await JSON.stringify(this.props.bod)

            }else {
                body2 = e.target.body.value
            }
            // console.log ('body after histoty1' , body2)
                // input.value = url2
           
        }else {
            method2 = this.state.method
            url2= this.state.section
            body2 =e.target.body.value
          
        }
        if ((method2 === 'PUT' || method2 === 'POST') ){
            raw = await fetch(url2 , {method : method2 , body :  body2 ,mode: "cors",
            headers: {
              "Content-Type": "application/json",
            },});
        }else if (method2 === 'GET' || method2 === 'DELETE' ) {
            
            raw = await fetch(url2 , {method : method2});
        }
        
        this.setState ({body :body2 , flag : !this.state.flag  })
        let header= await fetch(url2).then((response) => {    
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
        this.setState({ results: data, body: body2, flag: !this.state.flag});
        let array = [];
        if (data){
            let str = `${this.state.method},${this.state.section},${body2}`
            // console.log('this is the req',str)
            let oldResult =JSON.parse(localStorage.getItem('request'))
            if (oldResult){
                // console.log ('these are old results' , oldResult)
                Object.values(oldResult).map((item) => { /// keys
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
       let flag = this.state.flag
        this.props.handler(results, count ,header, array , flag);
       
        }, 3000);
    }


    toggle = ()=>{
        this.setState ({flag  :! this.state.flag})
    }

    

    render (){
        return (
            <React.Fragment>
            <form onSubmit={this.submitHandler}>
                <label for="url-input">URL : </label>
                <input id="inputs"  type="text" name="inputurl" onChange={this.handleInput} />

                <IF condition={this.state.flag}>
                    <Loader></Loader>
                </IF>

                <button id="get" onClick={this.handleClick} value="GET">GET</button>
                <button id="post" onClick={this.handleClick} value="POST">POST</button>
                <button id="put" onClick={this.handleClick} value="PUT">PUT</button>
                <button id="delete" onClick={this.handleClick} value="DELETE">DELETE</button>
                <textarea rows="4" cols="60" id="textarea" name="body"  placeholder="please enter a json body"></textarea>
                <input id="submit" type="submit" value="Go!" className="go"/><br/>
                {/* <div id='formd'>
            
                </div> */}
            </form>
                <h4>{this.props.meth || this.state.method}  :  {this.props.ur || this.state.section} </h4>
           
            </React.Fragment>
        )
    };
    
}




export default Form;
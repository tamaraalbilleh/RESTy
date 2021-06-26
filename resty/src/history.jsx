import React from 'react';
import If from './if';
import Else from './else';
class History extends React.Component {
    constructor (props){
        super (props)
        this.state = {
            array2 : [],
            flag : false
        }
        this.hisClickHandler =this.hisClickHandler.bind(this);
        // this.hisClickHandler2 = this.hisClickHandler2.bind (this)
    }

    hisClickHandler = e =>{
        
        let meth = e.target.method.value;
        let ur = e.target.url.value;
        let bod = e.target.body.value;
        this.props.historyHandler(meth, ur ,bod);
        this.setState({flag : !this.state.flag})

          
          }
      
      render (){
          return (
            <React.Fragment>
        
              <ul>
                 {
                     this.props.arr.map(item=>{
                      let str = item.split(',')
                      let method = str[0];
                      let url = str[1];
                      let body = str[2] 
                      console.log ('this is true')
                      return (
                          <form onSubmit={this.hisClickHandler }>
                          <input type="hidden" value={str[0]} name="method"/>
                          <input type="hidden" value={str[1]} name="url"/>
                          <input type="hidden" value={str[2]} name="body"/>
                          <li><button type='submit'>{method}</button>   {url} , body is {body}</li>
                          </form>
                      )
                     })
  
                  }
              </ul>
              

            
        <Else condition={this.state.flag}>
         <p>hi</p>
        </Else>
        </React.Fragment>
                   
         )          
  
    }
}



export default History
import React from 'react';
import JSONPretty from 'react-json-pretty';
import './result.scss';
class Result extends React.Component {
    render (){
    console.log ('props : ' , this.props)
        return (
            <React.Fragment>
                <div id="results"> results for your search : 
                    <p>Headers : <JSONPretty id="json-pretty" data= {this.props.header}></JSONPretty></p>
                    <p>count is {this.props.count}</p>
                    <p>Results : <JSONPretty id="json-pretty" data={this.props.results}></JSONPretty> </p>
                </div>
            </React.Fragment>
        )
    }
}
export default Result;
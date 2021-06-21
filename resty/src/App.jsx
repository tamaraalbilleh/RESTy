import React from 'react';
import './App.scss';
import Header from './header'
import Footer from './footer'
import Form from './form'
import Result from './result'
class App extends React.Component {
  constructor (props){
    super (props);
    this.state = {
      results : ['search result will appear here :'],
      count : 0,
      header : 'headers will be displayed here',
    }
    this.handleForm = this.handleForm.bind(this);
  }

  handleForm (results,count, header){
    this.setState({ results, count  , header});
  }

  render(){
    return(
         
      <React.Fragment>
      <Header/>
      <main>
      <Form handler={this.handleForm} /> 
      <Result results = {this.state.results} count={this.state.count} header={this.state.header}/>
      </main>
      <Footer/>
      </React.Fragment>
    )
  }
}



// function App() {
//   return (
//     <React.Fragment>
//       <Header/>
//       <Form/>
//       <Footer/>
//     </React.Fragment>
//   )
// }

export default App;

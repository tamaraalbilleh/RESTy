import React from 'react';
import './App.scss';
import Header from './header'
import Footer from './footer'
import Form from './form'
import Result from './result'
import History from './history';


class App extends React.Component {
  constructor (props){
    super (props);
    this.state = {
      results : ['search result will appear here :'],
      count : 0,
      header : 'headers will be displayed here',
      array : [],
      method : '',
      URL : '',
      body : {},
    }
    this.handleForm = this.handleForm.bind(this);
    this.handleHistory = this.handleHistory.bind (this);
  }


  handleForm (results,count, header , array){
    this.setState({ results, count  , header , array});

  }

  handleHistory(meth, ur ,bod){
    // let array = this.state.array;
    this.setState ({method : meth, URL : ur, body:bod})
  };

  render(){
    return(
      <React.Fragment>
      <Header/>
      <main>
      <History historyHandler={this.handleHistory} arr={this.state.array} />
      <Form handler={this.handleForm}  meth= {this.state.method} ur={this.state.URL}  bod={this.state.body}/> 
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

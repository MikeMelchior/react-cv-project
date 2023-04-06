import React, { Component } from "react";
import ResumeHeader from './Components/ResumeHeader'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      
    }
  }



  render() {
    return (
      <>
      <ResumeHeader info={this.state.headerInfo}/>
      </>
    )
  }
}

export default App;

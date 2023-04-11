import React, { Component } from "react";
import Experience from "./Components/Experience";
import ResumeHeader from './Components/ResumeHeader'
import Education from "./Components/Education";

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
      <Experience />
      <Education />
      </>
    )
  }
}

export default App;

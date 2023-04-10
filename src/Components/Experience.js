import React, { Component } from 'react'

export default class Experience extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showForm: false,
      company: '',
      title: '', 
      startYear: '',
      endYear: '',
      description: '',
      experience: [],
    }

    this.toggleForm = this.toggleForm.bind(this);
    this.handleCompany = this.handleCompany.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
    this.handleStartYear = this.HandleStartYear.bind(this);
    this.handleEndYear = this.handleEndYear.bind(this);
    this.handleDescription = this.HandleDescription.bind(this);
    this.submitExperience = this.submitExperience.bind(this);
  }

  toggleForm(e) {
    this.setState(state => ({
      showForm: !state.showForm
    }))
  }

  handleCompany(e) {
    this.setState({
      company: e.target.value
    })
  }

  handleTitle(e) {
    this.setState({
      title: e.target.value
    })
  }

  HandleStartYear(e) {
    this.setState({
      startYear: e.target.value
    })
  }

  handleEndYear(e) {
    this.setState({
      endYear: e.target.value
    })
  }

  HandleDescription(e) {
    this.setState({
      description: e.target.value
    })
  }

  submitExperience(e) {
    e.preventDefault();



    this.setState({
      company: '',
      title: '',
      startYear: '',
      description: '',
    })

    this.toggleForm();
  }





  render() {

    return(
        <>
        <div className='experience'>
          <h2>Experience</h2>
          {this.state.showForm
          ? <form>
              <label htmlFor='company'>Company: 
                <input 
                type="text"
                value={this.state.company}
                onChange={this.handleCompany}
                />
              </label>
              <label htmlFor="title">Title: 
                <input 
                type="text"
                value={this.state.title}
                onChange={this.handleTitle}
                 />
              </label>
              <label htmlFor="startyear">Years Worked:
                <input 
                type="date"
                id='startyear'
                value={this.state.startYear}
                onChange={this.HandleStartYear} 
                />
                <p>to</p>
                <input 
                type="date"
                id='endyear'
                value={this.state.endYear}
                onChange={this.handleEndYear} />
              </label>
              <label htmlFor="description">Description: 
              </label>
                <textarea 
                name="description" 
                id="description"
                value={this.state.description}
                onChange={this.HandleDescription}
                ></textarea>
              
            <button onClick={this.submitExperience}>Submit</button>
          </form>

          : null
          }
          <button onClick={this.toggleForm}>Add Experience</button>
        </div>
        
        
        </>
    )
  }
}
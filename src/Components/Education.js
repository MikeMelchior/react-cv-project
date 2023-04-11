import React, { Component } from "react";
import uniqid from 'uniqid'

export default class Education extends Component {
  constructor(props) {
    super(props)

    this.state = {
        showForm: false,
        education: {
          id: uniqid(),
          school: '',
          certificate: '',
          startYear: '',
          endYear: '',
          description: '',
        },
        educations: [],
    }

    this.toggleForm = this.toggleForm.bind(this);
    this.handleSchool = this.handleSchool.bind(this);
    this.handleCertificate = this.handleCertificate.bind(this);
    this.handleStartYear = this.handleStartYear.bind(this);
    this.handleEndYear = this.handleEndYear.bind(this);
    this.handleDescription = this.handleDescription.bind(this);
    this.submitEducation = this.submitEducation.bind(this);
  }

  toggleForm() {
    this.setState(state => ({
      showForm: !state.showForm
    }))
  }

  handleSchool(e) {
    this.setState(state => ({
      education: {
        ...state.education, school: e.target.value
      }
    }))
  }

  handleCertificate(e) {
    this.setState(state => ({
      education: {
        ...state.education, certificate: e.target.value
      }
    }))
  }

  handleStartYear(e) {
    this.setState(state => ({
      education: {
        ...state.education, startYear: e.target.value
      }
    }))
  }

  handleEndYear(e) {
    this.setState(state => ({
      education: {
        ...state.education, endYear: e.target.value
      }
    }))
  }

  handleDescription(e) {
    this.setState(state => ({
      education: {
        ...state.education, description: e.target.value
      }
    }))
  }

  submitEducation(e) {
    e.preventDefault();
    this.setState(state => ({
      educations: [...state.educations, state.education],
      education: {
        id: uniqid(),
        school: '',
        certificate: '',
        startYear: '',
        endYear: '',
        description: '',
      }
    }))

    this.toggleForm();
  }

  render() {
    let education = this.state.education
    return(
      <>
        <div className="education no-print">
          <h2>Education</h2>
          {this.state.showForm
          ?
          <form>
            <label htmlFor='school'>School: 
              <input 
              id="school"
              type="text"
              value={education.school}
              onChange={this.handleSchool}
              />
            </label>
            <label htmlFor="city">Certificate: 
              <input 
              id="certificate"
              type="text"
              value={education.certificate}
              onChange={this.handleCertificate}
            />
            </label>
            <label htmlFor="startyear">Years attended:
              <input 
              type="date"
              id='startyear'
              value={education.startYear}
              onChange={this.handleStartYear} 
              />
              <p>to</p>
              <input 
              type="date"
              id='endyear'
              value={education.endYear}
              onChange={this.handleEndYear} 
              />
            </label>
            <label htmlFor="description">Description: 
            </label>
              <textarea 
              name="description" 
              id="description"
              value={education.description}
              onChange={this.handleDescription}
              ></textarea>
          
          <button className='no-print' onClick={this.submitEducation}>Submit</button>
          </form>
          : null
          }
          {this.state.educations.map(edu => {
            return (
              <div key={edu.id}>
                <p>{edu.school}</p>
                <p>{edu.certificate}</p>

              </div>
            )
          })}



          <button className="no-print add" onClick={this.toggleForm}>Add Education</button>
        </div>     
      </>
    )
  } 
}
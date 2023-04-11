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
    this.removeEducation = this.removeEducation.bind(this);
    this.editEducation = this.editEducation.bind(this);
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

    let current = this.state.educations.find(edu => edu.id === this.state.education.id);
    if(current) {
      this.removeEducation(current);
    }

    if(this.state.education.endYear === '') {
      this.setState(state => ({
        education: {
          ...state.education, endYear: 'Current'
        }
      }))
    }

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

    this.sortEdus();
    this.toggleForm();
  }

  removeEducation(edu) {
    let tempEdus = this.state.educations.filter(item => {
      return item.id !== edu.id
    })
    this.setState({
      educations: tempEdus
    })
  }

  editEducation(edu) {
    this.setState({
      education: {
        id: edu.id,
        school: edu.school,
        certificate: edu.certificate,
        startYear: edu.startYear,
        endYear: edu.endYear,
        description: edu.description,
      },
      showForm: true,
    })
  }

  sortEdus() {
    this.setState(state => ({
      educations: state.educations.sort((edu1, edu2) => {
        return edu1.endYear < edu2.endYear ? 1 : -1;
      })
    }))
  }


  render() {
    let education = this.state.education
    return(
      <>
        <div className="education">
          <h2>Education</h2>
          {this.state.showForm
          ?
          <form className="no-print">
            <label htmlFor='school'>School: 
              <input 
              id="school"
              type="text"
              value={education.school}
              onChange={this.handleSchool}
              />
            </label>
            <label htmlFor="certificate">Certificate: 
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
              <div key={edu.id} className="education-container">
                <p><strong>{edu.school}</strong> <br/> {edu.certificate} </p>
                <p className="years">{edu.startYear} - {edu.endYear}</p>
                <p className="description">{edu.description}</p>
                <div className="buttons no-print">
                  <button onClick={() => {
                    this.editEducation(edu)
                  }}>edit</button>
                  <button onClick={() => {
                    this.removeEducation(edu)
                  }}>remove</button>
                </div>
              </div>
            )
          })}



          <button className="no-print add" onClick={this.toggleForm}>Add Education</button>
        </div>     
      </>
    )
  } 
}
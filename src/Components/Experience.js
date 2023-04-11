import React, { Component } from 'react'
import uniqid from 'uniqid'

export default class Experience extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showForm: false,
      experience: {
        company: '',
        title: '', 
        startYear: '',
        endYear: '',
        description: '',
        id: uniqid(),
      },
      experiences: [],
    }

    this.toggleForm = this.toggleForm.bind(this);
    this.handleCompany = this.handleCompany.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
    this.handleStartYear = this.handleStartYear.bind(this);
    this.handleEndYear = this.handleEndYear.bind(this);
    this.handleDescription = this.handleDescription.bind(this);
    this.submitExperience = this.submitExperience.bind(this);
  }

  toggleForm() {
    this.setState(state => ({
      showForm: !state.showForm
    }))
  }

  handleCompany(e) {
    this.setState(state => ({
      experience: {
        ...state.experience, company: e.target.value
      }
    }))
  }

  handleTitle(e) {
    this.setState(state => ({
      experience: {
        ...state.experience, title: e.target.value
      }
    }))
  }

  handleStartYear(e) {
    this.setState(state => ({
      experience: {
        ...state.experience, startYear: e.target.value
      }
    }))
  }

  handleEndYear(e) {
    this.setState(state => ({
      experience: {
        ...state.experience, endYear: e.target.value
      }
    }))
  }

  handleDescription(e) {
    this.setState(state => ({
      experience: {
        ...state.experience, description: e.target.value
      }
    }))
  }

  submitExperience(e) {
    e.preventDefault();

    let current = this.state.experiences.find(exp => exp.id === this.state.experience.id);
    if (current) {
      this.removeExperience(current);
    }

    if (this.state.experience.endYear === '') {
      this.setState(state => ({
        experience: {
          ...state.experience, endYear: 'Current'
        }
      }))
    }

    this.setState(state => ({
      experiences : [...state.experiences, state.experience],
      experience: {
        company: '',
        title: '', 
        startYear: '',
        endYear: '',
        description: '',
        id: uniqid()
      },
    }))
    this.sortExps();
    this.toggleForm();
  }

  removeExperience(exp) {
    let newExps = this.state.experiences.filter(experience => experience.id !== exp.id)
    this.setState({
      experiences: newExps
    })
  }

  editExperience(exp) {
    this.setState({
      experience: {
        company: exp.company,
        title: exp.title, 
        startYear: exp.startYear,
        endYear: exp.endYear,
        description: exp.description,
        id: exp.id
      },
      showForm: true
    })
  }

  sortExps() {
    this.setState(state => ({
      experiences: state.experiences.sort((exp1, exp2) => {
        return exp1.endYear < exp2.endYear ? 1 : -1
      })
    }))
  }


  render() {
    return(
      <>
        <div className='experience'>
          <h2>Experience</h2>
          {this.state.showForm
          ? <form className='no-print'>
              <label htmlFor='company'>Company: 
                <input 
                type="text"
                value={this.state.experience.company}
                onChange={this.handleCompany}
                />
              </label>
              <label htmlFor="title">Title: 
                <input 
                type="text"
                value={this.state.experience.title}
                onChange={this.handleTitle}
                 />
              </label>
              <label htmlFor="startyear">Years Worked:
                <input 
                type="date"
                id='startyear'
                value={this.state.experience.startYear}
                onChange={this.handleStartYear} 
                />
                <p>to</p>
                <input 
                type="date"
                id='endyear'
                value={this.state.experience.endYear}
                onChange={this.handleEndYear} />
              </label>
              <label htmlFor="description">Description: 
              </label>
                <textarea 
                name="description" 
                id="description"
                value={this.state.experience.description}
                onChange={this.handleDescription}
                ></textarea>
              
            <button className='no-print' onClick={this.submitExperience}>Submit</button>
          </form>

          : null
          }
          {this.state.experiences.map(experience => {
            return (
              <div key={experience.id} className='experience-container'>
                <p ><strong>{experience.company}</strong> <br/> <em>{experience.title}</em></p>
                <p className='years'>{experience.startYear} - {experience.endYear}</p>
                <p className='description'>{experience.description}</p>
                <div className="buttons no-print">
                  <button onClick={() => {
                    this.editExperience(experience)
                  }}>edit</button>
                  <button onClick={() => {
                    this.removeExperience(experience)
                  }}>remove</button>
                </div>
                
              </div>
            )
          })}
          <button className='no-print add' onClick={this.toggleForm}>Add Experience</button>
        </div>
      </>
    )
  }
}
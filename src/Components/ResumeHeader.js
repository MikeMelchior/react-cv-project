import React, {Component} from "react";


export default class ResumeHeader extends Component {
  constructor(props){
    super(props)

    this.state = {
      isEditing: true,
      info: {
        name: '',
        city: '',
        email: '', 
        phone: '',
      },
      submitInfo: {
        submitName: '',
        submitCity: '',
        submitEmail: '',
        submitPhone: '',
      }
    }
    this.toggleEdit = this.toggleEdit.bind(this);
    this.handleNameInput = this.handleNameInput.bind(this)
    this.handleCityInput = this.handleCityInput.bind(this)
    this.submitInputs = this.submitInputs.bind(this)
  }

  toggleEdit(e) {
    this.setState({
      isEditing: !this.state.isEditing,
    })
  }

  handleNameInput(e) {
    this.setState({
      info: {
        name: e.target.value
      }
    })
  }

  handleCityInput(e) {
    this.setState({
      info: {
        city: e.target.value
      }
    })
  }

  submitInputs(e) {
    e.preventDefault()
    this.setState({ 
      submitInfo: {
        submitName: this.state.info.name,
        submitCity: this.state.info.city,
        submitEmail: this.state.info.email,
        submitPhone: this.state.info.phone,
      }
    })
    this.toggleEdit();
  }
 
  render(){

    return(
        <div className="resume-header">
        {this.state.isEditing 
          ? 
          <form>
            <label htmlFor="name">Name:
              <input 
                type="text"
                id="name" 
                value={this.state.info.name}
                onChange={this.handleNameInput}>
              </input>
            </label>
            <label htmlFor='city'>City:
              <input
                type='text'
                id="city"
                value={this.state.info.city}
                onChange={this.handleCityInput}>
              </input>
            </label>
            <button type="submit" onClick={this.submitInputs}
            >Submit</button>
          </form>
          : 
          <div className="resume-header">
            <h1>{this.state.submitInfo.submitName}</h1>
            <button onClick={this.toggleEdit}>Edit</button>
          </div>
          }

        </div>
    ) 
  }
}
import React, {Component} from "react";


export default class ResumeHeader extends Component {
  constructor(props){
    super(props)

    this.state = {
      isEditing: true,
      name: '',
      address: '',
      email: '', 
      phone: '',
      submitName: '',
      submitAddress: '',
      submitEmail: '',
      submitPhone: '',
    }
    this.toggleEdit = this.toggleEdit.bind(this);
    this.handleNameInput = this.handleNameInput.bind(this);
    this.handleAddressInput = this.handleAddressInput.bind(this);
    this.handleEmailInput = this.handleEmailInput.bind(this);
    this.handlePhoneInput = this.handlePhoneInput.bind(this);
    this.submitInputs = this.submitInputs.bind(this);
  }

  toggleEdit() {
    this.setState({
      isEditing: !this.state.isEditing,
    })
  }

  handleNameInput(e) {
    this.setState({
      name: e.target.value
    })
  }

  handleAddressInput(e) {
    this.setState({
      address: e.target.value
    })
  }

  handleEmailInput(e) {
    this.setState({
      email: e.target.value
    })
  }

  handlePhoneInput(e) {
    this.setState({
      phone: e.target.value
    })
  }

  submitInputs(e) {
    e.preventDefault()
    this.setState({ 
      submitName: this.state.name,
      submitAddress: this.state.address,
      submitEmail: this.state.email,
      submitPhone: this.state.phone,
    })
    this.toggleEdit();
  }
 
  render(){

    return(
        <>
        {this.state.isEditing 
          ? 
          <div className="resume-header-form">
            <form>
              <label htmlFor="name">Name:
                <input 
                  type="text"
                  id="name" 
                  value={this.state.name}
                  onChange={this.handleNameInput}>
                </input>
              </label>
              <label htmlFor='address'>Address:
                <input
                  type='text'
                  id="address"
                  value={this.state.address}
                  onChange={this.handleAddressInput}>
                </input>
              </label>  
              <label htmlFor="email">Email:
                <input 
                  type='email'
                  id='email'
                  value={this.state.email}
                  onChange={this.handleEmailInput}>
                </input>
              </label>
              <label htmlFor="phone">Phone Number:
                <input
                  type="tel"
                  id="phone"
                  value={this.state.phone}
                  onChange={this.handlePhoneInput}>
                </input>
              </label>
              <button type="submit" onClick={this.submitInputs}
              >Submit</button>
            </form>
          </div>
          : 
          <div className="resume-header">
            <h1>{this.state.submitName}</h1>
            <p>{this.state.submitAddress}</p>
            <p>{this.state.submitEmail}</p>
            <p>{this.state.submitPhone}</p>
            <button className="no-print" onClick={this.toggleEdit}>Edit</button>
          </div>
          }
        </>
    ) 
  }
}
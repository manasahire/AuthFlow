import React, { Component } from 'react';
import './regform.css'
import axios from 'axios';

class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        userName: null,
        age: 0,
        dob: null,
        email: null,
        phoneNumber: 0,
        gender: null
      }
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState(prevState => ({
      formData: {
        ...prevState.formData,
        [name]: value
      }
    }));
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.formData);

    axios.post('http://localhost:8081/registration/addusers', this.state.formData)
      .then(response => {
        alert(JSON.stringify(this.state.formData));
        alert('Registration successful!');
      })
      .catch(error => {
        alert('Registration failed. Please try again.');
        console.error('Registration error:', error);
      });
  };

  render() {
    return (
      <div className="form-container">
        <fieldset>
          <legend>Registration Form</legend>
          <form onSubmit={this.handleSubmit} className='trial'>
            <table className='center'>
              <tbody>
                <tr>
                  <td><label>Username:</label></td>
                  <td>
                    <input type="text" name="userName" onChange={this.handleChange} />
                  </td>
                </tr>
                <tr>
                  <td><label>Age:</label></td>
                  <td>
                    <input type="number" name="age" onChange={this.handleChange} required />
                  </td>
                </tr>
                <tr>
                  <td><label>Date of Birth:</label></td>
                  <td>
                    <input type="date" name="dob" onChange={this.handleChange} required />
                  </td>
                </tr>
                <tr>
                  <td><label>Email:</label></td>
                  <td>
                    <input type="email" name="email" onChange={this.handleChange} required />
                  </td>
                </tr>
                <tr>
                  <td><label>Phone Number:</label></td>
                  <td>
                    <input type="number" name="phoneNumber" onChange={this.handleChange} required />
                  </td>
                </tr>
                <tr>
                  <td><label>Gender:</label></td>
                  <td>
                    <select name="gender" onChange={this.handleChange} required>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td colSpan={2}>
                    <button type="submit">Register</button>
                  </td>
                </tr>
              </tbody>
            </table>

          </form>
        </fieldset>
      </div>
    );
  }
}

export default RegistrationForm;

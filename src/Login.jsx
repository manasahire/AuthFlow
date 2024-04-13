import React, { Component } from 'react';
import './login.css'; // Importing the CSS file
import axios from 'axios'

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      uName: "",
      uMob: "",
      users: [],
      isLoggedIn: false
    };
  }

  handleData(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  submitData(event) {
    event.preventDefault(); // Prevent default form submission
    console.log(this.state);

    // Check if username matches email and password matches mobile number
    const { uName, uMob, users } = this.state;
    if (users && users.length > 0) {
      const user = users.find(u => u.email === uName && u.phoneNumber === uMob);
      if (user) {
        this.setState({ isLoggedIn: true });
        alert("Login Successful");
      } else {
        alert("Login Unsuccessful");
      }
    }
  }
  componentDidMount() {
    axios.get('http://localhost:8081/registration/getall')
      .then(response => {
        console.log("Fetched user data:", response.data);
        this.setState({ users: response.data }); // Update the state with fetched user data
      })
      .catch(error => {
        console.error("Error: " + error);
      });

  }

  render() {
    const { uName, isLoggedIn } = this.state;
    if (isLoggedIn) {
      return <h1>Welcome, {uName}!</h1>;
    }
    return (
      <div className="form-container" >
        <fieldset>
          <legend>Login Form</legend>
          <form onSubmit={this.submitData.bind(this)} className='trial'>
            <table className='center'>
              <tr>
                <td><label for="uName">Enter User Name</label></td>
                <td><input type="text" id="uName" name="uName" onChange={this.handleData.bind(this)} /></td>
              </tr>
              <tr>
                <td><label for="uMob">Enter Password as Mobile number</label></td>
                <td><input type="text" id="uMob" name="uMob" onChange={this.handleData.bind(this)} /></td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <button type="submit">Register</button>
                </td>
              </tr>
            </table>
          </form>
        </fieldset>
      </div>
    );
  }
}

export default LoginForm;


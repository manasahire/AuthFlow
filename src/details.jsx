import React, { useState, useEffect } from 'react';
import './details.css';
import axios from 'axios'


function RegistrationDetails() {

  const [formData, setRecords] = useState({ records: [] });

  useEffect(
    () => {
      axios.get('http://localhost:8081/registration/getall').then(
        sucess => {
          console.log(sucess.data);
          setRecords({ records: sucess.data })
        }, error => {
          console.error("error" + error);
        }
      )
    }
  )

  return (

    <div>
      <div className="center-h2">
        <h3>Registration Details</h3>
      </div>
      <div className="card-container">
        {formData.records.map(
          (entry) => (
            <div key={entry.phoneNumber} className="card" >
              <div>Username: {entry.userName}</div>
              <div>Email: {entry.email}</div>
              <div>gender : {entry.gender}</div>
              <div>phone number : {entry.phoneNumber}</div>
              <div>age: {entry.age}</div>
              <div>date of birth : {entry.dob}</div>

            </div>
          )
        )
        }
      </div>
    </div>
  );
}

export default RegistrationDetails;

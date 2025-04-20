import "./Edit.css";
import React, { useState, useEffect } from 'react';

export default function Edit() {

      const [userName, setUserName] = useState('');
      const [firstName, setFirstName] = useState('');
      const [lastName, setLastName] = useState('');

      const [showForm, setShowForm] = useState(false);


      useEffect(() => {
            const fetchUserProfile = async () => {
                  try {
                        const token = localStorage.getItem('token');
                        const response = await fetch('http://localhost:3001/api/v1/user/profile', {
                              method: 'GET',
                              headers: {
                                    'Content-Type': 'application/json',
                                    'Authorization': `Bearer ${token}`,
                              },
                        });

                        if (response.ok) {
                              const data = await response.json();

                              setUserName(data.body.userName || '');
                              setFirstName(data.body.firstName || '');
                              setLastName(data.body.lastName || '');
                        } else {
                              console.error('Failed to fetch user profile');
                        }
                  } catch (error) {
                        console.error('Error:', error);
                  }
            };

            fetchUserProfile();
      }, []);

      const handleSave = async () => {
            const updatedUser = {
                  userName: userName,
                  firstName: firstName,
                  lastName: lastName,
            };

            try {
                  const token = localStorage.getItem('token');

                  const response = await fetch('http://localhost:3001/api/v1/user/profile', {
                        method: 'PUT',
                        headers: {
                              'Content-Type': 'application/json',
                              'Authorization': `Bearer ${token}`,
                        },
                        body: JSON.stringify(updatedUser),
                  });

                  if (response.ok) {
                        const data = await response.json();
                        console.log('User updated successfully:', data);
                        setShowForm(false);
                  } else {
                        console.error('Failed to update user');
                  }
            } catch (error) {
                  console.error('Error:', error);
            }
      };

      return (
            <div>
                  {!showForm && (
                        <div className='edit'>
                              <h2>Welcome back, {userName}!</h2>
                              <button className="editInfo" onClick={() => setShowForm(true)}>Edit User Info</button>
                        </div>
                  )}

                  {showForm && (
                        <div className="edit">
                              <h2>Edit user info</h2>
                              <form className="edit--user" onSubmit={(e) => e.preventDefault()}>
                                    <div className="edit--user__input">
                                          <label htmlFor="UserName">User name: </label>
                                          <input
                                                id="UserName"
                                                value={userName}
                                                onChange={(e) => setUserName(e.target.value)}
                                          />
                                    </div>
                                    <div className="edit--user__input">
                                          <label htmlFor="FirstName">First name: </label>
                                          <input className="readOnly"
                                                id="FirstName"
                                                value={firstName}
                                                readOnly
                                          />
                                    </div>
                                    <div className="edit--user__input">
                                          <label htmlFor="LastName">Last name: </label>
                                          <input className="readOnly"
                                                id="LastName"
                                                value={lastName}
                                                readOnly
                                          />
                                    </div>
                              </form>
                              <div className="edit--button">
                                    <button onClick={handleSave}>Save</button>
                                    <button onClick={() => setShowForm(false)}>Cancel</button>
                              </div>
                        </div>
                  )}
            </div>
      );
}

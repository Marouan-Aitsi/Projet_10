import "./Edit.css";
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserProfile, updateUserProfile } from '../../redux/actions/authActions';

export default function Edit() {
      const dispatch = useDispatch();
      const { userName, firstName, lastName } = useSelector((state) => state.auth.profile);
      const [editedUserName, setEditedUserName] = useState('');
      const [showForm, setShowForm] = useState(false);

      useEffect(() => {
            dispatch(fetchUserProfile());
      }, [dispatch]);

      useEffect(() => {
            setEditedUserName(userName);
      }, [userName]);

      const handleSave = () => {
            dispatch(updateUserProfile({ userName: editedUserName, firstName, lastName }));
            setShowForm(false);
      };

      return (
            <div>
                  {!showForm && (
                        <div className="edit">
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
                                                value={editedUserName}
                                                onChange={(e) => setEditedUserName(e.target.value)}
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
                                    <button className="editInfo" onClick={handleSave}>Save</button>
                                    <button className="editInfo" onClick={() => setShowForm(false)}>Cancel</button>
                              </div>
                        </div>
                  )}
            </div>
      );
}
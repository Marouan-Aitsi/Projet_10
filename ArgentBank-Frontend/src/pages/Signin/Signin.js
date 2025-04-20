import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../redux/actions/authActions';
import './Signin.css';
import { useNavigate } from 'react-router-dom'

export const Signin = () => {
      const [email, setUsername] = useState('');
      const [password, setPassword] = useState('');
      const dispatch = useDispatch();
      const error = useSelector((state) => state.auth.error);
      const navigate = useNavigate();

      const handleSubmit = (e) => {
            e.preventDefault();
            console.log('Email:', email, 'Password:', password);
            dispatch(loginUser(email, password))
                  .then((result) => {
                        console.log('Résultat de loginUser:', result);
                        if (result.type === 'LOGIN_SUCCESS') {
                              const token = result.payload.body.token;
                              console.log('Token:', token)
                              navigate('/User/User');
                        }
                  });
      };


      return (
            <div>
                  <main className="main bg-dark">
                        <section className="sign-in-content">
                              <i className="fa fa-user-circle sign-in-icon"></i>
                              <h1>Sign In</h1>
                              <form onSubmit={handleSubmit}>
                                    <div className="input-wrapper">
                                          <label htmlFor="email">Email</label>
                                          <input
                                                type="text"
                                                id="email"
                                                value={email}
                                                onChange={(e) => setUsername(e.target.value)}
                                                required
                                          />
                                    </div>
                                    <div className="input-wrapper">
                                          <label htmlFor="password">Password</label>
                                          <input
                                                type="password"
                                                id="password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                required
                                          />
                                    </div>
                                    {error && <p className="error-message">{error}</p>}
                                    <button type="submit" className="sign-in-button">
                                          Sign In
                                    </button>
                              </form>
                        </section>
                  </main>
            </div>
      );
};



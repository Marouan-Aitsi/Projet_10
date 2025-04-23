import './Header.css'
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logoutUser } from '../../redux/actions/authActions';
import Logo from '../../img/argentBankLogo.webp';

export const Header = () => {
      const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
      const dispatch = useDispatch();
      const navigate = useNavigate();
      const userName = useSelector((state) => state.auth.profile?.userName)

      const handleLogout = () => {
            dispatch(logoutUser()); // Appelle l'action de déconnexion
            navigate('/'); // Redirige vers la page d'accueil après la déconnexion
      };

      return (
            <header>
                  <nav className="main-nav">
                        <Link className="main-nav-logo" to='/'>
                              <img
                                    className="main-nav-logo-image"
                                    src={Logo}
                                    alt="Argent Bank Logo"
                              />
                        </Link>
                        <div>
                              {isAuthenticated ? (
                                    <div>
                                          <button className="main-nav-item logout--button" onClick={handleLogout}>
                                                <i className="fa fa-sign-out"></i>
                                                Logout
                                          </button>
                                          <Link className="main-nav-item" to="/User/User">
                                                <i className="fa fa-user-circle"></i>
                                                {userName || 'User'}
                                          </Link>
                                    </div>
                              ) : (
                                    <Link className="main-nav-item" to="/Signin/Signin">
                                          <i className="fa fa-user-circle"></i>
                                          Sign In
                                    </Link>
                              )}
                        </div>
                  </nav>
            </header>
      );
};

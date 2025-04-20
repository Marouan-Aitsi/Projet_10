export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

// Action créateur pour succès de connexion
export const loginSuccess = (user) => ({
      type: LOGIN_SUCCESS,
      payload: user,
});

// Action créateur pour échec de connexion
export const loginFailure = (error) => ({
      type: LOGIN_FAILURE,
      payload: error,
});

// Action créateur pour succès de déconnexion
export const logoutSuccess = () => ({
      type: LOGOUT_SUCCESS,
});

// Action de connexion
export const loginUser = (email, password) => {
      return async (dispatch) => {
            try {
                  const response = await fetch('http://localhost:3001/api/v1/user/login', {
                        method: 'POST',
                        headers: {
                              'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ email, password }),
                  });

                  if (!response.ok) {
                        const errorData = await response.json();
                        throw new Error(errorData.message || 'Utilisateur ou mot de passe incorrect');
                  }

                  const data = await response.json();

                  localStorage.setItem('token', data.body.token);
                  dispatch(loginSuccess(data));
                  return { type: 'LOGIN_SUCCESS', payload: data };
            } catch (error) {
                  dispatch(loginFailure(error.message));
                  return { type: 'LOGIN_FAILURE', error: error.message };
            }
      };
};

// Action de déconnexion
export const logoutUser = () => {
      return (dispatch) => {

            localStorage.removeItem('token');
            dispatch(logoutSuccess());
      };
};


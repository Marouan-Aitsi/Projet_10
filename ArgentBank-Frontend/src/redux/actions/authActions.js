export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const FETCH_PROFILE_SUCCESS = 'FETCH_PROFILE_SUCCESS';
export const FETCH_PROFILE_FAILURE = 'FETCH_PROFILE_FAILURE';
export const UPDATE_PROFILE_SUCCESS = 'UPDATE_PROFILE_SUCCESS';
export const UPDATE_PROFILE_FAILURE = 'UPDATE_PROFILE_FAILURE';

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
export const fetchProfileSuccess = (profile) => ({
      type: FETCH_PROFILE_SUCCESS,
      payload: profile,
});

// Action créateur pour échec de récupération du profil
export const fetchProfileFailure = (error) => ({
      type: FETCH_PROFILE_FAILURE,
      payload: error,
});

// Action créateur pour succès de mise à jour du profil
export const updateProfileSuccess = (profile) => ({
      type: UPDATE_PROFILE_SUCCESS,
      payload: profile,
});

// Action créateur pour échec de mise à jour du profil
export const updateProfileFailure = (error) => ({
      type: UPDATE_PROFILE_FAILURE,
      payload: error,
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

export const fetchUserProfile = () => {
      return async (dispatch) => {
            try {
                  const token = localStorage.getItem('token');
                  const response = await fetch('http://localhost:3001/api/v1/user/profile', {
                        method: 'GET',
                        headers: {
                              'Content-Type': 'application/json',
                              'Authorization': `Bearer ${token}`,
                        },
                  });

                  if (!response.ok) {
                        const errorData = await response.json();
                        throw new Error(errorData.message || 'Impossible de récupérer le profil utilisateur');
                  }

                  const data = await response.json();
                  dispatch(fetchProfileSuccess(data.body));
            } catch (error) {
                  dispatch(fetchProfileFailure(error.message));
            }
      };
};

// Action pour mettre à jour le profil utilisateur
export const updateUserProfile = (updatedUser) => {
      return async (dispatch) => {
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

                  if (!response.ok) {
                        const errorData = await response.json();
                        throw new Error(errorData.message || 'Impossible de mettre à jour le profil utilisateur');
                  }

                  const data = await response.json();
                  dispatch(updateProfileSuccess(data.body));
            } catch (error) {
                  dispatch(updateProfileFailure(error.message));
            }
      };
};
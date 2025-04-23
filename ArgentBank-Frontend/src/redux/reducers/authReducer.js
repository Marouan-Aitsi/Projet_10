const initialState = {
      isAuthenticated: false,
      token: null,
      error: null,
      profile: {
            userName: '',
            firstName: '',
            lastName: '',
      },
};

const authReducer = (state = initialState, action) => {
      switch (action.type) {
            case 'LOGIN_SUCCESS':
                  return {
                        ...state,
                        isAuthenticated: true,
                        token: action.payload.body.token,
                        error: null, // Réinitialise l'erreur en cas de succès
                  };
            case 'LOGOUT_SUCCESS':
                  return {
                        ...state,
                        isAuthenticated: false,
                        token: null,
                  };
            case 'LOGIN_FAILURE':
                  return {
                        ...state,
                        error: action.payload, // Utilise directement action.payload, car l'erreur est passée ici
                  };
            case 'FETCH_PROFILE_SUCCESS':
                  return {
                        ...state,
                        profile: {
                              userName: action.payload.userName,
                              firstName: action.payload.firstName,
                              lastName: action.payload.lastName,
                        },
                        error: null,
                  };
            case 'FETCH_PROFILE_FAILURE':
                  return {
                        ...state,
                        error: action.payload,
                  };
            case 'UPDATE_PROFILE_SUCCESS':
                  return {
                        ...state,
                        profile: {
                              ...state.profile,
                              userName: action.payload.userName,
                        },
                        error: null,
                  };
            case 'UPDATE_PROFILE_FAILURE':
                  return {
                        ...state,
                        error: action.payload,
                  };
            default:
                  return state;
      }
};

export default authReducer;


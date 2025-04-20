const initialState = {
      isAuthenticated: false,
      token: null,
      error: null,
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
            default:
                  return state;
      }
};

export default authReducer;


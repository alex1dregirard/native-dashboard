import { Alert } from 'react-native';

// Etat du store par défaut
const initialAuthState = {
    token: '',
    isAuthentified: false
};

export function auth(state = initialAuthState, action) {
  switch (action.type) {
      case 'LOGIN_USER_SUCCESS':
        //Alert.alert('graph success ' + action.payload.token );
        return Object.assign({}, state, {
            'token': action.payload.token,
            isAuthentified : true
        });
    default:
      return state
  }
}
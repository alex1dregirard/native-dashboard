import { Alert } from 'react-native';

export function loginSuccess(token) {
    return {
        type: 'LOGIN_USER_SUCCESS',
        payload: {
            token: token
        }
    }
}
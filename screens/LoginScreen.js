import React from 'react';

import { View, Button, StyleSheet, Platform } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { connect, Dispatch } from 'react-redux';

class LoginScreen extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        const { navigate } = this.props.navigation;
        return(
            <View style={styles.container}>
                <Button
                    onPress={() => navigate('MyApp')}
                    title="Login"
                />
            </View>        
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export function mapStateToProps(state) {
  return {
    //isAuthenticated : state.auth.isAuthenticated,
    //isAuthenticating : state.auth.isAuthenticating,
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    // TODO voir la bonne syntaxe pour ne pas passer le dispatch en paramètre
    //onLogin: () => dispatch(actions.login(dispatch)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
//export default LoginScreen;

import React from 'react';

import { View, Button, StyleSheet, Platform } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

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

export default LoginScreen;
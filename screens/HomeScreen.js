import React from 'react';

import { connect, Dispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/auth';

import { ScrollView, Text, StyleSheet, Platform, Button, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {ReactNativeAD, ADLoginView} from 'react-native-azure-ad'

import { Client } from 'msgraph-sdk-javascript';

const CLIENT_ID = 'f819651e-41d1-45d8-a863-f27aae264a53'

class HomeScreen extends React.Component {
    constructor(props){
        super(props);

        this.AzureADContext = {
            client_id : CLIENT_ID,
            // Optional
            redirectUrl : 'exp://172.20.10.3:19000/+/redirect',  
            // Optional
            authority_host : 'https://login.microsoftonline.com/common/oauth2/authorize',
            // Optional
            //tenant  : 'common',  
            // Optional
            //prompt : 'none',
            // This is required if client_id is a web application id
            // but not recommended doing this way.
            //client_secret : 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            resources : [
                'https://graph.microsoft.com',
                'https://outlook.office365.com',
                // ... more resources
            ]
        }        
    }

    render(){
        new ReactNativeAD({
            client_id: CLIENT_ID,
            resources: [
            'https://outlook.office365.com',
            'https://graph.microsoft.com'
            ]}) 
        
            return (
                <ScrollView style={styles.container}>
                    <ADLoginView
                        context={ReactNativeAD.getContext(CLIENT_ID)}
                        hideAfterLogin={true}
                        onSuccess={this.onLoginSuccess.bind(this)}/>
                    <Text>Home </Text>
                </ScrollView>
            )
    }

    onLoginSuccess(credentials) {
        var token = credentials['https://graph.microsoft.com'].access_token;
        this.props.actions.loginSuccess(token);
        /*
        var client = Client.init({
            debugLogging: false,
            authProvider: (done) => {
                done(null, token);
            }
        }); 

        client
            .api('/me')
            .get((err, res) => {
            if (!err) {
                Alert.alert('graph success ' + res.displayName );
                this.props.actions.loginSuccess();
            }else {
                Alert.alert('graph ko ' + err.message );
            }
        });
        */
        //console.log(credentials[https://outlook.office365.com].access_token)
            // use the access token ..
    }
}

HomeScreen.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ tintColor, focused }) => (
    <Ionicons
      name={focused ? 'ios-home' : 'ios-home-outline'}
      size={26}
      style={{ color: tintColor }}
    />
  ),
};

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 20 : 0,
  },  
});

//export default HomeScreen;

export function mapStateToProps(state) {
  return {
    //isAuthenticated : state.auth.isAuthenticated,
    //isAuthenticating : state.auth.isAuthenticating,
  };
}

const mapDispatchToProps = (dispatch) => ({
    actions : bindActionCreators(actionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
//export default LoginScreen;
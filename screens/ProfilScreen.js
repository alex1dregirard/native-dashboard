import React from 'react';

import { connect, Dispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/auth';

import { ScrollView, StyleSheet, Platform, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

class ProfilScreen extends React.Component {
    render(){
        return(
            <ScrollView style={styles.container}>
                {
                    this.props.isAuthentified ? <Text>Authentifié</Text> :  <Text>Non Authentifié</Text>
                }
            </ScrollView>          
        ); 
    }
}

ProfilScreen.navigationOptions = {
  tabBarLabel: 'People',
  tabBarIcon: ({ tintColor, focused }) => (
    <Ionicons
      name={focused ? 'ios-people' : 'ios-people-outline'}
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

export function mapStateToProps(state) {
  return {
    token : state.auth.token,
    isAuthentified : state.auth.isAuthentified
    //isAuthenticating : state.auth.isAuthenticating,
  };
}

const mapDispatchToProps = (dispatch) => ({
    //actions : bindActionCreators(actionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfilScreen);
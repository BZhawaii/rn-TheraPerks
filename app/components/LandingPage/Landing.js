import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  View
} from 'react-native';
import {
  Button,
  Text,
  ListItem
} from 'native-base';

export default class Landing extends Component {
  render() {
    const { navigate } = this.props.navigation;

    return (
       
        <View style={ styles.container }>
            <Image source={require('../../src/images/logo.jpg')} style= {styles.logo } />
            <View style={ styles.buttonList } >
              <ListItem noBorder>
                <Button primary onPress={ () => navigate('Login') }><Text>Consent</Text></Button>
              </ListItem>
              <ListItem noBorder>
                <Button primary onPress={ () => navigate('One') }><Text>Survey</Text></Button>
              </ListItem>
            </View>
        </View>
     
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    paddingTop: 200,
    height: 380,
    width: null,
  },
  buttonList: {
    paddingTop: 30,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Image,
  View
} from 'react-native';
import {
  Container, 
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
  CardItem,
  ListItem
} from 'native-base';
import { StackNavigator } from 'react-navigation';



export default class Landing extends Component {
  render() {
    return (
       
        <View style={ styles.container }>
            <Image source={require('../../src/images/logo.jpg')} style= {styles.logo } />
            <View style={ styles.buttonList } >
              <ListItem noBorder>
                <Button primary><Text>Login</Text></Button>
              </ListItem>
              <ListItem noBorder>
                <Button primary><Text>Register</Text></Button>
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
    height: 300,
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

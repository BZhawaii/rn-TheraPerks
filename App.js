'use strict';
import React, { Component } from 'react';
import {
  StyleSheet
} from 'react-native';
import {
  Container, 
  Header,
  Title,
  Left,
  Right,
  Body,
  Icon,
  Footer
} from 'native-base';
import { StackNavigator, TabNavigator } from 'react-navigation';

//TabNavigator screens
import AboutPage from './app/components/AboutPage/About';
import LoginPage from './app/components/Settings/Login';
import LandingPage from './app/components/LandingPage/Landing';

//StackNavigator screens
import One from './app/components/QuestionPages/One';
import TwoPage from './app/components/QuestionPages/Two';
import ThreePage from './app/components/QuestionPages/Three';
import PositiveStatement from './app/components/FollowUpPages/PositiveStatement';
import Finished from './app/components/FollowUpPages/Finished';


const Stack = StackNavigator({
  One: { screen: One },
  Two: { screen: TwoPage}, 
  Three: { screen: ThreePage},
  Login: {screen: LoginPage},
  PositiveStatement: {screen: PositiveStatement},
  Finished: {screen: Finished},
  Landing: {screen: LandingPage},
}, {
  initialRouteName: 'One',
})

const Tabs = TabNavigator({
  Landing: {
      screen: LandingPage,
      navigationOptions: {
          tabBarLabel: 'Home',
          tabBarIcon: ({ tintColor}) => <Icon name='home' size={35} color={tintColor} />           
      }
  },
  About: {
      screen: AboutPage,
      navigationOptions: {
          tabBarLabel: 'About',
          tabBarIcon: ({ tintColor}) => <Icon name='medkit' size={35} color={tintColor} />           
      }
  },
  Login: {
      screen: LoginPage,
      navigationOptions: {
          tabBarLabel: 'Consent',
          tabBarIcon: ({ tintColor}) => <Icon name='person' size={35} color={tintColor} />           
      }
  },
  One: {
      screen: Stack,
      navigationOptions: {
          tabBarLabel: 'Survey',
          tabBarIcon: ({ tintColor}) => <Icon name='settings' size={35} color={tintColor} />           
      }
  }
}, {
  order: ['Landing', 'About', 'Login', 'One']
})



export default class App extends Component {
  render() {
    return (
      <Container>
        <Header style={ styles.head } >
          <Left>
           
          </Left>

          <Body>
            <Title style={ styles.title }>TheraPerks</Title>
          </Body>
            
          <Right>

          </Right>
        </Header>

        
        <Footer style= { styles.tabs }>
          <Tabs />
        </Footer>
      

      </Container>

    );
  }
}

const styles = StyleSheet.create({
  head: {
    backgroundColor: 'blue',
    height: 70
  },
  title: {
    color: 'white'
  },
  mainBody: {
    flex: 1
  },
  tabs: {
    flex: 1,
  },
});

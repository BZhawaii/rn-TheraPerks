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
import About from './app/components/AboutPage/About';
import Tab from './app/config/router';

const Application = StackNavigator({
  About: { screen: About },
},{
    navigationOptions: {
      header: false,
    }
  });


export default class App extends Component {
  render() {
    return (
      <Container>
        <Header style={ styles.head } >
          <Left>
            <Button >
              <Icon name='bicycle' />
            </Button>
          </Left>

          <Body>
            <Title style={ styles.title }>TheraPerks</Title>
          </Body>
            
          <Right>

          </Right>
        </Header>

        <Content style={ styles.mainBody }>
           <Application />
           <Tab />

        </Content>
      </Container>

    );
  }
}

const styles = StyleSheet.create({
  head: {
    backgroundColor: 'blue'
  },
  title: {
    color: 'white'
  },
  mainBody: {
    flex: 1,
    alignSelf: 'stretch',
  },
});

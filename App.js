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
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>

          <Body>
            <Title style={ styles.title }>TheraPERKS</Title>
          </Body>
            
          <Right>

          </Right>
        </Header>

        <Content style={ styles.mainBody } padder>
            <Image source={require('./app/src/images/logo.jpg')} style= {styles.logo } />
            <View style={ styles.buttonList } >
              <ListItem noBorder>
                <Button primary><Text>Login</Text></Button>
              </ListItem>
              <ListItem noBorder>
                <Button primary><Text>Register</Text></Button>
              </ListItem>
            </View>
        </Content>

        <Tab />

        <Footer>
          <Button transparent>
            <Icon name='bicycle' />
          </Button>
          <Button transparent>
            <Icon name='home' />
          </Button>
          <Button transparent>
            <Icon name='settings' />
          </Button>
        </Footer>
      </Container>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  head: {
    backgroundColor: 'blue'
  },
  title: {
    color: 'white'
  },
  logo: {
    height: 300,
    width: null,
  },
  mainBody: {
    flex: 1,
    paddingTop: 40,
  },
  buttonList: {
    paddingTop: 30,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

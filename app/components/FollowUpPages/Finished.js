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

export default class Finished extends Component {

    static navigationOptions = {
        title: 'Completed Day?',
        headerTitleStyle: {
            fontWeight: 'bold',     
        }
    };


    render() {
        const { navigate } = this.props.navigation;
        return(
            <View style={ styles.container }>
            <Text>Have you completed your day?</Text>
            <View style={ styles.buttonList } >
              <ListItem noBorder>
                <Button primary onPress={ () => navigate('PositiveStatement') }><Text>Yes</Text></Button>
              </ListItem>
              <ListItem noBorder>
                <Button primary onPress={ () => navigate('One') }><Text>No</Text></Button>
              </ListItem>
            </View>
        </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 500,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingLeft: 30,
        paddingRight: 30,
        paddingBottom: 30,
        paddingTop: 50
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
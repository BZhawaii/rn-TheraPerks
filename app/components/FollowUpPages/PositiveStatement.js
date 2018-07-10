import React, { Component } from 'react';
import {
    Button,
    StyleSheet,
    View
} from 'react-native';
import {
    Container,
    Header,
    Content,
    List,
    ListItem,
    Text,
} from 'native-base';


const statements = [
    "Pausing to reflect is a vital step and will make a big difference!",
    "Focusing your breath calms the body and mind.",
    "Seeking new perspectives leads to personal growth.",
    "Be kind to yourself!",
    "A river of compassion washes away the anger.",
    "You have the qualities you need to be successful.",
    "Your potential to succeed is infinite.",
    "You can learn from your mistakes and make tomorrow even better.",
    "Never give up!",
    "Live in the moment and be proud of your accomplishments.",
    "Opportunities are around every corner.",
    "You have the power to change your thoughts.",
    "You are making a difference in this world.",
    "The path towards your goal is clear.",
    "You are willing to step outside my comfort zone to accomplish new goals.",
    "Your hard work is paying off!",
    "Today you are one step closer to your goal!",
    "Motivation catapults you towards your goal!",
    "You can make a difference!",
    "You are superior to negative thoughts and low actions."
]


export default class PositiveStatement extends Component {
    
    constructor(props) {
        super(props);

    }

    static navigationOptions = {
        title: 'Positive Statement!',
        headerTitleStyle: {
            fontWeight: 'bold',     
        }
    };


    getRandomStatement() {
        return statements[Math.floor(Math.random()*statements.length)];
    }

    render() {
        const { navigate } = this.props.navigation;
        const { dispatch } = this.props.navigation;

        return(
            <Container >
              
                <Content>
                    <Text style={ styles.container }>{this.getRandomStatement()}</Text>
                </Content>

                    <Button 
                    //primary onPress={ () => navigate('Landing') }
                    primary onPress={() => {dispatch({type:'Reset', actions: [{ type: 'Navigate', routeName: 'Landing'}], index: 0 })}}

                    title= "Done"
                    >
                    </Button>
            </Container>
        )
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        color: 'black',
        height: 500,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingLeft: 30,
        paddingRight: 30,
        paddingBottom: 30,
        paddingTop: 50
    },
    head: {
        backgroundColor: 'blue'
    },
    title: {
        color: 'blue',
        backgroundColor: "white",
        fontSize: 25,
        paddingLeft: 30,
    },
    mainBody: {
        flex: 1,
        alignSelf: 'stretch',
    },
  });


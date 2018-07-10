import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    KeyboardAvoidingView,
    TouchableOpacity,
    AsyncStorage,
    Button
} from 'react-native';

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        }
    }

    componentDidMount() {
        this._loadInitialState().done();
    }

    _loadInitialState = async () => {
        var value = await AsyncStorage.getItem('user');
        if(value != null) {
            this.props.navigation.navigate('Profile');
        }
    }

    render() {
        const { navigate } = this.props.navigation;
        return(
            <KeyboardAvoidingView behavior='padding' style={ styles.wrapper } >
                <View style={ styles.container } >
                    <Text style={ styles.header } >Consent Page</Text>

                    <Text style={ styles.text } >The purpose of this research is to examine the relationship between self-awareness and professionalism. Procedures to be followed: This application will prompt you about your mood and emotional responses. </Text>

                    <Text style={ styles.text } >Discomforts and Risks: There are no risks in participating in this research beyond those experienced in everyday life. </Text>

                    <Text style={ styles.text } >Benefits: This research may provide a better understanding of how self-awareness and emotions impact our interactions with others.</Text>

                    <Text style={ styles.text } >Voluntary Participation: Your decision to be in this research is voluntary. You will not be paid for this research.</Text>

                    <Button title="I Consent"
                    color="blue"
                    accessibilityLabel="Consent button to submit answer and move to next question"
                    onPress={ () => navigate('One') }
                    />
                    

                </View>
            </KeyboardAvoidingView>
        );
    }

    login = () =>{
        fetch('http://3452', {
            method: 'POSt',
            headers: {
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password,
            })
        })

        .then((reponse) => response.json())
        .then((res) => {
            if(res.success == true) {
                AsyncStorage.setItem('user', res.user);
                this.props.navigation.navigate('Profile');
            }
            else {
                alert(res.message);
            }
        })
        .done();
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        paddingLeft: 40,
        paddingRight: 40
    },
    header: {
        fontSize: 24,
        marginBottom: 30,
        color: 'black',
        fontWeight: 'bold'
    },
    textInput: {
        alignSelf: 'stretch',
        padding: 16,
        marginBottom: 20,
        backgroundColor: '#fff',
    },
    text: {
        marginBottom: 20
    },
    btn: {
        alignSelf: 'stretch',
        backgroundColor: 'blue',
        padding: 16,
        alignItems: 'center'
    },
    btnText: {
        color: 'white'
    }
});
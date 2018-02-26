import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TextInput,
    KeyboardAvoidingView,
    TouchableOpacity,
    AsyncStorage
} from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
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
        return(
            <KeyboardAvoidingView behavior='padding' style={ styles.wrapper } >
                <View style={ styles.container } >
                    <Text style={ styles.header } >Register</Text>

                    <TextInput style={ styles.textInput } placeholder='FirstName'
                        onChangeText={ (firstName) => this.setState({firstName}) }
                        underlineColorAndroid='transparent'
                    />

                      <TextInput style={ styles.textInput } placeholder='LastName'
                        onChangeText={ (lastName) => this.setState({lastName}) }
                        underlineColorAndroid='transparent'
                    />

                    <TouchableOpacity style={ styles.btn } onPress={ this.register } >
                        <Text>Register</Text>
                    </TouchableOpacity>

                </View>
            </KeyboardAvoidingView>
        );
    }

    register = () =>{
        fetch('http://3452', {
            method: 'POSt',
            headers: {
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                firstName: this.state.firstName,
                lastName: this.state.lastName,
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
        backgroundColor: '#2896d3',
        paddingLeft: 40,
        paddingRight: 40
    },
    header: {
        fontSize: 24,
        marginBottom: 60,
        color: '#fff',
        fontWeight: 'bold'
    },
    textInput: {
        alignSelf: 'stretch',
        padding: 16,
        marginBottom: 20,
        backgroundColor: '#fff',
    },
    btn: {
        alignSelf: 'stretch',
        backgroundColor: 'blue',
        padding: 16,
        alignItems: 'center'
    } 
});
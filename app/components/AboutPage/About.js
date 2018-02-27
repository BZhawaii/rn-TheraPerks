import React, { Component } from 'react';
import {
    Text,
    StyleSheet,
    View,
} from 'react-native';



export default class About extends Component {
    render() {
        return(
            <View>
                <Text style={ styles.title}>About TheraPerks</Text>
                <Text style={ styles.container}>
                    Being self-aware of your emotions is the key to increasing your Emotional Intelligence. Your emotions impact your interactions, decisions, reactions, and personal/professional relationships. By learning to recognize your emotions and response patterns you can develop new strategies, reduce stress, gain better control of your emotions and much more! This application is designed to build your self-awareness and provide new strategies to build your skills. It's time to be in charge of your emotions and create new responses so that you can build stronger relationships and enhance your creativity. You will increase your intelligence by critically thinking about your feelings and responses. You will learn to identify emotional triggers and develop new approaches to challenging relationships. By participating in this research, you will increase your emotional literacy and be part of groundbreaking strategies that will be used in a variety of professions. You are on your way to learning new and effective strategies to regulate your feelings and enhance the way you interact with others.
                </Text>
            </View>


        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2896d3',
        color: 'white',
        paddingTop: 20,
        paddingLeft: 30,
        paddingRight: 30,
        paddingBottom: 30
    },
    head: {
        backgroundColor: 'blue'
    },
    title: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        backgroundColor: "#2896d3",
        paddingTop: 20,
        fontSize: 25,
        paddingLeft: 30
    },
    mainBody: {
        flex: 1,
        alignSelf: 'stretch',
    },
  });

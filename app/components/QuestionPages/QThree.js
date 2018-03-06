import React, { Component } from 'react';
import {
    StyleSheet,
} from 'react-native';
import {
    Container,
    Header,
    Content,
    List,
    ListItem,
    Text
} from 'native-base';

export default class QThree extends Component {
    render() {
        return(
            <Container>
                <Header>What could I do different next time?</Header>
                <Content>
                    <List>
                        <ListItem>
                            <Text>Nothing Different</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Remain Calm</Text>
                        </ListItem>                        
                        <ListItem>
                            <Text>Talk to Someone</Text>
                        </ListItem>                        
                        <ListItem>
                            <Text>Take Deep Breaths</Text>
                        </ListItem>                        
                        <ListItem>
                            <Text>Reflect on Feelings</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Be Compasionate</Text>
                        </ListItem> 
                                         
                    </List>
                </Content>
               
            </Container>
        )
    }
}
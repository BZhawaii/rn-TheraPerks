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

export default class QTwo extends Component {
    render() {
        return(
            <Container>
                <Header>Emotional triggers:</Header>
                <Content>
                    <List>
                        <ListItem>
                            <Text>Challenged</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Safety</Text>
                        </ListItem>                        
                        <ListItem>
                            <Text>Understanding</Text>
                        </ListItem>                        
                        <ListItem>
                            <Text>Respect</Text>
                        </ListItem>                        
                        <ListItem>
                            <Text>Treated Fairly</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Disapproval</Text>
                        </ListItem> 
                        <ListItem>
                            <Text>None</Text>
                        </ListItem> 
                                         
                    </List>
                </Content>
               
            </Container>
        )
    }
}
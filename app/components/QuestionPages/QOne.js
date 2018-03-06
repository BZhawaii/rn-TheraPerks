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

export default class QOne extends Component {
    render() {
        return(
            <Container>
                <Header>
                    <Text>I am currently feeling:</Text>
                </Header>
                <Content>
                    <List>
                        <ListItem>
                            <Text>Very Happy</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Good</Text>
                        </ListItem>                        
                        <ListItem>
                            <Text>Happy</Text>
                        </ListItem>                        
                        <ListItem>
                            <Text>Thankful</Text>
                        </ListItem>                        
                        <ListItem>
                            <Text>Thoughtful</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Neutral</Text>
                        </ListItem> 
                        <ListItem>
                            <Text>Worried</Text>
                        </ListItem> 
                        <ListItem>
                            <Text>Stressed</Text>
                        </ListItem> 
                        <ListItem>
                            <Text>Angry</Text>
                        </ListItem> 
                        <ListItem>
                            <Text>Frustrated</Text>
                        </ListItem> 
                        <ListItem>
                            <Text>Disappointed</Text>
                        </ListItem>                    
                    </List>
                </Content>
               
            </Container>
        )
    }
}
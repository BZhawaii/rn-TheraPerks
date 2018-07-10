import React, { Component } from 'react';
import {
    Container,
    Header,
    Content,
    List,
    ListItem,
    Text
} from 'native-base';

export default class Three extends Component {
    static navigationOptions = {
        title: 'What could I do different?',
        headerTitleStyle: {
            fontWeight: 'bold',
            
        }
    };

    render() {
        const { navigate } = this.props.navigation;
        return(
            <Container>
                
                <Content>
                    <List>
                        <ListItem onPress={ () => navigate('Finished') }>
                            <Text>Nothing Different</Text>
                        </ListItem>
                        <ListItem onPress={ () => navigate('Finished') }>
                            <Text>Remain Calm</Text>
                        </ListItem>                        
                        <ListItem onPress={ () => navigate('Finished') }>
                            <Text>Talk to Someone</Text>
                        </ListItem>                        
                        <ListItem onPress={ () => navigate('Finished') }>
                            <Text>Take Deep Breaths</Text>
                        </ListItem>                        
                        <ListItem onPress={ () => navigate('Finished') }>
                            <Text>Reflect on Feelings</Text>
                        </ListItem>
                        <ListItem onPress={ () => navigate('Finished') }>
                            <Text>Be Compasionate</Text>
                        </ListItem> 
                                         
                    </List>
                </Content>
            </Container>
        )
    }
}
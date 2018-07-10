import React, { Component } from 'react';
import {
    StyleSheet,
    Image
} from 'react-native';
import {
    Container,
    Header,
    Content,
    List,
    ListItem,
    Text
} from 'native-base';

export default class Two extends Component {
    static navigationOptions = {
        title: 'Emotional Triggers:',
        headerTitleStyle: {
            fontWeight: 'bold',
        }
    };

    render() {
        const { navigate } = this.props.navigation;
        return(
            <Container>
               
                <Content>
                    <List style={ styles.container }> 
                        <ListItem style={ styles.block } onPress={ () => navigate('Three') }>
                            <Image style={ styles.imageItem } source={ require('../../src/images/emChallenged.png') } />
                            <Text>Challenged</Text>
                        </ListItem>
                        <ListItem style={ styles.block } onPress={ () => navigate('Three') }>
                            <Image style={ styles.imageItem } source={ require('../../src/images/emSafety.png') } />
                            <Text>Safety</Text>
                        </ListItem>                       
                        <ListItem style={ styles.block } onPress={ () => navigate('Three') }>
                            <Image style={ styles.imageItem } source={ require('../../src/images/emUnderstanding.png') } />
                            <Text>Understanding</Text>
                        </ListItem>                        
                        <ListItem style={ styles.block } onPress={ () => navigate('Three') }>
                            <Image style={ styles.imageItem } source={ require('../../src/images/emRespect.png') } />
                            <Text>Respect</Text>
                        </ListItem>                       
                        <ListItem style={ styles.block } onPress={ () => navigate('Three') }>
                            <Image style={ styles.imageItem } source={ require('../../src/images/emTreatedFairly.png') } />
                            <Text>Treated Fairly</Text>
                        </ListItem>
                        <ListItem style={ styles.block } onPress={ () => navigate('Three') }>
                            <Image style={ styles.imageItem } source={ require('../../src/images/emDisapproval.png') } />
                            <Text>Disapproval</Text>
                        </ListItem>
                        <ListItem style={ styles.block } onPress={ () => navigate('Three') }>
                            <Image style={ styles.imageItem } source={ require('../../src/images/emNone.png') } />
                            <Text>None</Text>
                        </ListItem>
                                         
                    </List>
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 30
    },
    block: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: 110,
        width: 130,
        paddingBottom: 20,
        paddingTop: 20,
        marginBottom: 10
    },
    imageList: {

    },
    imageItem: {
        height: 80,
        width: 95
    }
  });

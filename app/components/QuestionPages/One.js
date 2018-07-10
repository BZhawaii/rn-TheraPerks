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



export default class One extends Component {
    static navigationOptions = {
        title: 'I Am Currently Feeling:',
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
                        <ListItem style={ styles.block } onPress={ () => navigate('Two') }>
                            <Image style={ styles.imageItem } source={ require('../../src/images/110veryHappy.png') } />
                            <Text>Very Happy</Text>
                        </ListItem>
                        <ListItem style={ styles.block } onPress={ () => navigate('Two') }>
                            <Image style={ styles.imageItem } source={ require('../../src/images/100good.png') } />
                            <Text>Good</Text>
                        </ListItem>                        
                        <ListItem style={ styles.block } onPress={ () => navigate('Two') }>
                            <Image style={ styles.imageItem } source={ require('../../src/images/090happy.png') } />
                            <Text>Happy</Text>
                        </ListItem>                        
                        <ListItem style={ styles.block } onPress={ () => navigate('Two') }>
                            <Image style={ styles.imageItem } source={ require('../../src/images/080thankful.png') } />
                            <Text>Thankful</Text>
                        </ListItem>                        
                        <ListItem style={ styles.block } onPress={ () => navigate('Two') }>
                            <Image style={ styles.imageItem } source={ require('../../src/images/070thoughtful.png') } />
                            <Text>Thoughtful</Text>
                        </ListItem>
                        <ListItem style={ styles.block } onPress={ () => navigate('Two') }>
                            <Image style={ styles.imageItem } source={ require('../../src/images/060neutral.png') } />
                            <Text>Neutral</Text>
                        </ListItem> 
                        <ListItem style={ styles.block } onPress={ () => navigate('Two') }>
                            <Image style={ styles.imageItem } source={ require('../../src/images/050worried.png') } />
                            <Text>Worried</Text>
                        </ListItem>
                        <ListItem style={ styles.block } onPress={ () => navigate('Two') }>
                            <Image style={ styles.imageItem } source={ require('../../src/images/040stressed.png') } />
                            <Text>Stressed</Text>
                        </ListItem>
                        <ListItem style={ styles.block } onPress={ () => navigate('Two') }>
                            <Image style={ styles.imageItem } source={ require('../../src/images/030angry.png') } />
                            <Text>Angry</Text>
                        </ListItem>
                        <ListItem style={ styles.block } onPress={ () => navigate('Two') }>
                            <Image style={ styles.imageItem } source={ require('../../src/images/020frustrated.png') } />
                            <Text>Frustrated</Text>
                        </ListItem>
                        <ListItem style={ styles.block } onPress={ () => navigate('Two') }>
                            <Image style={ styles.imageItem } source={ require('../../src/images/010disappointed.png') } />
                            <Text>Disappointed</Text>
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
        paddingLeft: 30,
        paddingRight: 30,
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

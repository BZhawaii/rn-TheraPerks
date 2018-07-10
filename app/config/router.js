import React from 'react';
import { TabNavigator } from 'react-navigation';
import { Icon } from 'native-base';


//TabNavigator screens
import AboutPage from '../components/AboutPage/About';
import LoginPage from '../components/Settings/Login';
import RegisterPage from '../components/Settings/Register';
import LandingPage from '../components/LandingPage/Landing';

import One from '../components/QuestionPages/One';
import TwoPage from '../components/QuestionPages/Two';
import ThreePage from '../components/QuestionPages/Three';



export default Tabs = TabNavigator({
    Landing: {
        screen: LandingPage,
        navigationOptions: {
            tabBarLabel: 'Home',
            tabBarIcon: ({ tintColor}) => <Icon name='home' size={35} color={tintColor} />           
        }
    },
    About: {
        screen: AboutPage,
        navigationOptions: {
            tabBarLabel: 'About',
            tabBarIcon: ({ tintColor}) => <Icon name='medkit' size={35} color={tintColor} />           
        }
    },
    Login: {
        screen: LoginPage,
        navigationOptions: {
            tabBarLabel: 'Login',
            tabBarIcon: ({ tintColor}) => <Icon name='person' size={35} color={tintColor} />           
        }
    },
    One: {
        screen: One,
        navigationOptions: {
            tabBarLabel: 'QOne',
            tabBarIcon: ({ tintColor}) => <Icon name='settings' size={35} color={tintColor} />           
        }
    },
})

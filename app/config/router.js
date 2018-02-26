import React from 'react';
import { TabNavigator } from 'react-navigation';
import { Icon } from 'native-base';

import AboutPage from '../components/AboutPage/About';
import LoginPage from '../components/Settings/Login';
import RegisterPage from '../components/Settings/Register';

export default Tabs = TabNavigator({
    About: {
        screen: AboutPage,
        navigationOptions: {
            tabBarLabel: 'About Page',
            tabBarIcon: ({ tintColor}) => <Icon name='list' size={35} color={tintColor} />           
        }
    },
    Login: {
        screen: LoginPage,
        navigationOptions: {
            tabBarLabel: 'Login Page',
            tabBarIcon: ({ tintColor}) => <Icon name='list' size={35} color={tintColor} />           
        }
    },
    Settings: {
        screen: RegisterPage,
        navigationOptions: {
            tabBarLabel: 'Register Page',
            tabBarIcon: ({ tintColor}) => <Icon name='list' size={35} color={tintColor} />           
        }
    }
})

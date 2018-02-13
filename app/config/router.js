import React from 'react';
import { TabNavigator } from 'react-navigation';
import { Icon } from 'native-base';

import AboutPage from '../screens/AboutPage/About';
import LandingPage from '../screens/LandingPage/Landing';
import RegisterPage from '../screens/RegisterPage/Register';

export const Tabs = TabNavigator({
    About: {
        screen: AboutPage,
        navigationOptions: {
            tabBar: {
                label: 'About',
                icon: ({ tintColor}) => <Icon name='list' size={35} color={tintColor} />
            }
        }
    },
    Home: {
        screen: LandingPage,
        navigationOptions: {
            tabBar: {
                label: 'About',
                icon: ({ tintColor}) => <Icon name='list' size={35} color={tintColor} />
            }
        }
    },
    Settings: {
        screen: RegisterPage,
        navigationOptions: {
            tabBar: {
                label: 'About',
                icon: ({ tintColor}) => <Icon name='list' size={35} color={tintColor} />
            }
        }
    }
})
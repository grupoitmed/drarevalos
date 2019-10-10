import React from 'react';

import {
    createStackNavigator,
    createAppContainer,
    createBottomTabNavigator
} from "react-navigation";

import ClinicaScreen from "../screen/Clinica";
import ContactScreen from "../screen/Contact";
import MyAccountScreen from "../screen/MyAccount";

const ClinicaScreenStack  = createStackNavigator({
    Clinica:{
        screen:ClinicaScreen,
        navigationOptions: ({navigation})=>({
            title:"Clinica"
        })
    }
});

const ContactScreenScreenStack  = createStackNavigator({
    Contact:{
        screen:ContactScreen,
        navigationOptions: ({navigation})=>({
            title:"Contact"
        })
    }
});
const MyAcconutScreenScreenStack  = createStackNavigator({
    MyAccount:{
        screen:MyAccountScreen,
        navigationOptions: ({navigation})=>({
            title:"Mi Expediente"
        })
    }
});

const RootStack = createBottomTabNavigator(
    {
        'Clinica':{
            screen:ClinicaScreenStack
        },
        'Contacto':{
            screen:ContactScreenScreenStack
        },
        'Mi Expedinte':{
            screen:MyAcconutScreenScreenStack
        }
    }
);

export default createAppContainer(RootStack);
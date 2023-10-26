import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {StatusBar} from 'react-native';
import Main from './pages/main';

const Stack = createStackNavigator();

export default function Routes(){
    return(
        <NavigationContainer>
            <StatusBar backgroundColor={"#38A69D"} barStyle={"light-content"}>
                <Stack.Navigator>
                    <Stack.Screen
                        name="Aqui é o nome que aparece no HEADER"
                        component={Main}
                        options={{headerShown: false}}
                    />
                </Stack.Navigator>
            </StatusBar>
        </NavigationContainer>
    )
}
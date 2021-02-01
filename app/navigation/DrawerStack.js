import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import mdrawer from "../screens/mdrawer";


const Stack = createStackNavigator();

export default function DrawerStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen 
            name = "MDRAWER"
            component = {mdrawer}
            options = {{title:"Menu"}}
            />
        </Stack.Navigator>
    );
}
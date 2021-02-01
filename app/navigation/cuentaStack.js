import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import cuenta from "../screens/Account/cuenta";
import Login from "../screens/Account/Login";
import Register from "../screens/Account/Register"


const Stack = createStackNavigator();

export default function loginStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen 
            name = "cuenta"
            component = {cuenta}
            options = {{title:"Mi cuenta"}}
            />

            <Stack.Screen 
            name= "login"
            component= {Login}
            options= {{title:"Iniciar Sesion"}}
            />

            <Stack.Screen 
            name = "register"
            component ={Register}
            options = {{title:"Registro"}}
            />
        </Stack.Navigator>
    );
}
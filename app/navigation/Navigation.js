import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Icon} from "react-native-elements";

import HomeStack from "./HomeStack";
import cuentaStack from "./cuentaStack";
import DrawerStack from "./DrawerStack";


const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator 
                initialRouteName="home"
                tabBarOptions = {{
                    inactiveTintColor:"#010C13",
                    activeTintColor:"#3E8BDA"
                }}
                screenOptions={({route}) => ({
                    tabBarIcon: ({color}) => screenOptions(route, color),
                })}
            >
                <Tab.Screen 
                    name="home" 
                    component={HomeStack}
                    options={{title:"Inicio"}}
                    />
                <Tab.Screen 
                    name="cuenta" 
                    component={cuentaStack}
                    options={{title:"Cuenta"}} />
               <Tab.Screen
                    name="msdrawer" 
                    component={DrawerStack} 
               options={{title:"Menu"}} />
               </Tab.Navigator>
        </NavigationContainer>
    );
}

function screenOptions(route, color){
    let iconName;

    switch (route.name) {
        case "home":
            iconName = "home-circle"
            break;
            case "cuenta":
                iconName = "account-circle"
                break;
                    case "msdrawer":
                        iconName = "menu"
                        break;
        default:
            break;
    }
    return(
        <Icon type= "material-community" name={iconName} size={22} color={color} />
    )

}

import React from "react";
import {View, Text, Button} from "react-native";
import * as firebase from "firebase";


export default function Userloged(){
    return(
        <View>
            <Text>Sesion Iniciada... </Text>
            {/* User logged */}
            <Button title="Cerrar sesion" onPress={()=> firebase.auth().signOut()} />
        </View>
    )
}
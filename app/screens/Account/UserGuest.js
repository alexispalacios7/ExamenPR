import React from "react";
import {StyleSheet, View, ScrollView, Text, Image} from "react-native";
import {Button} from "react-native-elements";
import  {useNavigation} from "@react-navigation/native";

export default function UserGuest(){
    const navigation = useNavigation();
    return(
        <ScrollView centerContent={true}>
            <Image 
                source={require("../../img/adwords.png")}
                resizeMode = "contain"
                style={styles.logo}
            />
            <Text style = {styles.title}>Inicia Sesion para mirar otras funciones</Text>
            <View>
                <Button
                    title="Inicia Sesion" 
                    containerStyle={styles.btnContainerLogin}
                    onPress={() => navigation.navigate("login")}
                />
                    
            </View>
        </ScrollView>
    
    );
}

const styles = StyleSheet.create({
    logo: {
        width:"100%",
        height: 150,
        marginTop: 120,
        marginBottom: 40

    },
    
    formContainer:{
        flex: 10,
        alignItems:"center",
        justifyContent: "center",
        marginTop: 30

    },
    
    title: {
        fontWeight: "bold",
        fontSize: 19,
        marginTop: 60,
        marginBottom: 5,
        textAlign:"center"

    },
    btnContainerLogin:{
        marginTop: 20,
        marginLeft: 60,
        width: "70%"
    },


});
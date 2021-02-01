import React, {useRef} from "react";
import {StyleSheet, View, ScrollView, Text, Image} from "react-native";
import {useNavigation} from "@react-navigation/native";
import Toast from "react-native-easy-toast";
import LoginForm from "../../components/Account/LoginForm"



export default function Login(){
    const toastRef = useRef();    
    return(
        <ScrollView>
           <Image 
           source={require("../../img/user.png")}
           resizeMode="contain"
           style={styles.logo}
           />
           <View style={styles.viewContainer}>
            <LoginForm toastRef={toastRef} />

            </View>
            <View>
               <CreateAccount />
           </View>
           <Toast ref={toastRef} position="center" opacity={0.9} />
        </ScrollView>
    );
}

function CreateAccount(){
    const navigation = useNavigation();
    return(
        <View style={styles.viewCont}>
        <Text style={styles.textRegister}> 
            No tienes una cuenta?{"  "}
            <Text 
            onPress ={() => navigation.navigate("register")}
            style={styles.btnRegister}>
                Registrate
            </Text>
        </Text>
        </View>
    )

}

const styles = StyleSheet.create({
    logo: {
        width:"100%",
        height: 180,
        marginTop:50 
    },
    viewContainer:{
        marginRight: 40,
        marginLeft: 40,

    },
    textRegister:{
        marginTop:  15,
        marginLeft: 10,
        marginRight: 10,
    },
    btnRegister:{
        color:"#1E85E1",
        fontWeight: "bold"
        
    },
    
    formContainer:{
        flex: 10,
        alignItems:"center",
        justifyContent: "center",
        marginTop: 30

    },

    inputForm: {
        width: "70%",
        marginLeft: 60,
        
    },
    btnContainerLogin:{
        marginTop: 20,
        marginLeft: 60,
        width: "70%"
    },
    viewCont:{
        flex:1,
        alignItems:"center",
    }
});
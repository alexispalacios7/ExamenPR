import React, {useRef} from "react";
import {ScrollView ,StyleSheet, View, Image} from "react-native";
import Toast from "react-native-easy-toast";
import RegisterForm from "../../components/Account/RegisterForm";


export default function Register(){
    const toastRef = useRef();
    return(
        <View>
            <ScrollView>
            <View>
                <Image 
                source={require("../../img/user2.png")}
                resizeMode="contain"
                style={styles.logo}
                />
                <View style={styles.viewForm}>
                    <RegisterForm toastRef={toastRef} />
                </View>
                <Toast ref={toastRef} position="center" opacity={0.9}/>
            </View>
            </ScrollView>
        </View>  
    );
}

const styles = StyleSheet.create({
    logo:{
        width:"100%",
        height: 180,
        marginTop:50 
    },

    viewForm:{
        marginRight: 40,
        marginLeft: 40,
    }

});
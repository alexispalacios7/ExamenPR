import React, {useState} from "react";
import {StyleSheet, View} from "react-native";
import {Input, Button, Icon} from "react-native-elements";
import {isEmpty} from "lodash";
import {useNavigation} from "@react-navigation/native";
import * as firebase from "firebase";
import {validateEmail} from "../../utils/validations";
import Loading from "../../components/Account/Loading";


export default function LoginForm(props){
    const {toastRef}=props;
    const [showPassword, setshowPassword] = useState(false);
    const [formData, setformData] = useState(defaultFormValue());
    const [loading, setloading] = useState(false); 
    const navigation = useNavigation();

    const onChange = (e, type) => {
        setformData({...formData,[type]: e.nativeEvent.text})

    }
    const onSubmit = () => {
        if ( isEmpty(formData.email) || isEmpty(formData.password)){
            toastRef.current.show("Todos los campos son obligatorios");
        }   else if(!validateEmail(formData.email)){
            toastRef.current.show("El Email es incorrecto")
        } else{
            setloading(true);
           firebase
            .auth()
            .signInWithEmailAndPassword(formData.email, formData.password)
            .then(()=>{
                setloading(false);
                navigation.navigate("cuenta");
            })
            .catch(() => {
                setloading(false);
                toastRef.current.show("Email o Contraseña incorrecta")
            })
        }
    }; 
    return(
        <View style={StyleSheet.formContainer}>
            <Input 
                placeholder="Correo electronico"
                containerStyle={styles.inputForm}
                rightIcon={{type: 'material-community', name:'at'}}
                onChange={(e)=> onChange(e, "email")}
            />
            <Input 
                placeholder="Contraseña"
                containerStyle={styles.inputForm}
                password={true}
                secureTextEntry={showPassword ? false :  true}
                onChange={(e)=> onChange(e, "password")}
                rightIcon={
                    <Icon 
                        type='material-community'
                        name={showPassword ? "eye-off-outline" : "eye-outline"}
                        onPress={()=> setshowPassword(!showPassword)}
                    />
                }
                
            />
            <Button 
                title="Iniciar Sesion"
                containerStyle={styles.btnContainerLogin}
                buttonStyle={styles.btnLogin}
                onPress={onSubmit}
            />
            <Loading isVisible={loading} text="Iniciando Sesion" />
        </View>
    );
}

function defaultFormValue(){
    return{
        email:"",
        password:""
    }
}

const styles=StyleSheet.create({
    formContainer:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginTop: "30"
    },
    inputForm:{
        width:"100%",
        marginTop: 20

    },

    btnContainerLogin:{
        marginTop: 20,
        alignItems: "center",
        width: "90%",
        marginLeft: 10,


    },
    btnLogin:{
        backgroundColor:"#1E85E1"
    }
});
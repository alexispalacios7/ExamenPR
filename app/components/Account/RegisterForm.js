import React, {useState} from "react";
import {StyleSheet, View} from "react-native";
import {Input, Icon, Button} from "react-native-elements";
import Loading from "../Account/Loading";
import {validateEmail} from "../../utils/validations";
import { size, isEmpty } from "lodash";
import * as firebase from "firebase";
import { useNavigation} from "@react-navigation/native";

 
export default function RegisterForm(props){
    const { toastRef } = props;
    const [showPassword, setShowPassword] = useState(false) ;
    const [showRepeatPassword, setshowRepeatPassword] = useState(false);
    const [formData, setFormData] = useState(defaultFormValue());
    const [loading, setLoading] = useState(false);
    const navigation=useNavigation();

    const onSubmit = () => {
        if(isEmpty(formData.email) || 
        isEmpty(formData.password) || 
        isEmpty(formData.repeatPassword)
        ){
           // console.log("todos los campos son obligatorios");
            toastRef.current.show("Todos son obligatorios");
        } else if (!validateEmail(formData.email)){
            toastRef.current.show("El email no es valido");
        } else if(formData.password!== formData.repeatPassword) {
            toastRef.current.show("las contraseñas tiene que ser iguales");
        }else if(size(formData.password)<6){
            toastRef.current.show("la contraseña debe ser mayor a 6 caracteres");
        }
        else{
            setLoading(true);
            firebase
            .auth()
            .createUserWithEmailAndPassword(formData.email, formData.password)
            .then((response)=>{
                navigation.navigate("cuenta");
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
                toastRef.current.show("El correo ya esta registrado, intente con otro.");
            });
        }
    };

     const  onChange = (e, type) => {
    //     setFormData({ [type] : e.nativeEvent.text});
            setFormData({ ...formData, [type] : e.nativeEvent.text });

    }
    return(
        
        <View>
            <View style={styles.formContainer}>
                <Input 
                placeholder="Correo electronico"
                containerStyle={styles.inputForms}
                rightIcon={{type: 'material-community', name:'at'}}
                onChange={e => onChange(e, "email")}

                />
                <Input 
                placeholder="Password"
                containerStyle={styles.inputForms}
                onChange={e => onChange(e, "password")}
                secureTextEntry={showPassword ? false : true}
                rightIcon={
                    <Icon 
                    type='material-community'
                    name={showPassword ? "eye-off-outline" : "eye-outline"}
                    onPress={() => setShowPassword(!showPassword)}
                    />
                }

                />

                <Input 
                placeholder="Repetir Password"
                containerStyle={styles.inputForms}
                onChange={e => onChange(e, "repeatPassword")}
                secureTextEntry={showRepeatPassword ? false : true}
                rightIcon={
                    <Icon 
                    type='material-community'
                    name={showRepeatPassword ? "eye-off-outline" : "eye-outline"}
                    onPress={() => setshowRepeatPassword(!showRepeatPassword)}
                    />
                }
                />
                <Button
                    title="Registrarse"
                    containerStyle={styles.btnContainerRegister} 
                    buttonStyle={styles.btnRegister}
                    onPress={onSubmit}
                />
                <Loading isVisible={loading} text="Creando cuenta"/>
            </View>
        </View>
    );
}

function defaultFormValue(){
    return{
        email: "",
        password: "",
        repeatPassword: "",
    };
}

const styles = StyleSheet.create({
    formContainer:{
        //flex: 1,
        alignItems: "center",
        marginTop: 30,
        height: '100%', // 70% of height device screen
        width: '100%'
    },
    inputForms:{
        width: "100%",
        marginTop:10,

    },
    btnContainerRegister:{
        marginTop: 20,
        width: "90%"
    },
    btnRegister:{
        backgroundColor:"#1E85E1"
    }

});
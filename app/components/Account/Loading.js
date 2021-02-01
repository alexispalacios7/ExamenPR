import React from "react";
import { StyleSheet, View, Text, ActivityIndicator } from "react-native";
import { Overlay } from "react-native-elements";

 export default function Loading(props) {
     const {isVisible, text} = props;
     return(
         <Overlay isVisible={isVisible}
         windowsBackgroundColor ="rgba(0,0,0,0.5)"
         overlayBackgroundColor = "transparent"
         overlayStyle = {Styles.Overlay}
         >
  
             <View style={Styles.view}>
                <ActivityIndicator size = "large" color = "#1E85E1"/>
                {text && <Text style={Styles.text}>{text}</Text>}
             </View>
         </Overlay>
     )
 }

 const Styles = StyleSheet.create({
     Overlay: {
         height: 100,
         width : 200,
         backgroundColor: "white",
         borderColor: "#00a680",
         borderWidth : 2,
         borderRadius: 10,
     },
     view:{
         flex:1,
         alignItems:"center",
         justifyContent: "center"
     },
     text:{
         color:"#1E85E1",
         textTransform:"uppercase",
         marginTop:10
     }
 });
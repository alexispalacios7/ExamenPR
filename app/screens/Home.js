import React from "react";
import{StyleSheet,View, Text, Image} from "react-native";


export default function Home(){
    return(
        
    <View>
        <Image 
                source={require("../img/adwords.png")}
                resizeMode = "contain"
                style={styles.logo}
            />
        <Text style={styles.title} h1></Text>
        
    </View>
    );
    
}

const styles = StyleSheet.create({
    logo: {
        width:"100%",
        height: 150,
        marginTop: 120,

    },
    title: {
        marginTop: 60,
        fontWeight: "bold",
        fontSize: 19,
        marginBottom: 10,
        textAlign:"center"
    }
})
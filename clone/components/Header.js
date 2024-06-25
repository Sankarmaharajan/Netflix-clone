import { StatusBar} from "expo-status-bar";
import { Text , View, StyleSheet } from "react-native";

export default function Header(){
    return(
        <Text style = {style.header}>Welcome to Drive Connect!</Text>
    );
}

const style = StyleSheet.create({
    header:{
        fontSize : 30,
        alignContent : 'center',
        backgroundColor : 'mistyrose'
    }
})
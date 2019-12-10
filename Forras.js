import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  
} from "react-native";
import Font from "expo-font"



import { Icon, Button, Container, Header, Content, Left, } from 'native-base'



export class Forras extends React.Component {

  
  render() {
    return(
     
      <ImageBackground source={{uri: 'https://i.pinimg.com/originals/13/b4/44/13b444ee87d79f6ce13c9198fe5201c7.jpg'}}
        style={{ fontFamily: "Roboto-Bold", flex: 1, width: '100%', height:'100%'}} >

    <View style={{flex:1,justifyContent: "center",alignItems: "center"}} >
    <Text style={{textAlignVertical: "center",textAlign: "center", fontFamily: "Roboto-Bold" }}>
    A receptek a Nosalty.hu-rol származnak!
    </Text>
    </View>
  </ImageBackground>
    );
  }
}


export class App extends React.Component {
  componentDidMount() {
    Font.loadAsync({
      'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
    });
  }

}
export default Forras;



import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground
} from "react-native";




import { Icon, Button, Container, Header, Content, Left, } from 'native-base'



export class Kezdokep extends React.Component {

  
  render() {
    return(
     
      <ImageBackground source={{uri: 'https://i.pinimg.com/originals/13/b4/44/13b444ee87d79f6ce13c9198fe5201c7.jpg'}}
        style={{flex: 1, width: '100%', height:'100%'}} >

    <View style={{flex:1,justifyContent: "center",alignItems: "center"}} >
    <Text style={{textAlignVertical: "center",textAlign: "center",}}>
    RECEPTEK
    </Text>
    </View>
  </ImageBackground>
    );
  }
}


export default Kezdokep;



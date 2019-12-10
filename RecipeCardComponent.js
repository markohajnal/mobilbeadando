import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import RecipeCardLabelComponent from './RecipeCardLabelComponent';

export default class RecipeCardComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { numColumns: 0 };
  }

  render() {
    
    return (
      <TouchableOpacity onPress={this.props.onPress}>
      <ImageBackground source={{uri: 'https://i.pinimg.com/originals/13/b4/44/13b444ee87d79f6ce13c9198fe5201c7.jpg'}}>
        </ImageBackground>
        <View style={{ flex: 1, flexDirection: "column" }}>
        
          <View style={styles.recipeBox}>
          
            <Image source={{ uri: this.props.item.image }} style={{ width: 100, height: 100, margin: 10 }}></Image>
            <View style={{ flex: 1, flexDirection: "column", margin: 20 }}>
              <Text style={styles.recipeTitle}>{this.props.item.title}</Text>
              <View style={styles.badgeList}>

                

              </View>
            </View>
          </View>
          
          <View style={{ height: 2, backgroundColor: '#f4c4f3' }}></View>
        
        </View>
        
      </TouchableOpacity>

      
    );
  }
}

const styles = StyleSheet.create({
  recipeBox: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fc67fa",
    alignItems: "center"
  },
  badgeList: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-end",
  },
  recipeTitle: {
    marginBottom: 10,
    fontWeight: "bold",
    fontSize: 14,
    fontFamily:"Roboto-Italic",
    color: "black",
  },
});
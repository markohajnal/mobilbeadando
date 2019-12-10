import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image, FlatList, ScrollView, Dimensions, } from 'react-native';

export default class RecipeDetailsComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigation } = this.props;
    const recipe = navigation.getParam('recipe', {});

    return (
      <ScrollView contentContainerStyle={styles.detailsContainer}>
        <Image source={{ uri: recipe.image }} style={styles.image}></Image>
        <Text>{recipe.title}</Text>

        {recipe.ingredients.map((ingredient, index) => {
          return (
            <Text key={index}>{ingredient}</Text>
          )
        })}

        {recipe.directions.map((direction, index) => {
          return (
            <Text key={index}>{direction}</Text>
          )
        })}

      </ScrollView>
    );
  }
}
/*recept hattere 
*/
const styles = StyleSheet.create({
  detailsContainer: {
    flexGrow: 1,
    flexBasis: "100%",
    justifyContent: "flex-start",
    backgroundColor: '#f4c4f3',
    flexDirection: "column",
  },
    
  image: {
    flex: 1,
    width: 250,
    height: 250,
    resizeMode: "contain",
    alignContent: "center",
    
  },
});

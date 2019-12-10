import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Alert,
  FlatList,
  SectionList,
  ListItem,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import RecipeCardComponent from './RecipeCardComponent';
import MapView from 'react-native-maps';
import recipes from './recipes.json';
import { StackActions, NavigationActions } from 'react-navigation';
import Leiras from './Leiras';
import createDrawerNavigator from 'react-navigation';
import StackNavigator from 'react-navigation';
import Forras from './Forras';
import RecipeDetailsComponent from './RecipeDetailsComponent';
import { DrawerNavigator } from 'react-navigation';
import Kezdokep from './Kezdokep';
import Font from 'expo-font';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={recipes.recipes}
          renderItem={({ item }) => (
            
            <RecipeCardComponent
              style={styles.item}
              item={item}
              onPress={() =>
                this.props.navigation.navigate('Details', {
                  recipe: item,
                })
              }
            />
          )}
          keyExtractor={(item, index) => item.id}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // paddingTop: 22,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

export default DrawerNavigator(
  {
    Receptek: {
      screen: App,
    },
    Leiras: {
      screen: Leiras,
    },
    Kezdokep: {
      screen: Kezdokep,
    },
    Forras: {
      screen: Forras,
    },
    Details: RecipeDetailsComponent,
  },

  {
    initialRouteName: 'Kezdokep',
  }
);

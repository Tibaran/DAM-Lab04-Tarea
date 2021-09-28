import React, {Component} from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import gamesList from "./app/components/gamesList/gamesList";
import gameDetail from "./app/components/gameDetail/gameDetail";
import { 
  Text, 
  View,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert
} from "react-native";

const Stack = createNativeStackNavigator();
export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      name:'',
      password: '',
    }
  }

  render(){
    return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Lista">
        <Stack.Screen name="Lista" component={gamesList} options={{ title: 'Videojuegos' }}/>
        <Stack.Screen name="Detalles" component={gameDetail} />
      </Stack.Navigator>
    </NavigationContainer>);
  }
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  text: {
    alignItems: 'center',
    padding: 10,
  },
  button: {
    top: 10,
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom: 20,
  },
  rexImages: {
    width: 250,
    height: 250,
  }
});
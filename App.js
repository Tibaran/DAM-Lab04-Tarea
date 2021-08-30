import React, {Component} from "react";
import { 
  StyleSheet, 
  TouchableOpacity, 
  Text, 
  View,
  TextInput, 
  Image
} from "react-native";

export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      textValue:'',
      count: 0,
      name: '',
      password: '',
      login: ''
    }
  }

  changeTextInput = text =>{
    this.setState({textValue: text});
  };
  changeNameInput = text =>{
    this.setState({name: text});
  };
  changePassInput = text =>{
    this.setState({password: text});
  };

  onPress = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  onLogin = () =>{
    this.setState({
      login: 'Usuario: '+this.state.name +' Contraseña: '+this.state.password,
    });
  };

  render(){
    return (
      <View style={styles.container}>
        <View style={styles.text}>
          <Image source={require('./img/logo-de-facebook.png')}/>
        </View>
        <Text>Usuario:</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={text => this.changeNameInput(text)}
          value={this.state.name}
        />
        <Text>Contraseña:</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={text => this.changePassInput(text)}
          value={this.state.password}
          secureTextEntry={true}
        />

        <TouchableOpacity style={styles.button} onPress={this.onLogin}>
          <Text> Iniciar Sesion </Text>
        </TouchableOpacity>
        <View style={[styles.countContainer]}>
          <Text style={[styles.countText]}>
            {this.state.login}
          </Text>
        </View>
      </View>
    );
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
  },
  countContainer: {
    alignItems: 'center',
    padding: 10,
  },
  countText: {
    color: '#FF00FF',
  },
});
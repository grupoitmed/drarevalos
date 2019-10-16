import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button,Image } from 'react-native-elements';
import t from "tcomb-form-native";
const Form = t.form.Form;
import { LoginStruct,LoginOptions } from "./app/screen/Login";
import Navegacion from "./app/navigation/App_navegacion";
export default class App extends React.Component {
  constructor (props){
    super(props);
    this.state = {
      formValue : {
        user:"",
        password:"",
      },
      login:false
    };
  }

  onChange = formValue => {
    
    this.setState({
      formValue
    });
    console.log(this.state);
  } 

  
  sendFrom = () => {
    console.log(this.state);
    this.setState({
      login:true
    });
  } 

  render(){
    if(this.state.login){
      return ( 
        <View style={styles.container}>
            <Navegacion />
        </View>
      );
    }else{
        const { formValue }  = this.state;
        const logo = require('./assets/images/logo.png');
        return ( 
          
          <View style={styles.container}>
              <View style={styles.containerImage}>
              <Image
                  source={logo}
                  style={styles.logo}
                />
            </View>
              <Form 
                ref="formValue"
                type={LoginStruct}
                options={LoginOptions}
                value={formValue}
                onChange={v => this.onChange(v)}
              />
              <Button buttonStyle={styles.button} title="Entrar" onPress={this.sendFrom.bind(this)} />
          </View>
        );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  containerImage:{
    alignItems: 'center'
  },
  button:{
    margin:20,
  },
  logo: {
      width: 250,
      height: 250
  },
});

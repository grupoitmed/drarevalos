import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button,Image } from 'react-native-elements';
import t from "tcomb-form-native";
const Form = t.form.Form;
import { LoginStruct,LoginOptions } from "./app/screen/Login";

export default class App extends React.Component {
  constructor (){
    super();

    this.state = {
      formValue : {
        user:"",
        password:"",
      }
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
  } 

  render(){
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
          <Button buttonStyle={styles.button} title="Login" onPress={this.sendFrom.bind(this)} />
      </View>
    );
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

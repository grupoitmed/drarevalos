import React from 'react';
import { Text,View, StyleSheet } from 'react-native';

export default class MyAccount extends React.Component  {
    render (){
        return (
            <View style={styles.container}>
                <Text>MyAccount</Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});

import React from 'react';
import { Text,View, StyleSheet } from 'react-native';

export default class Contact extends React.Component  {
    render (){
        return (
            <View style={styles.container}>
                <Text>Contact</Text>
            </View>
        );
    }
}

LinksScreen.navigationOptions = {
  title: 'Contact',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});

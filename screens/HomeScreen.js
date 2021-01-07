import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';
import { useTheme } from '@react-navigation/native';

const HomeScreen = ({navigation}) => {

  const { colors } = useTheme();

  const theme = useTheme();
  
    return (
      
      <View >
        <Text style={{marginBottom: 10, marginTop: 20 }} h2>

            Timberland shoes

        </Text>

        <Text style={styles.price} h4>

          $ 450

        </Text>

        <Text h6 style={styles.description}>
          added 1d ago

        </Text>
        <Button
          type="clear"
          title='Buy now'
          onPress={() => this.props.navigation.navigate('Details')} 
        />
      </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  name: {
    color: '#5a647d',
    fontWeight: 'bold',
    fontSize: 30
},
price: {
    fontWeight: 'bold',
    marginBottom: 10
},
description: {
    fontSize: 10,
    color: '#c1c4cd'
},
});

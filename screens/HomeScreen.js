import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar ,SafeAreaView, ScrollView} from 'react-native';
import { useTheme } from '@react-navigation/native';
import { List, Searchbar } from 'react-native-paper';
import MyComponent from './products'; 

const HomeScreen = ({navigation}) => {

  const { colors } = useTheme();

  const theme = useTheme();
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);
    return (
      <SafeAreaView >
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false} scrollEventThrottle={16}>
      <View >
        <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}/>
        
      </View>
      <View>
      <MyComponent/>
      </View>
      </ScrollView>
      </SafeAreaView>
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
scrollView: {
  backgroundColor: 'pink',
  marginHorizontal: 20,
},
});

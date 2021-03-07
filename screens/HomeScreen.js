import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  ScrollView,
  Image,
  ImageBackground,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {Card} from 'react-native-elements';
import {List, Searchbar} from 'react-native-paper';
import {images, icons, COLORS, FONTS, SIZES} from '../constants';

const ScrollableTab = ({tabList, selectedTab, onPress}) => {
  const renderItem = ({item}) => (
    <TouchableOpacity
      style={{marginHorizontal: SIZES.padding}}
      onPress={() => onPress(item)}>
      <Text style={{color: COLORS.secondary, ...FONTS.body2}}>{item.name}</Text>

      {selectedTab.id == item.id && (
        <View style={{alignItems: 'center', marginTop: SIZES.base}}>
          <View
            style={{
              width: 10,
              height: 10,
              borderRadius: 5,
              backgroundColor: COLORS.blue,
            }}
          />
        </View>
      )}
    </TouchableOpacity>
  );

  return (
    <View style={{marginTop: SIZES.padding}}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={tabList}
        renderItem={renderItem}
        keyExtractor={item => `${item.id}`}
      />
    </View>
  );
};

const ScrollableCard = ({navigation, productList}) => {
  const renderCard = ({item}) => (
    <TouchableOpacity
      style={{marginLeft: SIZES.padding}}
      onPress={() => navigation.navigate('ItemDetail', {itemInfo: item})}>
      <View style={{width: SIZES.width / 2}}>
        <Image
          source={item.image}
          resizeMode="cover"
          style={{
            width: '100%',
            height: '100%',
            borderRadius: SIZES.radius * 2,
          }}
        />

        <View
          style={{position: 'absolute', top: 15, left: '10%', right: '10%'}}>
          <Text style={{color: COLORS.lightGray2, ...FONTS.h3}}>Item</Text>
          <Text
            style={{marginTop: SIZES.base, color: COLORS.white, ...FONTS.h2}}>
            {item.productName}
          </Text>
        </View>

        <View
          style={{
            position: 'absolute',
            bottom: 20,
            left: 30,
            borderRadius: 15,
            paddingVertical: 10,
            paddingHorizontal: 15,
            backgroundColor: COLORS.transparentLightGray,
          }}>
          <Text style={{...FONTS.h2}}>$ {item.price.toFixed(2)}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{marginTop: SIZES.padding}}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={productList}
        renderItem={renderCard}
        keyExtractor={item => `${item.productId}`}
      />
    </View>
  );
};
const HomeScreen = ({navigation}) => {
  const {colors} = useTheme();

  const theme = useTheme();
  const [tabList, setTabList] = React.useState([
    {
      id: 0,
      name: 'Item',
      title: 'Products',
      productList: [
        {
          productId: 1,
          productName: 'Dhaka',
          price: 10.0,
          image: images.dhaka,
        },
        {
          productId: 2,
          productName: 'khukuri',
          price: 10.0,
          image: images.khukuri,
        },
        {
          productId: 3,
          productName: 'thanka',
          price: 10.0,
          image: images.thanka,
        },
      ],
    },
    {
      id: 1,
      name: 'Crafted',
      title: 'Handmade',
      productList: [
        {
          productId: 4,
          productName: 'pasmina',
          price: 10.0,
          image: images.pasmina,
        },
        {
          productId: 5,
          productName: 'khukuri',
          price: 10.0,
          image: images.khukuri,
        },
        {
          productId: 6,
          productName: 'thanka 6',
          price: 10.0,
          image: images.thanka,
        },
      ],
    },
    {
      id: 3,
      name: 'Accessories',
      title: 'accessories',
      productList: [
        {
          productId: 10,
          productName: 'felt',
          price: 10.0,
          image: images.felt,
        },
        {
          productId: 11,
          productName: 'khukuri',
          price: 10.0,
          image: images.khukuri,
        },
        {
          productId: 12,
          productName: 'thanka',
          price: 10.0,
          image: images.thanka,
        },
      ],
    },
  ]);

  const [selectedTab, setSelectedTab] = React.useState({
    id: 0,
    name: 'Chair',
    title: 'chairs',
    productList: [
      {
        productId: 1,
        productName: 'Chair Green Colour',
        price: 10.0,
        image: images.greenChair,
      },
      {
        productId: 2,
        productName: 'Chair Peach Colour',
        price: 10.0,
        image: images.redChair,
      },
      {
        productId: 3,
        productName: 'Chair White Colour',
        price: 10.0,
        image: images.whiteChair,
      },
    ],
  });

  // Render

  function renderCart() {
    return (
      <View style={{paddingHorizontal: SIZES.padding}}>
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 1, alignItems: 'flex-end'}}>
            <TouchableOpacity
              onPress={() => {
                console.log('Cart on clicked');
              }}>
              <Image
                source={icons.cart}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  function renderTitle(title) {
    return (
      <View style={{marginTop: 1, marginHorizontal: SIZES.padding}}>
        <Text style={{color: COLORS.black, ...FONTS.largeTitle}}>{title}</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        {renderTitle(selectedTab.title)}
        {renderCart()}
      </View>

      <ScrollableTab
        tabList={tabList}
        selectedTab={selectedTab}
        onPress={item => setSelectedTab(item)}
      />

      <View style={{flex: 1}}>
        <ScrollableCard
          navigation={navigation}
          productList={selectedTab.productList}
        />
      </View>

      {/* Footer - Promotion Card */}
      <View style={{height: '19%', justifyContent: 'flex-end'}} />
      <Card image={images.dhaka}>
        <Text style={{marginBottom: 10, marginTop: 20}} h2>
          Kid shoes
        </Text>
        <Text style={styles.price} h4>
          $ 200
        </Text>
        <Text h6 style={styles.description}>
          added 2h ago
        </Text>
        <Button
          type="clear"
          title="Buy now"
          onPress={() => console.log('cart on clicked')}
        />
      </Card>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  name: {
    color: '#5a647d',
    fontWeight: 'bold',
    fontSize: 30,
  },
  price: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 10,
    color: '#c1c4cd',
  },
});
export default HomeScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center'
//   },
//   name: {
//     color: '#5a647d',
//     fontWeight: 'bold',
//     fontSize: 30
// },
// price: {
//     fontWeight: 'bold',
//     marginBottom: 10
// },
// description: {
//     fontSize: 10,
//     color: '#c1c4cd'
// },
// scrollView: {
//   backgroundColor: 'pink',
//   marginHorizontal: 20,
// },
// });

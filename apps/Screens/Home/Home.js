import React from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {colors} from '../../Theme/colors';
import {fonts} from '../../Theme/Fonts';
import CardComponent from './CardComponent';
import ContactsComponent from './ContactsComponent';
import Feather from 'react-native-vector-icons/Feather';
import TransactionList from './TransactionList';

const {width, height} = Dimensions.get('window');

const Home = () => {
  cartData = [
    {
      id: 1,
      url: 'https://res.cloudinary.com/dzklqz4hm/image/upload/v1721042437/Group_1321315030_gzvlbc.png',
    },
    {
      id: 2,
      url: 'https://res.cloudinary.com/dzklqz4hm/image/upload/v1721042438/Group_1321315031_jeboqs.png',
    },
    {
      id: 3,
      url: 'https://res.cloudinary.com/dzklqz4hm/image/upload/v1721042438/Group_1321315035_vxfzms.png',
    },
    {
      id: 4,
      url: 'https://res.cloudinary.com/dzklqz4hm/image/upload/v1721042438/Group_1321315033_pvxpc3.png',
    },
    {
      id: 5,
      url: 'https://res.cloudinary.com/dzklqz4hm/image/upload/v1721042438/Group_1321315034_iml6he.png',
    },
    {
      id: 6,
      url: 'https://res.cloudinary.com/dzklqz4hm/image/upload/v1721042437/Group_1321315032_t0cfd6.png',
    },
  ];

  const renderCardItem = ({item}) => {
    return <CardComponent item={item} />;
  };

  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <View style={styles.headerView}>
          <View style={styles.profileSection}>
            <Image
              source={require('../../assets/images/userProfile.png')}
              style={styles.profileView}
              resizeMode="cover"
            />
            <View style={styles.balanceView}>
              <Text style={styles.balanceText}>Total balance</Text>
              <Text style={styles.amountText}> $7,55</Text>
            </View>
          </View>
          <View style={styles.notificationView}>
            <Feather name={'bell'} color={colors.black} size={20} />
          </View>
        </View>

        <View style={{paddingHorizontal: '2%'}}>
          <FlatList
            data={cartData}
            keyExtractor={item => item.id}
            renderItem={renderCardItem}
            horizontal
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
          />
        </View>
        <View>
          <View style={styles.moneyHeader}>
            <Text style={styles.headerText}>Send Money</Text>
            <Feather name={'more-horizontal'} color={colors.black} size={25} />
          </View>
          <ContactsComponent />
        </View>
      </View>
      <View style={{flex: 1, marginTop: '15%'}}>
        <TransactionList />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightGrey,
  },
  text: {
    color: 'grey',
    fontSize: 20,
  },
  headerView: {
    flexDirection: 'row',
    backgroundColor: colors.lightGrey,
    paddingVertical: '5%',
    paddingHorizontal: '2%',
  },
  profileSection: {
    flex: 1,
    flexDirection: 'row',
  },
  profileView: {
    width: 45,
    height: 45,
    borderRadius: 100,
    backgroundColor: colors.white,
    alignSelf: 'flex-start',
  },
  balanceView: {
    paddingHorizontal: '2%',
  },
  notificationView: {
    borderRadius: 50,
    backgroundColor: colors.white,
    padding: 10,
    alignSelf: 'flex-end',
  },
  balanceText: {
    color: colors.grey,
    fontFamily: fonts.font_medium,
    fontSize: 14,
  },
  amountText: {
    color: colors.black,
    fontFamily: fonts.font_semi_bold,
    fontSize: 16,
  },
  headerText: {
    color: colors.black,
    fontFamily: fonts.font_semi_bold,
    fontSize: 18,
  },
  moneyHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '4%',
    marginVertical: '5%',
  },
});

export default Home;

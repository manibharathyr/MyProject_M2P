import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../Theme/colors';
import {fonts} from '../../Theme/Fonts';
import Feather from 'react-native-vector-icons/Feather';

const TransactionList = () => {
  const transactionData = [
    {
      id: '1',
      date: '2024-07-01',
      time: '10:30 AM',
      creditedAmount: 100.0,
      debitedAmount: 0.0,
      description: 'Groceries',
      senderName: 'John Doe',
      receiverName: 'Supermarket',
    },
    {
      id: '2',
      date: '2024-07-02',
      time: '11:15 AM',
      creditedAmount: 0.0,
      debitedAmount: 150.0,
      description: 'Electronics',
      senderName: 'Jane Smith',
      receiverName: 'Electronics Store',
    },
    {
      id: '3',
      date: '2024-07-03',
      time: '09:00 AM',
      creditedAmount: 0.0,
      debitedAmount: 20.0,
      description: 'Coffee',
      senderName: 'Alice Johnson',
      receiverName: 'Coffee Shop',
    },
    {
      id: '4',
      date: '2024-07-04',
      time: '07:45 PM',
      creditedAmount: 0.0,
      debitedAmount: 75.0,
      description: 'Restaurant',
      senderName: 'Michael Brown',
      receiverName: 'Restaurant',
    },
    {
      id: '5',
      date: '2024-07-05',
      time: '03:00 PM',
      creditedAmount: 500.0,
      debitedAmount: 0.0,
      description: 'Salary',
      senderName: 'Company XYZ',
      receiverName: 'Emily Davis',
    },
    {
      id: '6',
      date: '2024-07-06',
      time: '05:30 PM',
      creditedAmount: 0.0,
      debitedAmount: 100.0,
      description: 'Utilities',
      senderName: 'Daniel Wilson',
      receiverName: 'Utility Company',
    },
    {
      id: '7',
      date: '2024-07-07',
      time: '08:00 AM',
      creditedAmount: 0.0,
      debitedAmount: 40.0,
      description: 'Fuel',
      senderName: 'Jessica Garcia',
      receiverName: 'Fuel Station',
    },
    {
      id: '8',
      date: '2024-07-08',
      time: '06:15 PM',
      creditedAmount: 50.0,
      debitedAmount: 0.0,
      description: 'Cashback',
      senderName: 'Retailer ABC',
      receiverName: 'David Martinez',
    },
    {
      id: '9',
      date: '2024-07-09',
      time: '08:30 PM',
      creditedAmount: 0.0,
      debitedAmount: 30.0,
      description: 'Movie',
      senderName: 'Laura Rodriguez',
      receiverName: 'Cinema',
    },
    {
      id: '10',
      date: '2024-07-10',
      time: '02:45 PM',
      creditedAmount: 100.0,
      debitedAmount: 0.0,
      description: 'Refund',
      senderName: 'Online Store',
      receiverName: 'Robert Hernandez',
    },
  ];

  const renderTransactionItem = ({item}) => {
    return (
      <View style={styles.itemContainer}>
        <View style={styles.view}>
          <View
            style={{
              flexDirection: 'row',
              flex: 1,
              alignItems: 'center',
            }}>
            <Image
              source={require('../../assets/images/placeHolder.jpg')}
              style={styles.profileView}
              resizeMode="cover"
            />
            <View style={{marginHorizontal: '4%'}}>
              <Text style={styles.nameText}>
                {Math.round(item.creditedAmount) !== 0
                  ? item.receiverName
                  : item.senderName}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                }}>
                <Text style={styles.descText}>{item.time}</Text>
                <Text style={styles.descText}>{item.description}</Text>
              </View>
            </View>
          </View>
          <Text style={styles.amountText}>
            {`${
              +Math.round(item.creditedAmount) !== 0
                ? '+ ' + '$' + item.creditedAmount
                : '- ' + '$' + item.debitedAmount
            }`}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          height: 4,
          width: '10%',
          borderRadius: 2,
          backgroundColor: colors.grey,
          alignSelf: 'center',
        }}
      />
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}>
        <Text style={styles.textStyle}>Today</Text>
        <Feather name={'search'} color={colors.black} size={25} />
      </View>

      <FlatList
        data={transactionData}
        keyExtractor={item => item.id}
        renderItem={renderTransactionItem}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: '20%',
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    backgroundColor: colors.white,
    paddingHorizontal: '4%',
    paddingVertical: '5%',
  },
  textStyle: {
    fontFamily: fonts.font_semi_bold,
    fontSize: 18,
    color: colors.black,
  },
  itemContainer: {
    paddingVertical: '2%',
    marginBottom: '2%',
  },
  view: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileView: {
    borderRadius: 100,
    backgroundColor: colors.lightGrey,
    marginBottom: 5,
    height: 60,
    width: 60,
    alignItems: 'center',
  },
  nameText: {
    fontFamily: fonts.font_semi_bold,
    fontSize: 14,
    color: colors.black,
  },
  descText: {
    fontFamily: fonts.font_semi_bold,
    fontSize: 12,
    marginHorizontal: '1%',
    color: colors.grey,
  },
  amountText: {
    fontFamily: fonts.font_semi_bold,
    fontSize: 20,
    marginHorizontal: '1%',
    color: colors.black,
  },
});

export default TransactionList;

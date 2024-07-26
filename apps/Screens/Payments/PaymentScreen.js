import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import CustomKeyboard from '../../Components/CustomKeyboard';
import {colors} from '../../Theme/colors';
import {fonts} from '../../Theme/Fonts';
import {goBackToScreen} from '../../Utility/NavigationService';

const PaymentScreen = prop => {
  const Navigation = useNavigation();
  const contactDetails = prop.route.params;
  const [amount, setAmount] = useState('');

  useEffect(() => {
    console.log('amount_1 :', amount);
    if (amount !== '') {
      const formattedValue = formatWithCommas(amount);
      if (formattedValue !== amount) {
        setAmount(formattedValue);
      }
    }
  }, [amount]);

  const formatWithCommas = value => {
    // Remove non-numeric characters except for periods
    const numericValue = value.replace(/[^0-9.]/g, '');

    // Split the input into integer and decimal parts
    const parts = numericValue.split('.');
    const integerPart = parts[0];
    const decimalPart = parts[1];

    // Format the integer part with commas
    const formattedIntegerPart =
      parseFloat(integerPart).toLocaleString('en-US');

    // Combine the formatted integer part with the decimal part
    return decimalPart !== undefined
      ? `${formattedIntegerPart}.${decimalPart}`
      : formattedIntegerPart;
  };

  const onPressNumber = value => {
    if (value === 'C') {
      setAmount(prev => prev.slice(0, -1));
    } else {
      setAmount(prev => prev + value);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <Pressable onPress={() => goBackToScreen(Navigation)}>
          <AntDesign name={'arrowleft'} color={colors.black} size={30} />
        </Pressable>
        <Text style={styles.headerText}>Payment</Text>
      </View>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <View style={styles.parentView}>
          <View style={styles.payInfoView}>
            <Image
              source={require('../../assets/images/userProfile.png')}
              style={styles.profileView}
              resizeMode="cover"
            />
            <Text style={styles.receiverName}>
              {`Paying ${contactDetails.displayName}`}
            </Text>
            <Text style={styles.receiverNumber}>
              {`${contactDetails.phoneNumbers[0].number}`}
            </Text>
          </View>
        </View>
        <View style={styles.amountView}>
          <Text style={styles.currencyText}>{'$'}</Text>
          <TextInput
            value={amount}
            onChangeText={setAmount}
            placeholder="0.0"
            placeholderTextColor={colors.grey}
            style={styles.input}
            cursorColor={colors.grey}
            showSoftInputOnFocus={false}
            autoFocus={true}
          />
          <View style={styles.regionView}>
            <Text style={styles.regionText}>USD</Text>
            <Image
              source={require('../../assets/images/usFlag.png')}
              style={styles.flagView}
              resizeMode="cover"
            />
          </View>
        </View>
      </View>

      <View style={styles.cardsView}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Octicons
            name={'credit-card'}
            color={colors.black}
            size={25}
            style={styles.logoStyle}
          />
          <View>
            <Text style={styles.cardNumber}>{`${'VISA'} ${'....7140'}`}</Text>
            <Text style={styles.cardAmount}>{`${'$'}${'20081'}`}</Text>
          </View>
        </View>
        <EvilIcons name={'chevron-down'} color={colors.black} size={35} />
      </View>
      <View
        style={{
          marginVertical: '5%',
        }}>
        <CustomKeyboard onPressNumber={onPressNumber} />
      </View>
      <TouchableOpacity style={styles.buttonStyle}>
        <Text style={styles.buttonText}>Send</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  headerView: {
    flexDirection: 'row',
    paddingHorizontal: '5%',
    paddingVertical: '5%',
    alignItems: 'center',
  },
  headerText: {
    color: colors.black,
    fontFamily: fonts.font_semi_bold,
    fontSize: 20,
    flex: 1,
    textAlign: 'center',
  },
  parentView: {
    paddingHorizontal: '4%',
    marginVertical: '4%',
  },
  payInfoView: {
    alignSelf: 'center',
    alignItems: 'center',
  },
  receiverName: {
    fontFamily: fonts.font_semi_bold,
    fontSize: 18,
    color: colors.black,
  },
  receiverNumber: {
    fontFamily: fonts.font_semi_bold,
    fontSize: 14,
    color: colors.black,
  },
  amountView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: '10%',
  },
  input: {
    color: colors.black,
    fontFamily: fonts.font_semi_bold,
    fontSize: 25,
    paddingVertical: 10,
    flex: 1,
  },
  regionView: {
    backgroundColor: colors.lightGrey,
    padding: '2%',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  regionText: {
    color: colors.black,
    fontFamily: fonts.font_semi_bold,
    fontSize: 14,
  },
  currencyText: {
    color: colors.blue,
    fontFamily: fonts.font_semi_bold,
    fontSize: 25,
  },
  cardsView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.lightGrey,
    paddingVertical: '4%',
    paddingHorizontal: '2%',
    marginHorizontal: '5%',
    borderRadius: 12,
    alignItems: 'center',
  },
  logoStyle: {
    padding: 10,
    backgroundColor: colors.white,
    borderRadius: 50,
  },
  cardNumber: {
    color: colors.black,
    fontFamily: fonts.font_semi_bold,
    fontSize: 14,
    marginHorizontal: '2%',
    textAlign: 'center',
  },
  cardAmount: {
    color: colors.grey,
    fontFamily: fonts.font_semi_bold,
    fontSize: 14,
    marginHorizontal: '2%',
  },
  buttonStyle: {
    backgroundColor: colors.blue,
    alignItems: 'center',
    paddingVertical: '4%',
    marginVertical: '5%',
    marginHorizontal: '5%',
    borderRadius: 12,
  },
  buttonText: {
    color: colors.white,
    fontFamily: fonts.font_semi_bold,
    fontSize: 14,
  },
  profileView: {
    width: 45,
    height: 45,
    borderRadius: 100,
    backgroundColor: colors.white,
    alignSelf: 'center',
  },
  flagView: {
    width: 30,
    height: 30,
    alignSelf: 'center',
  },
});

export default PaymentScreen;

import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {colors} from '../../Theme/colors';
import {fonts} from '../../Theme/Fonts';
import Feather from 'react-native-vector-icons/Feather';

const {width, height} = Dimensions.get('window');

const CardComponent = ({item}) => {
  return (
    <View style={styles.card}>
      <ImageBackground style={styles.cardImage} source={{uri: item.url}}>
        <View style={styles.cardContainer}>
          <View
            style={[
              styles.textContainer,
              {
                flex: 1,
              },
            ]}>
            <Text style={styles.cardText}>Debit card</Text>
            <Text style={styles.cardText}>VISA</Text>
          </View>
          <View
            style={[
              styles.textContainer,
              {
                flex: 1,
              },
            ]}>
            <Text style={styles.cardAmount}>$1341.75</Text>
            <Feather name={'eye'} size={20} color={colors.white} />
          </View>
          <View
            style={[
              styles.textContainer,
              {
                flex: 0.5,
              },
            ]}>
            <Text style={styles.cardNumber}>....9440</Text>
            <Text style={styles.cardNumber}>09/27</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default CardComponent;

const styles = StyleSheet.create({
  cardImage: {
    justifyContent: 'center',
    height: '40%',
    width: '100%',
  },

  card: {
    marginHorizontal: 6,
    borderRadius: 25,
    overflow: 'hidden',
    backgroundColor: colors.white,
  },
  cardImage: {
    width: width * 0.8,
    height: height * 0.2,
    justifyContent: 'center',
  },
  cardContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  text: {
    color: colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: '2%',
  },
  cardText: {
    color: colors.white,
    fontFamily: fonts.font_semi_bold,
    fontSize: 12,
  },
  cardAmount: {
    color: colors.white,
    fontFamily: fonts.font_semi_bold,
    fontSize: 20,
  },
  cardNumber: {
    color: colors.white,
    fontFamily: fonts.font_semi_bold,
    fontSize: 14,
  },
});

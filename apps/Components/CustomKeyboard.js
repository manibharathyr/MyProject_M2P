import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {colors} from '../Theme/colors';
import {fonts} from '../Theme/Fonts';
import Ionicons from 'react-native-vector-icons/Ionicons';
const CustomKeyboard = ({onPressNumber}) => {
  const buttons = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '0', 'C'];

  return (
    <View style={styles.container}>
      {buttons.map((button, index) => (
        <TouchableOpacity
          key={index}
          style={styles.button}
          onPress={() => onPressNumber(button)}>
          {button != 'C' ? (
            <Text style={styles.buttonText}>{button}</Text>
          ) : (
            <Ionicons name={'backspace'} color={colors.black} size={25} />
          )}
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  button: {
    width: '30%',
    height: 60,
    marginVertical: 2,
    marginHorizontal: 2,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  buttonText: {
    fontSize: 24,
    fontFamily: fonts.font_semi_bold,
    color: colors.black,
  },
});

export default CustomKeyboard;

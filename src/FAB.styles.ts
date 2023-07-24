import { Dimensions, StyleSheet } from 'react-native';

export const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  defaultStyle: {
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
  },
});

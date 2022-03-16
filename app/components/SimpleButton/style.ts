import {StyleSheet, Platform} from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingVertical: 14,
    paddingHorizontal: 16,
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
  },
  text: {
    ...Platform.select({
      ios: {
        // fontFamily: 'SFProText-Semibold',
        letterSpacing: -0.41,
        fontSize: 17,
      },
      android: {
        letterSpacing: 1.5,
        fontSize: 14,
        // fontFamily: 'Roboto-Medium',
        textTransform: 'uppercase',
      },
    }),
    textAlign: 'center',
    color: '#fff',
  },
  leftIcon: {
    width: Platform.OS === 'ios' ? 16 : 12,
    aspectRatio: 1,
    marginRight: 8,
  },
  shadow: {
    shadowOffset: {width: 0, height: 8},
    shadowRadius: 8,
    shadowOpacity: 0.45,
    shadowColor: 'rgba(128, 92, 204, 0.9)',
    elevation: 4,
  },
});

export default styles;

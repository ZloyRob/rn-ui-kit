import React from 'react';
import {Text, StyleProp, ViewStyle, TouchableOpacity, TextStyle, Platform} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {SvgProps} from 'react-native-svg';
import styles from './style';

const backgroundColors = Platform.OS === 'ios' ? ['#96e6eb', '#429ffd'] : ['#429ffd', '#429ffd'];
const disabledBackgroundColors =
  Platform.OS === 'ios' ? ['#E7E7E7', '#B9B9B9'] : ['#c9c9c9', '#c9c9c9'];

interface Props {
  text: string;
  onPress: () => void;
  LeftIcon?: React.FC<SvgProps>;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  borderRadius?: number;
}

export default function SimpleButton({
  text,
  onPress,
  LeftIcon,
  disabled = false,
  style,
  textStyle,
  borderRadius = Platform.OS === 'ios' ? 8 : 2,
}: Props): React.FunctionComponentElement<Props> {
  return (
    <TouchableOpacity
      style={[styles.container, styles.shadow, {borderRadius}, style]}
      onPress={onPress}
      activeOpacity={0.7}
      disabled={disabled}
    >
      <LinearGradient
        colors={disabled ? disabledBackgroundColors : backgroundColors}
        style={[{borderRadius}, styles.gradient]}
      />
      {/* {LeftIcon && <LeftIcon style={styles.leftIcon} />} */}
      {LeftIcon && (
        <LeftIcon
          style={{
            marginRight: 8,
            zIndex: 1,
          }}
        />
      )}
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
}

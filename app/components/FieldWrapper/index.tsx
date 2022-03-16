import React, {FunctionComponentElement} from 'react';
import {View, Text} from 'react-native';
import styles from './style';

interface Props {
  children: React.ReactNode;
  label?: string;
  message?: string;
  messageType?: 'error' | 'success';
}

export default function FieldWrapper({
  children,
  label = '',
  message = '',
  messageType,
}: Props): FunctionComponentElement<Props> {
  const messageStyles: Object[] = [styles.messageText];

  if (messageType === 'success') {
    messageStyles.push(styles.messageSuccess);
  } else if (messageType === 'error') {
    messageStyles.push(styles.messageError);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.labelText}>{label}</Text>
      {children}
      <Text style={messageStyles}>{message}</Text>
    </View>
  );
}

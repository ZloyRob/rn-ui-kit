import FieldWrapper from 'components/FieldWrapper';
import React, {FunctionComponentElement} from 'react';
import {View, TextInputProps, TextInput as TextInputRn} from 'react-native';
import styles from './style';

interface Props extends TextInputProps {
  label?: string;
  message?: string;
  messageType?: 'error' | 'success';
}

export default function TextInput(props: Props): FunctionComponentElement<Props> {
  return (
    <FieldWrapper label={props.label} message={props.message} messageType={props.messageType}>
      <TextInputRn style={styles.textInput} {...props} />
      <View style={styles.border} />
    </FieldWrapper>
  );
}

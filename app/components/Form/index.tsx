import React, {FunctionComponentElement} from 'react';
import {View, Text} from 'react-native';
import styles from './style';

interface Props {
  children: JSX.Element;
  header?: string;
  subheader?: string;
}

export default function Form({
  children,
  header,
  subheader,
}: Props): FunctionComponentElement<Props> {
  return (
    <View style={styles.container}>
      {(header || subheader) && (
        <View style={styles.topRow}>
          {header && <Text style={styles.headerText}>{header}</Text>}
          {subheader && <Text style={styles.subHeaderText}>{subheader}</Text>}
        </View>
      )}
      {children}
    </View>
  );
}

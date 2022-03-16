import FieldWrapper from 'components/FieldWrapper';
import React, {FunctionComponentElement} from 'react';
import {SwitchProps, Switch as SwitchRn} from 'react-native';

interface Props extends SwitchProps {
  label?: string;
  message?: string;
  messageType?: 'error' | 'success';
}

export default function Switch(props: Props): FunctionComponentElement<Props> {
  return (
    <FieldWrapper label={props.label} message={props.message} messageType={props.messageType}>
      <SwitchRn {...props} />
    </FieldWrapper>
  );
}

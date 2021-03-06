import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {action} from '@storybook/addon-actions';

import {BufferView} from './decorators';
import TextInput from '../components/TextInput';

const defaultTextInputProps = {
  label: 'Demo',
  onChangeText: action('onChangeText'),
};
storiesOf('TextInput', module)
  .addDecorator(BufferView)
  .add('default', () => <TextInput {...defaultTextInputProps} />)
  .add('with placeholder', () => (
    <TextInput {...defaultTextInputProps} placeholder="demo placeholder" />
  ))
  .add('with value', () => <TextInput {...defaultTextInputProps} value="hello value" />)
  .add('with error message', () => (
    <TextInput {...defaultTextInputProps} message="This is an error" messageType="error" />
  ))
  .add('email', () => (
    <TextInput
      {...defaultTextInputProps}
      label="Email"
      value="spencer@reactnativeschool.com"
      keyboardType="email-address"
    />
  ))
  .add('password', () => (
    <TextInput {...defaultTextInputProps} label="Password" value="password" secureTextEntry />
  ));

import React from 'react';
import {View} from 'react-native';
import {storiesOf} from '@storybook/react-native';

import {BufferView} from './decorators';
import Form from '../components/Form';

storiesOf('Form', module)
  .addDecorator(BufferView)
  .add('default', () => (
    <Form>
      <View style={{height: 200, alignSelf: 'stretch', backgroundColor: '#e6e6e6'}} />
    </Form>
  ))
  .add('with header', () => (
    <Form header="Hello.">
      <View style={{height: 200, alignSelf: 'stretch', backgroundColor: '#e6e6e6'}} />
    </Form>
  ))
  .add('with header and subheader', () => (
    <Form header="Hello." subheader="Welcome back. Kindly enter your login details.">
      <View style={{height: 200, alignSelf: 'stretch', backgroundColor: '#e6e6e6'}} />
    </Form>
  ));

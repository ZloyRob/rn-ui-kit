import React from 'react';
import {storiesOf} from '@storybook/react-native';

import {BufferView} from './decorators';
import Switch from '../components/Switch';

storiesOf('Switch', module)
  .addDecorator(BufferView)
  .add('default', () => <Switch label="Agree to Terms" />)
  .add('with error', () => (
    <Switch label="Agree to Terms" message="You must agree to the terms" messageType="error" />
  ));

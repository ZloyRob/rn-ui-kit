import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {action} from '@storybook/addon-actions';

import SimpleButton from '../components/SimpleButton';
import {BufferView} from './decorators';
import SoundSVG from '../assets/icons/sound.svg';

storiesOf('SimpleButton', module)
  .addDecorator(BufferView)
  .add('default', () => <SimpleButton onPress={action('tapped-default')} text={'SimpleButton'} />)
  .add('disabled', () => (
    <SimpleButton onPress={action('tapped-default')} text={'SimpleButton'} disabled />
  ))
  .add('with icon', () => (
    <SimpleButton onPress={action('tapped-default')} text={'SimpleButton'} LeftIcon={SoundSVG} />
  ));

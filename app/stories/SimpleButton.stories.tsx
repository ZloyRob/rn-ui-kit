import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {action} from '@storybook/addon-actions';

import SimpleButton from '../components/SimpleButton';
import {BufferView} from './decorators';
import SoundSVG from '../assets/icons/sound.svg';

storiesOf('SimpleButton', module)
  .addDecorator(BufferView)
  .addParameters({
    zeplinLink:
      'https://app.zeplin.io/project/5be2bd7a6fdc183ed41cc1b5/styleguide/components?coid=5e70909a61a04817f9fd4b45',
  })
  .add('default', () => <SimpleButton onPress={action('tapped-default')} text={'SimpleButton'} />)
  .add('disabled', () => (
    <SimpleButton onPress={action('tapped-default')} text={'SimpleButton'} disabled />
  ))
  .add('with icon', () => (
    <SimpleButton onPress={action('tapped-default')} text={'SimpleButton'} LeftIcon={SoundSVG} />
  ));

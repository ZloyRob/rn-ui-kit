import path from 'path';
import initStoryshots from '@storybook/addon-storyshots';
import {render} from '@testing-library/react-native';

initStoryshots({
  framework: 'react-native', // Manually specify the project's framework
  renderer: render,
  configPath: path.join(__dirname, '../storybook'),
});

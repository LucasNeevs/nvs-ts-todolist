import React from 'react';
import { storiesOf } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
import TodoFinal from './TodoFinal';

storiesOf('TodoFinal', module)
  .addDecorator((storyFn, context) => withConsole()(storyFn)(context))
  .add('Default', (): React.ReactElement<HTMLElement> => (
    <TodoFinal />
  ));
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
import List from './List';

storiesOf('List', module)
  .addDecorator((storyFn, context) => withConsole()(storyFn)(context))
  .add('Default', (): React.ReactElement<HTMLElement> => (
    <List 
      todos={[]}
      deleteTodo={(): void => {}}
    />
  ));
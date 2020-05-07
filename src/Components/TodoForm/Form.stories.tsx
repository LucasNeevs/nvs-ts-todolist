import React from 'react';
import { storiesOf } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
import Form from './Form';

storiesOf('Form', module)
  .addDecorator((storyFn, context) => withConsole()(storyFn)(context))
  .add('Default', (): React.ReactElement<HTMLElement> => (
    <Form 
      saveTodo={(todoText: string): void => {
        const trimmedText: string = todoText.trim();

        if (trimmedText.length > 0) {
          console.table(trimmedText);
        }
      }} 
    />
  ));
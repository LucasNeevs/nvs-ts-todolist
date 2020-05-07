import { useState } from 'react';

interface IInputState {
  value: any;
  onChange: (event: React.ChangeEvent) => void;
  reset: () => void;
}

export default (initialValue: string): IInputState => {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    onChange: (event: any): void => {
      setValue(event.target.value);
    },
    reset: (): void => setValue(''),
  }
};
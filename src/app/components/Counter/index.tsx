import * as React from 'react';

interface ICounterProps {
  counter: number;
}

export const Counter: React.SFC<ICounterProps> = ({ counter }) => (
  <p>Contador: {counter}</p>
);
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import formatElapsedTime from './formatElapsedTime';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('test time formatter with time more than 1 hour', () => {
  const time = 100000000;
  expect(formatElapsedTime(time)).toBe('27:46:40.00');
})

test('test time formatter with time less than 1 hour', () => {
  const time = 129100;
  expect(formatElapsedTime(time)).toBe('02:09.10');
})


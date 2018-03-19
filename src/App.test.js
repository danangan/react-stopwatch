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
  expect(formatElapsedTime(100000000)).toBe('27:46:40.00');
})

test('test time formatter with time less than 1 hour', () => {
  expect(formatElapsedTime(129100)).toBe('02:09.10');
})

test('test time formatter other type than number input', () => {
  expect(formatElapsedTime('some string')).toBe('00:00:00');
  expect(formatElapsedTime(true)).toBe('00:00:00');
  expect(formatElapsedTime({})).toBe('00:00:00');
  expect(formatElapsedTime([])).toBe('00:00:00');
  expect(formatElapsedTime(() => {})).toBe('00:00:00');
})

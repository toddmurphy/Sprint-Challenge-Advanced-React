import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render } from '@testing-library/react';
import Player from './components/Player'




it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});




//test title by text
test('test some text', () => {
  const { getByText } = render(<Player />)

  getByText(/name/i)
})

//test another title by text
test('test some text', () => {
  const { getByText } = render(<Player />)

  getByText(/country/i)
})




import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('sets isLoading to true when loading', () => {
  global.fetch = jest.fn().mockReturnValue(Promise.resolve({
    ok: true,
    json: () => Promise.resolve({'user': 'test'})
  }));

  const c = shallow(<App />);
  c.instance().handleClick().then(() => {
    expect(c.instance().state.fetchedProducts).toEqual(false);
  });
  expect(c.instance().state.fetchedProducts).toEqual(true);
});

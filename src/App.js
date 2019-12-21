import React from 'react';
import { Provider } from 'react-redux';
import { store } from 'app/store/store';
import { Payment } from 'app/pages';
import './app/styling/main.scss';

function App() {
  return (
    <Provider store={store}>
      <Payment />
    </Provider>
  );
}

export default App;

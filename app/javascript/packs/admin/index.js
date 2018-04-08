import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Router from './router';
import Store from './store';

const { store, persistor } = Store();

const Hello = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter basename="/admin">
        <Router />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);

document.addEventListener('DOMContentLoaded', () => {
  render(<Hello />, document.body.appendChild(document.createElement('div')));
});

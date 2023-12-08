import React from 'react';
import ReactDOM from 'react-dom/client';
import MovieSeatSelection from './MovieSeatSelection/MovieSeatSelection';
import { Provider } from 'react-redux';
import { store } from './MovieSeatSelection/redux/configStore';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <Provider store={store}>
      <MovieSeatSelection />
    </Provider>
  </>
);
import React from 'react';
import { Provider } from 'react-redux';
import Map from 'components/map';

import 'config/ReactotronConfig';
import store from 'store';


const App = () => (
  <Provider store={store}>
    <Map />
  </Provider>
);

export default App;

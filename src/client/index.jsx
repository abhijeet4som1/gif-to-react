import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

import {store} from '../common/store/store';
import Landing from '../common/components/landing/Landing';

render(
  <Provider store={store}>
    <Landing/>
</Provider>,
  document.getElementById('app')
);

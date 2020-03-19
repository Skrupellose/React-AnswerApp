import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './views/App'
import Dati from './views/Dati'
import store from './store/data'
import Result from './views/Result';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path='/' exact component={App}></Route>
      <Route path='/dati'  component={Dati}></Route>
      <Route path='/result' component={Result}></Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)



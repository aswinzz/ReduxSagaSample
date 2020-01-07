import React from 'react';
import { Route } from 'react-router-dom';
import { Router } from 'react-router';
import createHistory from 'history/createBrowserHistory';
import Main from './containers/main';
import Home from './containers/home';
import Nav from './components/nav';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import { Provider } from 'react-redux';  
import configureStore from './store/configureStore';

// Initialize store
const store = configureStore();

const history = createHistory(); 

function App() {
  return (
    <div>
      <Provider store={store}>
        <Router history={history}>
            <Nav/>
            <Route exact path="/main" component={Main} />
            <Route exact path="/" component={Home} />
        </Router>
      </Provider>
    </div>
  );
}

export default App;

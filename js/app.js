/**
 *
 * app.js
 *
 * This is the entry file for the application, mostly just setup and boilerplate
 * code. Routes are configured at the end of this file!
 *
 */

// Import all the third party stuff
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { syncHistory } from 'redux-simple-router';
import FontFaceObserver from 'fontfaceobserver';
import createHistory from 'history/lib/createHashHistory';
import { useSimpleScroll } from 'scroll-behavior';

// Observer loading of Open Sans (to remove open sans, remove the <link> tag in the index.html file and this observer)
const openSansObserver = new FontFaceObserver('Open Sans', {});

// When Open Sans is loaded, add the js-open-sans-loaded class to the body
openSansObserver.check().then(() => {
  document.body.classList.add('js-open-sans-loaded');
}, () => {
  document.body.classList.remove('js-open-sans-loaded');
});

// Import the pages
import HomePage from './components/pages/HomePage';
import House from './components/pages/House';
import AboutPage from './components/pages/AboutPage';
import ProductPage from './components/pages/ProductPage';
import TravelPage from './components/pages/TravelPage';
import NotFound from './components/pages/NotFound';
import App from './components/App';

// Import the CSS file, which HtmlWebpackPlugin transfers to the build folder
import '../css/main.css';

// Create the store with middleware
import rootReducer from './reducers/rootReducer';
const browserHistory = useSimpleScroll(createHistory)({queryKey: false});
const reduxRouterMiddleware = syncHistory(browserHistory);
const createStoreWithMiddleware = applyMiddleware(thunk, reduxRouterMiddleware)(createStore);
const store = createStoreWithMiddleware(rootReducer);

// Make reducers hot reloadable, see http://stackoverflow.com/questions/34243684/make-redux-reducers-and-other-non-components-hot-loadable
if (module.hot) {
  module.hot.accept('./reducers/rootReducer', () => {
    const nextRootReducer = require('./reducers/rootReducer').default;
    store.replaceReducer(nextRootReducer);
  });
}

// Mostly boilerplate, except for the Routes. These are the pages you can go to,
// which are all wrapped in the App component, which contains the navigation etc
ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route component={App}>
        <Route path="/" component={HomePage} />
        <Route path="about" component={AboutPage} />
        <Route path="product" component={ProductPage} />
        <Route path="travel" component={TravelPage}>
          <Route path=":id" component={TravelPage} />
        </Route>
        <Route path="house" component={House} />
        <Route path="*" component={NotFound} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);

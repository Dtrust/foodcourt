import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './App';
import store from './store/store';

const rootElem = document.getElementById('root');

if (rootElem) {
    const root = ReactDOM.createRoot(rootElem);

    root.render(
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    );
}

// const root = ReactDOM.createRoot(document.getElementById('root'));

import { ApolloProvider } from '@apollo/client';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';
import { apolloClient } from './ApolloClient';
import App from './App';
import { store } from './store/store';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
           <ApolloProvider client={apolloClient}>
            <App />
           </ApolloProvider>
        </BrowserRouter>
      </Provider>
  </React.StrictMode>
);
 
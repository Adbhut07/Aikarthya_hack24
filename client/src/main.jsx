import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {store, persistor} from './redux/store.js'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import App from './App.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <PersistGate persistor={persistor}>
    <Provider store={store}>
      <App />
    </Provider>
  </PersistGate>
)

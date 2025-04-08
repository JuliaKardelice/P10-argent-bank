
import { App } from './App.tsx'
import  { Provider } from "react-redux"
import store, { persistor }  from "./store/store.ts"
import './index.scss'
import 'font-awesome/css/font-awesome.min.css';
import { PersistGate } from 'redux-persist/integration/react'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
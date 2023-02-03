import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AppProvider } from './context/Productcontext';
import {FilterContextProvider} from './context/FilterContext'
import {UserContextProvider} from './context/UserContext'
import { CartProvider } from './context/Cartcontext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   

 
   <UserContextProvider>
 <AppProvider>


  <FilterContextProvider>
    <CartProvider>
    <App />

    </CartProvider>
  </FilterContextProvider>
 

 </AppProvider>
 
 </UserContextProvider>
    
    
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

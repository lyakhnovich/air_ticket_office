import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserBooking from "./booking/UserBooking";

export const Context = createContext(null)

ReactDOM.render(
    <Context.Provider value={{
      user: new UserBooking()

    }}>
      <App />
    </Context.Provider>,


  document.getElementById('root')
);


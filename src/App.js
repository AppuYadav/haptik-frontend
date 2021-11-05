import React from 'react';
import './App.css';
import FriendList from 'views/FriendList';
import { Toolbar } from './components'
import FriendContextProvider from './contexts/FriendContext';
import './mock';

function App() {

  return (
    <div className="App-Main">
      <FriendContextProvider>
        <Toolbar />
        <div className="App">
          <FriendList />
        </div>
      </FriendContextProvider>
    </div>
  );
}

export default App;

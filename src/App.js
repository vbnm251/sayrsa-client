import React, { useState } from 'react';
import './styles/app.css'
import ConversationList from './components/ConversationList';
import Chat from './components/Chat';
import ModalAuth from './components/ModalAuth';
import UserInfo from './components/UserInfo';
import { RootStoreContext } from './context/context';
import RootStore from './store/rootStore';

function App() {
  const [authed, setAuthed] = useState(false);

  return (
    <RootStoreContext.Provider value={new RootStore()}>
      { authed
        ?
        <div className='App'>
          <ConversationList/>
          <Chat/>
        </div>
        :
        <ModalAuth passAuth={setAuthed}/> 
      }
      
    </RootStoreContext.Provider>
  );
}

export default App;

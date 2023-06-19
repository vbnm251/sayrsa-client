import React, { useState } from 'react';
import './styles/app.css'
import ConversationList from './components/ConversationList';
import Chat from './components/Chat';

function App() {
  const [conv, ] = useState([
    {conv_id: 1 ,title: 'beseda', lastMessage: {text : 'I think so', sendDate : '2023-06-18T16:01:28.346423Z'}},
    {conv_id: 2 ,title: 'arnold'},
    {conv_id: 3 ,title: 'gym'},
  ])

  return (
   <div className='App'>
    <ConversationList conv={conv}/>
    <Chat/>
   </div>
  );
}

export default App;

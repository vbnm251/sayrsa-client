import React, { useState } from 'react';
import './styles/app.css'
import ConversationList from './components/ConversationList';
import Chat from './components/Chat';

function App() {
  const [conv, setConv] = useState([
    {conv_id: 1 ,title: 'conv', lastMessage: {text : 'Hello world!', sendDate : '2023-06-18T16:01:28.346423Z'}},
    {conv_id: 2 ,title: 'conv', lastMessage: {text : 'Hello world!', sendDate : '2023-06-18T16:01:28.346423Z'}},
    {conv_id: 3 ,title: 'conv', lastMessage: {text : 'Hello world!', sendDate : '2023-06-18T16:01:28.346423Z'}},
    {conv_id: 4 ,title: 'conv', lastMessage: {text : 'Hello world!', sendDate : '2023-06-18T16:01:28.346423Z'}},
    {conv_id: 5 ,title: 'conv', lastMessage: {text : 'Hello world!', sendDate : '2023-06-18T16:01:28.346423Z'}},
    {conv_id: 6 ,title: 'conv', lastMessage: {text : 'Hello world!', sendDate : '2023-06-18T16:01:28.346423Z'}},
    {conv_id: 7 ,title: 'conv', lastMessage: {text : 'Hello world!', sendDate : '2023-06-18T16:01:28.346423Z'}},
    {conv_id: 8 ,title: 'conv', lastMessage: {text : 'Hello world!', sendDate : '2023-06-18T16:01:28.346423Z'}},
    {conv_id: 9 ,title: 'conv', lastMessage: {text : 'Hello world!', sendDate : '2023-06-18T16:01:28.346423Z'}},
    {conv_id: 10 ,title: 'conv', lastMessage: {text : 'Hello world!', sendDate : '2023-06-18T16:01:28.346423Z'}},
    {conv_id: 11 ,title: 'conv', lastMessage: {text : 'Hello world!', sendDate : '2023-06-18T16:01:28.346423Z'}},
    {conv_id: 12, title: 'conv'},
    {conv_id: 13, title: 'conv'},
    {conv_id: 14, title: 'conv'},
    {conv_id: 15, title: 'conv'},
  ])

  return (
   <div className='App'>
    <ConversationList conversations={conv}/>
    <Chat/>
   </div>
  );
}

export default App;

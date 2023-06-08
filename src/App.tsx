import * as React from 'react';
import './style.css';

import MessagesDisplay from './components/MessagesDisplay';
import MessageDisplay from './components/MessageDisplay';
import CodeDisplay from './components/CodeDisplay';

export default function App() {
  return (
    <div className="app">
      <MessagesDisplay />
      <input />
      <CodeDisplay />
      <div className="button-container">
        <button id="get-query">obter consulta</button>
        <button id="clear-chat">limpar conversa</button>
      </div>
    </div>
  );
}

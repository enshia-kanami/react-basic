import React, { useState } from 'react'; //reactから関数をimportする必要がある
import './App.css';
import TextInput from './compornents/TextInput.jsx';
import Counter from './compornents/Counter.jsx';
import ToggleButton from './compornents/ToggleButton.jsx';

function App() {
  return(
    <div>
      <p>名前：<TextInput/></p>
      <p>メール:<TextInput/></p>
      <Counter/>
      <ToggleButton/>
    </div>
  );
};

export default App; //index.jsでAppをインストールしてAppを使える

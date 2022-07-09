import React, { useState } from 'react'; //reactから関数をimportする必要がある
import './App.css';
import TextInput from './compornents/TextInput.jsx';
import Counter from './compornents/Counter.jsx';

function App() {

  const [count, setCount] = useState(0)
  return(
    <div>
      <p>名前：<TextInput/></p>
      <p>メール:<TextInput/></p>
      <Counter/>
    </div>
  );
};

export default App; //index.jsでAppをインストールしてAppを使える

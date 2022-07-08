import React, { useState } from 'react'; //reactから関数をimportする必要がある
import './App.css';

function App() {
  return(
    <div className='App'>
      <Button btn_txt="クリック" />
    </div>
  );
};

function Button(props) {
  return (
    <button>{props.btn_txt}</button>
  )
}

export default App; //index.jsでAppをインストールしてAppを使える


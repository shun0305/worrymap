import React, { useState } from 'react';
import config from '../config.json';
import SignIn from './SignIn';
import Main from './Main/Main';

export default () => {
  const [username, setUserName] = useState(''); //setUserNameが更新されるとusernameが更新。初期値は空白

  if (config.signInEnabled && username === '') {
    return <SignIn setUserName={setUserName} />
  }
  else {
    return <Main username={username} />
  }
};



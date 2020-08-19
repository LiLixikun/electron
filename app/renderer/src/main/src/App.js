import React from 'react';
import { IpcRenderer } from 'electron'
import { Button } from 'antd';

const App = () => (
  <div className="App">
    <Button type="primary">Button</Button>
    <Button type="dashed">Button</Button>

  </div>
);

export default App;
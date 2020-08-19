import React, { useEffect } from 'react';
import { Tag } from 'antd';
import { ipcRenderer } from "electron"

const App = () => {

    useEffect(() => {
        ipcRenderer.invoke('invokable-ipc', 'someArgument').then((result) => {
            console.log(result);
        })
    }, [])

    return (<div className="App">
        <Tag color="magenta">prod</Tag>
    </div>
    )
}
export default App;
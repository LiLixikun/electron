## 解决 React  引入electron 报错

1. window.require('引入electron') 
这样可以不走webpack 打包,通过 window 去找寻

2. 更改webpack 配置 target 为 electron-renderer

react-app-rewired 可以在我们不用 **eject** 的情况下 更改 create-react-app 的默认配置

```js
const { override } = require('customize-cra');

function addRendererTarget(config) {
    config.target = 'electron-renderer'
    return config
}

module.exports = override(addRendererTarget)
```
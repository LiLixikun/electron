const { override, fixBabelImports, addLessLoader, setWebpackTarget } = require('customize-cra');

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    addLessLoader({
        lessOptions: {
            javascriptEnabled: true,
            modifyVars: {
                "@primary-color": "#1DA57A", // for example, you use Ant Design to change theme color.
            }
        }

    }),
    setWebpackTarget('electron-renderer')
)


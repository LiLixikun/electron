const { override, fixBabelImports, addLessLoader, setWebpackTarget, addDecoratorsLegacy, disableEsLint, } = require('customize-cra');

module.exports = override(
    addDecoratorsLegacy(),
    disableEsLint(),
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    addLessLoader({
        lessOptions: {
            javascriptEnabled: true,
            modifyVars: {
                "@primary-color": "#1DA57A"
            }
        }

    }),
    setWebpackTarget('electron-renderer')
)


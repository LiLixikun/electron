import React, { PureComponent } from 'react';
import { BrowserRouter } from 'dva/router';
import { ConfigProvider } from "antd";
import { renderRoutes } from 'react-router-config'
import routes from './common/Routers'

class RouterConfig extends PureComponent {
    render() {
        const { history, app } = this.props;
        return <ConfigProvider >
            <BrowserRouter>
                {renderRoutes(routes)}
            </BrowserRouter>
        </ConfigProvider>
    }
}

export default RouterConfig;
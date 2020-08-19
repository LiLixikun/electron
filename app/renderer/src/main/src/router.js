import React, { PureComponent } from 'react';
import { HashRouter as Router, Route, Switch, Link } from 'dva/router';
import { ConfigProvider } from "antd";
import Store from 'electron-store';

import Pro from './components/ProductList'
import Test from './components/Test'
const store = new Store();

class RouterConfig extends PureComponent {
    render() {
        const { history, app } = this.props;
        return <ConfigProvider >
            <Router>
                <Route path="/" component={App} />
            </Router>
        </ConfigProvider>
    }
}

function App() {
    console.log(store.get('unicorn'));

    return (
        <div>
            这是主页
            <Link to="/prod">prod</Link>切换
            <Link to="/test">test</Link>
            <Switch>
                <Route path="/prod" exact component={Pro} />
                <Route path="/test" exact component={Test} />
            </Switch>
        </div>
    )
}

export default RouterConfig;
import React from 'react';
import { Tag } from 'antd';
import { connect } from 'dva'
const App = (props) => {
    console.log(props);
    return (
        <div className="App">
            <Tag color="red">red</Tag>
        </div>
    )
};

export default connect(({ global }) => ({
    name: global.name
}))(App);
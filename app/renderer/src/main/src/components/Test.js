import React, { memo } from 'react';
import { Tag } from 'antd';
import { connect } from 'dva'

@connect(({ global }) => ({
    name: global.name
}))
class App extends React.PureComponent {

    render() {
        console.log(this.props.name);
        return (
            <div className="App">
                <Tag color="red">red</Tag>
            </div>
        )
    }
}
export default memo(App)
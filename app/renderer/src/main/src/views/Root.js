import React from 'react'
import { renderRoutes } from 'react-router-config'
import { Link } from 'dva/router'

const Root = ({ route }) => (
    <div>
        <h1>Root</h1>
        <Link to="/Home">prod</Link>切换
        <Link to="/App">test</Link>
        <br />
        <Link to="/user">用户</Link>
        {renderRoutes(route.routes)}
    </div>
);


export default Root
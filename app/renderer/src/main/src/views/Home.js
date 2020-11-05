import React, { useEffect, useState } from 'react'
import { get } from '../utils/request'
import { connect } from 'dva'

const Root = (props) => {
    let [data, setData] = useState({})
    useEffect(() => {
        async function fetchData() {
            const response = await get("/tag/list", {
                name: 'xikun',
                age: 2
            })
            console.log(response);
            setData(response)
        }
        fetchData();
    }, [])
    return (
        <div>
            <h1>Home{data.name}</h1>
        </div>
    )
}


export default connect(({ global }) => ({
    xikun: global.name
}))(Root)
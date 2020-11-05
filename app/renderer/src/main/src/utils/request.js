import { ipcRenderer } from 'electron'

export async function get(url, parms) {
    parms.method = 'get'
    try {
        const data = await ipcRenderer.invoke('request', url, parms)
        if (data.code === 200) {
            return data.data
        }
    } catch (error) {
        console.log(error);
        // throw new Error('请求失败!')

    }
}

export function post(url, data) {
    parms.method = 'post'
    return ipcRenderer.invoke('request', url, data)
}
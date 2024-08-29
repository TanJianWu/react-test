import { createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux"
import axios from 'axios'

const channelStore = createSlice({
    name: 'channel',

    initialState: {
        channellist: [],
    },

    reducers: {
        setChannels(state, action) {
            state.channellist = action.payload
        }
    }

})

// 解构出来actionCreater函数
const { setChannels } = channelStore.actions;

//异步请求部分
const fetchChannellist = () => {
    return (async (dispatch) => {
        const res = await axios.get('http://geek.itheima.net/v1_0/channels')
        console.log(res.data.data.channels);
        dispatch(setChannels(res.data.data.channels));
    })
}

// 获取reducer
const render = channelStore.reducer

//按需方式导出actionCreater
export { setChannels, fetchChannellist }

//以默认导出的方式导出reducer
export default render

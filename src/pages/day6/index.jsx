

// 什么是Redux?
// Redux是React最常用的集中状态管理工具，类似于Vue中的Pinia(Vuex)，可以独立于框架运行作用:通过集中管理的方式管理应用的状态

import { useDispatch, useSelector } from "react-redux"

// 使用步骤:
// 1.定义一个 reducer 函数 (根据当前想要做的修改返回一个新的状态)2.使用createStore方法传入reducer函数 生成一个store实例对象
// 3.使用store实例的 subscribe方法 订阅数据的变化(数据一旦变化，可以得到通知)
// 4.使用store实例的 dispatch方法提交action对象 触发数据变化(告诉reducer你想怎么改数据)5.使用store实例的 getState方法 获取最新的状态数据更新到视图中

// 在React中使用redux，官方要求安装俩个其他插件-ReduxToolkit和react-redux
// 1.Redux Toolkit(RTK)-官方推荐编写Redux逻辑的方式，是一套工具的集合集，简化书写方式
// 2.react-redux-用来 链接 Redux和 React组件 的中间件
// npm i @reduxjs/toolkit react-redux

//在项目入口index.js添加store

//导入actionCreater
import { inscrement, decrement, addcrement } from './../../store/modules/counterStore'
import { fetchChannellist } from './../../store/modules/channelStore'
import { useEffect } from "react"

export default function Daysix() {
    const { count, msg } = useSelector(state => state.counter)
    const { channellist } = useSelector(state => state.channel)
    const dispatch = useDispatch()

    //使用useEffect触发异步请求执行
    // useEffect(() => {
    //     dispatch(fetchChannellist())
    //     console.log('channellist====' + channellist)
    // }, [dispatch])

    return (<>
        <div>
            <div>this is six component</div>
            <br />
            <span>{'redux同步获取数据'}</span>
            <span>{count} {msg}</span>
            <br />
            <button onClick={() => dispatch(decrement())}>-</button>
            {count}
            <button onClick={() => dispatch(inscrement())}>+</button>
            <button onClick={() => dispatch(addcrement(10))}>+10</button>
            <br />
            <br />
            <span>{'redux异步获取数据'}</span>
            <br />
            <button onClick={() => dispatch(fetchChannellist())}>异步获取列表</button>
            <ul>
                {channellist.map(item => <li key={item.id}>{item.name}</li>)}
            </ul>
        </div>
    </>)
}
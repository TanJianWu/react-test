
import { useEffect, useState } from "react"
import './index.css'

const Son = ({ onGetSonMsg }) => {
    const [count, setCount] = useState(0)
    //1. 渲染时开启一个定时器
    useEffect(() => {
        const timer = setInterval(() => {
            setCount(count + 1)
            console.log('定时器执行中...' + count)
            onGetSonMsg('定时器执行计数：' + count)
        }, 1000)

        //清除副作用
        return (()=>{
            //清除定时器
            clearInterval(timer);
        })
    }, [])

    return (
        <div className='son'>
            this is Son component
        </div>
    )
}

export default function Dayfour() {

    const [count, setCount] = useState(0)
    const [msg, setMsg] = useState('')

    //1.没有依赖项 初始渲染完成后 + 每次组件更新时 执行
    // useEffect(() => {
    //     console.log('函数副作用执行了')
    //     setMsg('函数副作用执行了' + count)
    // })

    //2.传入空数组依赖 初始渲染完成后 执行一次
    // useEffect(() => {
    //     console.log('函数副作用执行了')
    //     setMsg('函数副作用执行了' + count)
    // },[])


    //3.传入特定依赖项 初始渲染完成后 + 依赖项变化时 执行
    useEffect(() => {
        console.log('函数副作用执行了')
        setMsg('函数副作用执行了' + count)
    }, [count])

    //useEffect -- 清除副作用 (代码详见Son组件)
    //在useEffect中编写的由渲染本身引起的对接组件外部的操作，
    //社区也经常把它叫做副作用操作，比如在useEffect中开启了一个定时器，
    //我们想在组件卸载时把这个定时器再清理掉，这个过程就是清理副作用
    const [show, setShow] = useState(true)
    const [sonmessage, setSonMessage] = useState('')

    const getSonMsg = (msg) => {
        setSonMessage(msg)
    }

    return (
        <>
            <div>
                <div>this is four component</div>
                <br></br>

                <span>useEffect函数副作用：</span>
                <br /><br />
                <button onClick={() => setCount(count + 1)}>+{count}</button>
                <br />
                <span>副作用执行后返回消息：{msg} </span>
                <br />
                <br />
                <span>useEffect清除副作用：</span>
                <br /><br />
                <span>Son组件定时器消息：{sonmessage}</span>
                {show && <Son onGetSonMsg={getSonMsg}></Son>}
                <br></br>
                <button onClick={() => setShow(true)}>加载Son组件</button>
                <button onClick={() => setShow(false)}>卸载Son组件</button>

            </div>
        </>
    )
}
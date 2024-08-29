//受控绑定表单

//1.声明一个react状态 - useState
//2.核心绑定流程
//2.1 通过value属性绑定react状态
//2.2 绑定onChange事件 通过事件参数e拿到输入框最新的值 反向修改到react状态身上

//React中获取DOM元素
//1. useRef生成ref对象 绑定到DOM标签上
//2. DOM可用时, ref.current获取dom

import { useRef, useState, createContext, useContext } from "react";
import './index.css'

function Son({ name, onGetSonMsg }) {
    console.log('name====' + name)
    const sonMsg = 'this is son messge'
    const [value, setValue] = useState('')
    return (
        <>
            <div className="son">
                this is Son
                <br></br>
                <span>这是父组件传值：<span style={{ color: 'aquamarine' }}>{name}</span></span>
                <br></br>
                <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
                <button onClick={() => onGetSonMsg(value)}>传消息到父组件</button>
            </div>
        </>
    )
}

//使用共同父组件实现兄弟组件之间传递数据
function A({ onGetAMsg }) {
    const name = 'this is A message'
    const [value, setValue] = useState('')
    return (
        <>
            <div className="A">this is A component
                <br></br>
                <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
                <button onClick={() => onGetAMsg(value)}>A组件通过父组件传递消息到B组件</button>
            </div>
        </>
    )
}

function B({ name }) {
    return (
        <>
            <div className="B">this is B component
                <br></br>
                <span>接收A组件传过来的消息：{name}</span>
            </div>

        </>
    )
}


//使用Context机制跨层级组件通信
//1.createContext方法创建一个上下文对象
const MsgContext = createContext();

//2.在顶层组件，通过Provider组件提供数据


//3.在底层组件，通过useContext钩子函数接收数据

function C() {
    const msg = useContext(MsgContext)
    return (
        <>
            <div className="C">this is C component
                <span>接收传过来的消息：{msg}</span>
                <D></D>
            </div>
        </>
    )
}

function D() {
    const msg = useContext(MsgContext)
    return (
        <>
            <div className="D">this is D component
                <br></br>
                <span>接收传过来的消息：{msg}</span>
            </div>
        </>
    )
}

export default function Daytwo() {

    //声明状态变量
    const [inputValue, setInputValue] = useState('')
    const [message, setMessage] = useState('')
    const [refvalue, setRefvalue] = useState({})

    //声明ref变量
    const inputRef = useRef(null)

    const showDom = () => {
        console.dir(inputRef.current)
        setRefvalue(inputRef.current)
        console.log(refvalue.value)
    }

    const getMsg = (msg) => {
        console.log(msg)
        setMessage(msg)
    }

    const [messageA, setMessageA] = useState('')
    const getAMsg = (Amsg) => {
        console.log(Amsg)
        setMessageA(Amsg)
    }

    const [messageD, setMessageD] = useState('')

    return (
        <>
            <div>
                {/**表单绑定变量 */}
                <span>{"表单绑定变量"}</span>
                <input type="text" value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <br></br>
                {/**获取DOM元素 */}
                <span>{"获取DOM元素"}</span>
                <input type="text" ref={inputRef} />
                <button onClick={showDom}>获取DOM元素</button>
                <br></br>
                <span>{refvalue.value}</span>
            </div>
        </>
    )
}

import { useState } from "react"

//概念:自定义Hook是以 use 打头的函数，通过自定义Hook函数可以用来实现逻辑的封装和复用
//封装自定义hook通用思路
//1.声明一个以use开头的函数
//2.在函数体内封装可复用的逻辑（只要时可复用的逻辑）
//3.把组件中用到的状态或者回调函数return出去（以对象或者数组）
//4.在哪个组件中要用到这个逻辑，就执行这个函数解构出来的状态和回调进行使用

function useToggle() {

    // 可复用的逻辑代码
    const [value, setValue] = useState(true)

    const toggle = () => setValue(!value)

    //哪些状态和回调函数需要在其他组件中使用 return

    //数组方式return
    // return [
    //     value,
    //     toggle
    // ]

    //对象方式return
    return {
        value,
        toggle
    }
}

//使用hook获取数据


export default function Dayfive() {

    //使用自定义Hook钩子函数
    //const [value, toggle] = useToggle()      //数组方式return
    const { value, toggle } = useToggle()      //对象方式return

    return (
        <>
            <div>
                <div>this is five component</div>
                <div>
                    {value && <div>this is div</div>}
                    <button onClick={toggle}>toggle</button>
                </div>
            </div>
        </>
    )
}
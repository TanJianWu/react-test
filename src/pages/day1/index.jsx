
//项目的根目录
// App -> index.js -> public/index.html(root)

import React from 'react';
import { useState } from "react"
import { Link } from 'react-router-dom'
import './index.css'

//const count = 100

function getName() {
  return 'jack'
}

const list = [
  { id: 1001, name: 'Vue' },
  { id: 1002, name: 'React' },
  { id: 1003, name: 'Angular' }
]

const isLogin = true

const articleType = 1  //0, 1, 3

const getArticleTem = () => {
  if (articleType === 0) {
    return <div>我是无图文章</div>
  } else if (articleType === 1) {
    return <div>我是单图模式</div>
  } else {
    return <div>我是三图模式</div>
  }
}

/**定义组件 */
function Button() {
  //组件内部逻辑
  return <button>custom Button</button>
}

const style = {
  color: 'green',
  fontSize: '20px'
}

// const Home = () => <h2>Home</h2>
// const About = () => <h2>About</h2>

function Dayone() {

  //useState
  const [count, setCount] = useState(0)
  const [form, setForm] = useState({ name: 'jack' })

  const handleClick = (name, e) => {
    console.log('button点击了' + name)
    console.dir(e)
  }

  const handleCountClick = () => {
    setCount(count + 1)
  }

  const changeForm = () => {
    //错误写法，直接修改，但不会渲染
    //form.name = 'john'
    //正确写法, setForm传入一个全新的对象
    setForm({
      ...form, name: 'john'
    })
  }

  return (

    <div className="App">
      this is App
      {/* 使用引号传递字符串*/}
      {'this is message!'}
      {/* 识别js逻辑 */}
      {count}
      {/* 函数调用 */}
      {getName()}
      {/* 方法调用 */}
      {new Date().getDate()}
      {/* 使用js对象 */}
      <div style={{ color: 'red' }}>this is div</div>
      <ul>
        {list.map(item => <li key={item.id}>{item.name}</li>)}
      </ul>

      {isLogin && <span>this is span</span>}
      <br></br>
      {isLogin ? <span>jack</span> : <span>loading...</span>}
      <br></br>

      {/* 通过调用函数渲染模板 */}
      {getArticleTem()}
      <br></br>
      {/** 事件调用 */}
      <button onClick={(e) => handleClick('jack', e)}>click me</button>
      <br></br>
      {/**自闭合 */}
      <Button />
      {/**成对标签 */}
      <Button></Button>
      <br></br>
      <button onClick={handleCountClick}>{count}</button>
      <button onClick={() => { setCount(count + 1) }}>{count}</button>
      <br></br>
      <button onClick={changeForm}>changForm--{form.name}</button>
      <br></br>
      {/**行内样式控制 */}
      <span style={{ color: 'blue', fontSize: '20px' }}>this is span 行内修改样式</span>
      <span style={style}>this is span 变量修改样式</span>
      <br></br>
      {/**通过class类名控制 */}
      <span className='foo'>this is span 类名修改样式</span>
      <br></br>
      {/**路由跳转评论页 */}

      <Link to="/">Home</Link>
      <Link to="/about">About</Link>

      {/* <Route path="/" exact component={Home} />
        <Route path="/about/" component={About} /> */}
    </div>

  );
}

export default Dayone;

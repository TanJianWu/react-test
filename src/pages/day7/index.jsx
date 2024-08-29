

import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom'

//1. 创建router实例对象并且配置路由对应关系

const routes = [
    {
        name: 'login',
        path: '/login',
        element: <div>我是登录页</div>

    },
    {
        name: 'page1',
        path: '/pages/modules1/Page1',
        //element: <Page1 />
    },
    {
        name: 'page2',
        path: '/pages/modules1/Page2',
        //element: <Page2/>
    },
    {
        name: 'page3',
        path: '/pages/modules2/Page3',
        //element: <Page3/>
    },
    {
        name: 'page4',
        path: '/pages/modules2/Page4',
        //element: <Page4 />
    },
    {
        name: 'page5',
        path: '/page5',
        //element: <div>this is page5</div>
    }
]

export default function Dayseven() {

    return (
        <>
            <div>
                this is seven component
            </div>
            <ul>
                {routes.map(item => <li><Link to={item.path}>item.name</Link></li>)}
            </ul>

            <br />

        </>
    )
}

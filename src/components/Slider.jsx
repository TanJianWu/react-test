import React from "react";
import { Link } from 'react-router-dom'
import './Slider.css';

const routerlist = [
    {
        id: '1',
        name: '基础',
        path: '/pages/Dayone',
        component: 'Dayone',
    },
    {
        id: '2',
        name: '状态管理',
        path: '/pages/Daytwo',
        component: 'Daytwo',
    },
    {
        id: '3',
        name: '组件通信',
        path: '/pages/Daythree',
        component: 'Daythree',
    },
    {
        id: '4',
        name: '副作用useEffect',
        path: '/pages/Dayfour',
        component: 'Dayfour',
    },
    {
        id: '5',
        name: '自定义钩子Hook',
        path: '/pages/Dayfive',
        component: 'Dayfive',
    },
    {
        id: '6',
        name: '状态管理Redux',
        path: '/pages/Daysix',
        component: 'Daysix',
    },
    {
        id: '',
        name: '路由导航Router',
        path: '/pages/Dayseven',
        component: 'Dayseven',
    },
]

export default function Slider() {

    return (

        <div className='slider'>Slider
            <div>
                <nav>
                    <ul>
                        {routerlist.map(item => <li key={item.id}><Link to={item.path}>{item.name}</Link></li>)}
                    </ul>
                </nav>
            </div>
        </div>

    )
}

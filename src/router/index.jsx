import { createBrowserRouter } from "react-router-dom";
import Home from '../pages/Home';
import Login from '../pages/Login';
import Comment from '../pages/Commet'
import Dayone from '../pages/day1/index'
import Daytwo from '../pages/day2/index'
import Daythree from '../pages/day3/index'
import Dayfour from '../pages/day4/index'
import Dayfive from '../pages/day5/index'
import Daysix from '../pages/day6/index'
import Dayseven from '../pages/day7/index'
import Dayeight from '../pages/day8/index'
import Daynight from '../pages/day9/index'
import Dayten from '../pages/day10/index'
import ErrorPage from '../pages/ErrorPage'
import Page1 from '../pages/day7/modules1/pages1'
import Page2 from '../pages/day7/modules1/pages2'
import Page3 from '../pages/day7/modules2/pages3'
import Page4 from '../pages/day7/modules2/pages4'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/pages/Comment',
                element: <Comment />,
            },
            {
                path: '/pages/Dayone',
                element: <Dayone />,
            },
            {
                path: '/pages/Daytwo',
                element: <Daytwo />,
            },
            {
                path: '/pages/Daythree',
                element: <Daythree />,
            },
            {
                path: '/pages/Dayfour',
                element: <Dayfour />,
            },
            {
                path: '/pages/Dayfive',
                element: <Dayfive />,
            },
            {
                path: '/pages/Daysix',
                element: <Daysix />,
            },
            {
                path: '/pages/Dayseven',
                element: <Dayseven />,
            },
            {
                path: '/pages/Dayeight',
                element: <Dayeight />,
            },
            {
                path: '/pages/Daynight',
                element: <Daynight />,
            },
            {
                path: '/pages/Dayten',
                element: <Dayten />,
            },
            {
                path: '/pages/modules1/Page1',
                element: <Page1 />,
            },
            {
                path: '/pages/modules1/Page2',
                element: <Page2 />,
            },
            {
                path: '/pages/modules2/Page3',
                element: <Page3 />,
            },
            {
                path: '/pages/modules2/Page4',
                element: <Page4 />,
            },

            {
                path: '/pages5',
                element: <div>this is page5555</div>
            },


        ]
    },
    {
        path: '/login',
        element: <Login />,
        errorElement: <ErrorPage />,
    },
    {
        path: '/page5',
        element: <div>this is page5555</div>,
        errorElement: <ErrorPage />,
    },

    // {
    //     path: '/comment',
    //     element: <Comment/>,
    // },
    {
        path: '*',      //通配符 代表除上面提到的路径，其他都跳转到errorpage页面
        element: <ErrorPage />
    }
])

export default router
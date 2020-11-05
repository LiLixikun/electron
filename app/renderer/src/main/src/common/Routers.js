import Home from '../views/Home'
import Root from '../views/Root'
import App from '../views/App'
import User from '../views/User'

const routes = [
    {
        path: '/user',
        component: User,
        exact: true
    },
    {
        path: '/',
        component: Root,
        routes: [
            {
                path: "/home",
                component: Home
            },
            {
                path: "/app",
                component: App
            }
        ]
    }
];

export default routes

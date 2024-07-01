const home = [
    {
        path: "/",
        component: () => import("../layouts/HomePage.vue"),
        children: [
            {
                path: '',
                name: 'home-users',
                component: () => import("../components/Body.vue"),
            }
        ]
    },
    {
        path: "/",
        component: () => import("../layouts/HomePage.vue"),
        children: [
            {
                path: 'cate',
                name: 'category-users',
                component: () => import("../components/Category.vue"),
            }
        ]
    }
]
export default home;
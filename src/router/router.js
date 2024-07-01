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
                path: 'category',
                name: 'category-users',
                component: () => import("../components/Category.vue"),
            }
        ]
    },
    {
        path: "/",
        component: () => import("../layouts/HomePage.vue"),
        children: [
            {
                path: 'single',
                name: 'single-users',
                component: () => import("../components/SingleNew.vue"),
            }
        ]
    },
    {
        path: "/",
        component: () => import("../layouts/HomePage.vue"),
        children: [
            {
                path: 'contact',
                name: 'contact-users',
                component: () => import("../components/Contact.vue"),
            }
        ]
    }
]
export default home;
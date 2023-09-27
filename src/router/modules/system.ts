export default {
    path: '/system',
    name: 'system',
    component: () => import('/@/layout/routerView/parent.vue'),
    redirect: '/system/menu',
    meta: {
        title: '系统设置',
        isLink: '',
        isHide: false,
        isIframe: false,
        permissions:['/system'],
        icon: 'iconfont icon-xitongshezhi',
    },
    children: [
        {
            path: '/system/menu',
            name: 'systemMenu',
            component: () => import('/@/views/system/menu/index.vue'),
            meta: {
                title: '菜单管理',
                isLink: '',
                isHide: false,
                isIframe: false,
                permissions:['/system/menu'],
                icon: 'iconfont icon-caidan',
            },
        },
        {
            path: '/system/role',
            name: 'systemRole',
            component: () => import('/@/views/system/role/index.vue'),
            meta: {
                title: '角色管理',
                isLink: '',
                isHide: false,
                isIframe: false,
                permissions:['/system/role'],
                icon: 'ele-ColdDrink',
            },
        },
        {
            path: '/system/user',
            name: 'systemUser',
            component: () => import('/@/views/system/user/index.vue'),
            meta: {
                title: '用户管理',
                isLink: '',
                isHide: false,
                isIframe: false,
                permissions:['/system/user'],
                icon: 'iconfont icon-icon-',
            },
        },
        {
            path: '/system/dept',
            name: 'systemDept',
            component: () => import('/@/views/system/dept/index.vue'),
            meta: {
                title: '部门管理',
                isLink: '',
                isHide: false,
                isIframe: false,
                permissions:['/system/dept'],
                icon: 'ele-OfficeBuilding',
            },
        },
        {
            path: '/system/dic',
            name: 'systemDic',
            component: () => import('/@/views/system/dic/index.vue'),
            meta: {
                title: '字典管理',
                isLink: '',
                isHide: false,
                isIframe: false,
                permissions:['/system/dic'],
                icon: 'ele-SetUp',
            },
        }
    ]
} as RouteItem;
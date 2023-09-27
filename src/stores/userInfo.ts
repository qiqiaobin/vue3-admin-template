import { defineStore } from 'pinia';
import Cookies from 'js-cookie';
import { Session } from '/@/utils/storage';

/**
 * 用户信息
 * @methods setUserInfos 设置用户信息
 */
export const useUserInfo = defineStore('userInfo', {
	state: (): UserInfosState => ({
		userInfos: {
			userName: '',
			photo: '',
			time: 0,
      permissions: [],
		},
	}),
	actions: {
		async setUserInfos() {
      // 模拟数据，请求接口时，记得删除多余代码及对应依赖的引入
					const userName = Cookies.get('userName');
					// 模拟数据
          let defaultpermissions: Array<string> = [];
					// admin 权限标识
          let adminPermissions: Array<string> = ['/home','/chart','/personal','/tree','/system','/system/menu','/system/role','/system/user','/system/role/add','/system/menu/add'];
					// test 权限标识
          let testPermissions: Array<string> = ['/home','/personal','/system','/system/menu','/system/role','/system/user'];
					// 不同用户模拟不同的用户权限
					if (userName === 'admin') {
            defaultpermissions = adminPermissions;
					} else {
            defaultpermissions = testPermissions;
					}
					// 用户信息模拟数据
					const userInfos = {
						userName: userName,
						photo:
						userName === 'admin'
							? 'https://img2.baidu.com/it/u=1978192862,2048448374&fm=253&fmt=auto&app=138&f=JPEG?w=504&h=500'
							: 'https://img2.baidu.com/it/u=2370931438,70387529&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
						time: new Date().getTime(),
            permissions: defaultpermissions ,
					};
					Session.set('userInfo', userInfos);

			// 存储用户信息到浏览器缓存
			if (Session.get('userInfo')) {
				this.userInfos = Session.get('userInfo');
			} else {
				this.userInfos = userInfos;
			}
		},
	},
});

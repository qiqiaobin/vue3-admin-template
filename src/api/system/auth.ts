import request from '/@/utils/request';

/**
* 角色查询
* @returns 返回接口数据
*/
export function getAllPerms() {
	return request({
		url: '/system/auth/perms',
		method: 'get',
	});
}

/**
 * 登录接口
 */
 class AuthApi {
	/**
	 * 获取用户信息
	 * @param params 
	 * @returns 
	 */
	getUserInfo() {
		return request({
			url: '/system/auth/userInfo',
			method: 'get',
		});
	}
	/**
	 * 获取菜单信息
	 * @param params 
	 * @returns 
	 */
	getMenu() {
		return request({
			url: '/system/auth/menu',
			method: 'get',
		});
	}
    getMenuIds(parameter:any) {
		return request({
			url: `/system/auth/menulist`,
			method: 'get',
            params: parameter,
		});
	}
}

export default new AuthApi()
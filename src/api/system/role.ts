import request from '/@/utils/request';


/**
* 角色查询
* @param parameter 要传的参数值
* @returns 返回接口数据
*/
export function	getRole(id:number) {
	return request({
		url: `/system/roles/${id}`,
		method: 'get',
	});
}

/**
* 角色列表查询
* @param parameter 要传的参数值
* @returns 返回接口数据
*/
export function	getRolesList() {
	return request({
		url: '/system/roles',
		method: 'get',
	});
}

/**
* 新增角色
* @param parameter 
* @returns 
*/
export function	addRole(parameter: any) {
	return request({
		url: '/system/roles',
		method: 'post',
		data: parameter,
	});
}
	
/**
* 更新角色
* @param parameter 
* @returns 
*/
export function	updateRole(parameter: any) {
	return request({
		url: '/system/roles',
		method: 'put',
		data: parameter,
	});
}	

/**
* 删除角色
* @param parameter 
* @returns 
*/
export function	delRole(id:number) {
	return request({
		url: `/system/role/${id}`,
		method: 'delete',
	});
}

/**
* 权限菜单查询
* @param parameter 要传的参数值
* @returns 返回接口数据
*/
export function	getAllOps() {
	return request({
		url: '/system/operation',
		method: 'get',
	});
}


/**
* 保存角色菜单权限
* @param parameter 要传的参数值
* @returns 
*/
export function	saveRoleOps(id:number, data:any) {
	return request({
		url: `/system/role/${id}/ops`,
		method: 'put',
		data: data,
	});
}

/**
* 获取角色菜单权限
* @param parameter 要传的参数值
* @returns 
*/
export function	getRoleOps(id:number) {
	return request({
		url: `/system/role/${id}/ops`,
		method: 'get',
	});
}

/**
* 获取当前登录用户的菜单权限
* @param parameter 要传的参数值
* @returns 
*/
export function	getPerms(username:any) {
	return request({
		url: `/system/self/perms`,
		method: 'get',
    params: username,
	});
}


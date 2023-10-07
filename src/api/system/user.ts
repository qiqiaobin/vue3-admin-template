import request from '/@/utils/request';

/**
* 用户查询
* @param parameter 要传的参数值
* @returns 返回接口数据
*/
export function	queryUser(parameter: any) {
	return request({
		url: '/system/users',
		method: 'get',
		params: parameter,
	});
}

/**
* 新增用户
* @param parameter 
* @returns 
*/
export function	addUser(parameter: any) {
	return request({
		url: '/system/users',
		method: 'post',
		data: parameter,
	});
}
	
/**
* 更新用户
* @param parameter 
* @returns 
*/
export function updateUser(id:number, data:any) {
	return request({
		url: `/system/user/${id}/profile`,
		method: 'put',
		data: data,
	});
}

/**
* 删除用户
* @param parameter 
* @returns 
*/
export function userDel(id:number) {
	return request({
		url: `/system/user/${id}`,
		method: 'delete',
	});
}

/**
* 用户详情
* @param parameter 
* @returns 
*/
export function getUserInfo(id:number) {
	return request({
		url: `/system/user/${id}/profile`,
		method: 'get',
			//params: parameter
	});
}

/**
* 重置密码
* @param parameter 
* @returns 
*/
export function  RsetPwd(id:number, data:any) {
    return request({
        url: `/system/user/${id}/password`, 
        method: 'put',
        data: data,
    });
}
import request from '/@/utils/request';

/**
* 用户查询
* @param parameter 要传的参数值
* @returns 返回接口数据
*/
export function	queryLoginLog(parameter: any) {
	return request({
		url: '/system/logs/login',
		method: 'get',
		params: parameter,
	});
}

import request from '/@/utils/request';

/**
* 获取验证码
* @param params 要传的参数值
* @returns 返回接口数据
*/
export function	captcha() {
	return request({
		url: '/auth/captcha',
		method: 'post',
	});
}

/**
* 用户登录
* @param params 要传的参数值
* @returns 返回接口数据
*/
export function	login(params: object) {
	return request({
		url: '/auth/login',
		method: 'post',
		data: params,
	});
}

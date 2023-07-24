/**
 * pinia 类型定义
 */

// 用户信息
declare interface UserInfos<T = any> {
	authBtnList: string[];
	photo: string;
	roles: string[];
	time: number;
	userName: string;
	[key: string]: T;
}
declare interface UserInfosState {
	userInfos: UserInfos;
}

// 路由缓存列表
declare interface KeepAliveNamesState {
	keepAliveNames: string[];
	cachedViews: string[];
}

// 后端返回原始路由(未处理时)
declare interface RequestOldRoutesState {
	requestOldRoutes: string[];
}

// 路由列表
declare interface RoutesListState<T = any> {
	routesList: T[];
	isColumnsMenuHover: Boolean;
	isColumnsNavHover: Boolean;
}

// 布局配置
declare interface ThemeConfigState {
	themeConfig: {
		//isDrawer: boolean;
		//primary: string;
		//topBar: string;
		//topBarColor: string;
		//menuBar: string;
		//menuBarColor: string;
		//menuBarActiveColor: string;
		//columnsMenuBar: string;
		//columnsMenuBarColor: string;
		isCollapse: boolean;
		//isBreadcrumb: boolean;
		//isBreadcrumbIcon: boolean;
		animation: string;
		layout: string;
		isRequestRoutes: boolean;
		globalTitle: string;
		globalViceTitle: string;
		globalViceTitleMsg: string;
		globalI18n: string;
		globalComponentSize: string;
	};
}

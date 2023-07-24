import { defineStore } from 'pinia';

/**
 * 布局配置
 * 修复：https://gitee.com/lyt-top/vue-next-admin/issues/I567R1，感谢@lanbao123
 * 2020.05.28 by lyt 优化。开发时配置不生效问题
 * 修改配置时：
 * 1、需要每次都清理 `window.localStorage` 浏览器永久缓存
 * 2、或者点击布局配置最底部 `一键恢复默认` 按钮即可看到效果
 */
export const useThemeConfig = defineStore('themeConfig', {
	state: (): ThemeConfigState => ({
		themeConfig: {
			// 是否开启布局配置抽屉
			//isDrawer: false,

			/**
			 * 全局主题
			 */
			// 默认 primary 主题颜色
			//primary: '#3a84ff',

			/**
			 * 顶栏设置
			 */
			// 默认顶栏导航背景颜色
			//topBar: '#182132',
			// 默认顶栏导航字体颜色
			//topBarColor: '#979ba5',

			/**
			 * 菜单设置
			 */
			// 默认菜单导航背景颜色
			//menuBar: '#ffffff',
			// 默认菜单导航字体颜色
			//menuBarColor: '#606266',
			// 默认菜单高亮背景色
			//menuBarActiveColor: '#e1ecff',

			/**
			 * 分栏设置
			 */
			// 默认分栏菜单背景颜色
			//columnsMenuBar: '#ffffff',
			// 默认分栏菜单字体颜色
			//columnsMenuBarColor: '#e6e6e6',

			/**
			 * 界面设置
			 */
			// 是否开启菜单水平折叠效果
			isCollapse: false,

			/**
			 * 其它设置
			 */
			// 主页面切换动画：可选值"<slide-right|slide-left|opacitys>"，默认 slide-right
			animation: 'slide-right',

			/**
			 * 布局切换
			 * 注意：为了演示，切换布局时，颜色会被还原成默认，代码位置：/@/layout/navBars/topBar/setings.vue
			 * 中的 `initSetLayoutChange(设置布局切换，重置主题样式)` 方法
			 */
			// 布局切换：可选值"<defaults|classic|transverse|columns>"，默认 defaults
			layout: 'classic',

			/**
			 * 后端控制路由
			 */
			// 是否开启后端控制路由
			isRequestRoutes: false,

			/**
			 * 全局网站标题 / 副标题
			 */
			// 网站主标题（菜单导航、浏览器当前网页标题）
			globalTitle: 'vue3-admin',
			// 网站副标题（登录页顶部文字）
			globalViceTitle: 'vue3-admin',
			// 网站副标题（登录页顶部文字）
			globalViceTitleMsg: '专注、免费、开源、维护、解疑',
			// 默认初始语言，可选值"<zh-cn|en|zh-tw>"，默认 zh-cn
			globalI18n: 'zh-cn',
			// 默认全局组件大小，可选值"<large|'default'|small>"，默认 'large'
			globalComponentSize: 'large',
		},
	}),
	actions: {
		setThemeConfig(data: ThemeConfigState) {
			this.themeConfig = data.themeConfig;
		},
	},
});

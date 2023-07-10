<template>
	<el-config-provider :size="getGlobalComponentSize" :locale="zhCn">
		<router-view  />
	</el-config-provider>
</template>

<script setup lang="ts" name="app">
import { computed, onBeforeMount, onMounted, onUnmounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import zhCn from 'element-plus/es/locale/lang/zh-cn';
import other from '/@/utils/other';
import mittBus from '/@/utils/mitt';
import setIntroduction from '/@/utils/setIconfont';

// 定义变量内容
const route = useRoute();

// 获取全局组件大小
const getGlobalComponentSize = computed(() => {
	return other.globalComponentSize();
});
// 设置初始化，防止刷新时恢复默认
onBeforeMount(() => {
	// 设置批量第三方 icon 图标
	setIntroduction.cssCdn();
	// 设置批量第三方 js
	setIntroduction.jsCdn();
});
// 页面加载时
onMounted(() => {
});
// 页面销毁时，关闭监听布局配置/i18n监听
onUnmounted(() => {
	mittBus.off('openSetingsDrawer', () => {});
});
// 监听路由的变化，设置网站标题
watch(
	() => route.path,
	() => {
		other.useTitle();
	},
	{
		deep: true,
	}
);
</script>

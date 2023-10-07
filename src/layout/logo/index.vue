<template>
	<div class="layout-logo" @click="onThemeConfigChange">
		<img :src="logo" class="layout-logo-medium-img" />
		<span>
      {{ themeConfig.globalTitle }}
    </span>
	</div>
</template>

<script setup lang="ts" name="layoutLogo">
import { storeToRefs } from 'pinia';
import { useThemeConfig } from '/@/stores/themeConfig';
import logo from '/@/assets/logo.svg';

// 定义变量内容
const storesThemeConfig = useThemeConfig();
const { themeConfig } = storeToRefs(storesThemeConfig);

// logo 点击实现菜单展开/收起
const onThemeConfigChange = () => {
	themeConfig.value.isCollapse = !themeConfig.value.isCollapse;
};
</script>

<style scoped lang="scss">
.layout-logo {
	width: 292px;
	height: 60px;
	display: flex;
	align-items: center;
	box-shadow: rgb(0 21 41 / 2%) 0px 1px 4px;
	color: #ffffff;
	font-size: 16px;
	cursor: pointer;
	animation: logoAnimation 0.3s ease-in-out;
	span {
		white-space: nowrap;
		display: inline-block;
    padding-left: 13px;
	}
	&:hover {
		span {
			color: var(--color-primary-light-2);
		}
	}
	&-medium-img {
		width: 20px;
		margin-right: 5px;
	}
}
.layout-logo-size {
  font-size: 16px;
	height: 58px;
  line-height: 58px;
  margin-left: 33px;
  padding-left: 38px;
	display: flex;
	cursor: pointer;
	animation: logoAnimation 0.3s ease-in-out;
	&-img {
		width: 20px;
		margin: auto;
	}
	&:hover {
		img {
			animation: logoAnimation 0.3s ease-in-out;
		}
	}
}
</style>

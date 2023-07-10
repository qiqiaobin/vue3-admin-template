// aside
declare type AsideState = {
	menuList: RouteRecordRaw[];
	clientWidth: number;
};

// navBars breadcrumb
declare type BreadcrumbState<T = any> = {
	breadcrumbList: T[];
	routeSplit: string[];
	routeSplitFirst: string;
	routeSplitIndex: number;
};

// navBars search
declare type SearchState<T = any> = {
	isShowSearch: boolean;
	menuQuery: string;
	tagsViewList: T[];
};

// navBars parent
declare type ParentViewState<T = any> = {
	refreshRouterViewKey: string;
	iframeRefreshKey: string;
	keepAliveNameList: string[];
	iframeList: T[];
};

// navBars link
declare type LinkViewState = {
	title: string;
	isLink: string;
};

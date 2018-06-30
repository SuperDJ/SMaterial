import Vue from 'vue';
import Router from 'vue-router';

Vue.use( Router );

const routes = [
	{
		path: '/',
		component: () => import('@/layouts'),
		children: [
            {
                path: '',
				name: 'index',
				meta: {
					title: 'Home'
				},
                component: () => import('@/pages')
			},
			{
				path: 'banners',
				name: 'banners',
				meta: {
					title: 'Banners'
				},
				component: () => import('@/pages/banners')
			},
			{
				path: 'buttons',
				name: 'buttons',
				meta: {
					title: 'Buttons'
				},
				component: () => import('@/pages/buttons')
			},
			{
				path: 'fab',
				name: 'fab',
				meta: {
					title: 'Buttons: FAB'
				},
				component: () => import('@/pages/fab')	
			},
			{
				path: 'cards',
				name: 'cards',
				meta: {
					title: 'Cards',
				},
				component: () => import('@/pages/cards')
			},
			{
				path: 'chips',
				name: 'chips',
				meta : {
					title: 'Chips'
				},
				component: () => import('@/pages/chips')
			},
			{
				path: 'lists',
				name: 'lists',
				meta: {
					title: 'Lists'
				},
				component: () => import('@/pages/lists')
			},
			{
				path: 'menus',
				name: 'menus',
				meta: {
					title: 'Menus'
				},
				component: () => import('@/pages/menus')
			},
			{
				path: 'progress-indicators',
				name: 'progress',
				meta: {
					title: 'Progress indicators'
				},
				component: () => import('@/pages/progress')
			},
			{
				path: 'selection-controls',
				name: 'selection',
				meta: {
					title: 'Selection controls'
				},
				component: () => import('@/pages/selection')
			},
			{
				path: 'bottom-sheet',
				name: 'bottom-sheet',
				meta: {
					title: 'Sheet bottom'
				},
				component: () => import('@/pages/sheet')
			},
			{
				path: 'snackbars',
				name: 'snackbar',
				meta: {
					title: 'Snackbars'
				},
				component: () => import('@/pages/snackbars')
			},
			{
				path: 'text-fields',
				name: 'text-fields',
				meta: {
					title: 'Text fields'
				},
				component: () => import('@/pages/text-fields')
			},
			{
				path: 'tooltips',
				name: 'tooltips',
				meta: {
					title: 'Tooltips'
				},
				component: () => import('@/pages/tooltips')
			},
			{
				path: 'typography',
				name: 'typography',
				meta: {
					title: 'Typography'
				},
				component: () => import('@/pages/typography')
			},
        ]
	},
];

const router = new Router({
	//mode: 'history',
	base: '/docs/',
	routes: routes
});

export default router;
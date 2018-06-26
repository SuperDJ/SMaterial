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
import Vue from 'vue';
import router from './router';
import Meta from 'vue-meta';

Vue.use( Meta );
Vue.component('MIcon', () => import('@/components/Icon'));
Vue.component('MButton', () => import('@/components/Button'));

import App from '@/pages/App';

new Vue({
	el: '#app',
	router,
	render: h => h( App )
});
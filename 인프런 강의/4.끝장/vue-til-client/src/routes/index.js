import Vue from 'vue';
import VueRouter from 'vue-router';
// import LoginPage from '@/views/LoginPage';
// import SignupPage from '@/views/SignupPage';

Vue.use(VueRouter);

export default new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/',
			redirect: '/intro',
		},
		{
			path: '/login',
			// component: LoginPage,
			component: () => import('@/views/LoginPage'),
			// 코드 스플리팅
		},
		{
			path: '/signup',
			// component: SignupPage,
			component: () => import('@/views/SignupPage'),
		},
		{
			// *는 path로 지정한 url이 아닌 모든 것을 의미한다.
			path: '*',
			component: () => import('@/views/NotFoundPage'),
			// not Found라는 메세지가 있는 페이지로 이동
			// 등록되지 않는 라우터에 대한 대처 콜백? 롤백? 라우터
		},
		{
			path: '/post',
			component: () => import('@/views/PostPage'),
		},
		{
			path: '/post/:id',
			component: () => import('@/views/PostEditPage'),
		},
		{
			path: '/intro',
			component: () => import('@/views/Intro'),
		},

		{
			path: '/bar',
			component: () => import('@/views/BarChartPage'),
		},
		{
			path: '/line',
			component: () => import('@/views/LineChartPage'),
		},
		{
			path: '/add',
			component: () => import('@/views/PostAddPage'),
		},
		{
			path: '/main',
			component: () => import('@/views/MainPage'),
		},
		{
			path: '/updatePage/:chartNo',
			component: () => import('@/views/chartUpdatePage'),
		},
		{
			path: '/main/bar',
			component: () => import('@/views/BarChartPage'),
		},
		{
			path: '/main/line',
			component: () => import('@/views/LineChartPage'),
		},
	],
});

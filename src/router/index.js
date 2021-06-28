import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/index.vue'

const routes = [
	{
		path: '/',
		name: 'Index',
		component: Index
	},
	{
		path: '/cart',
		name: 'Cart',
		component: () => import('../views/cart.vue')
	},
	{
		path: '/:productName',
		name: 'Details',
		component: () => import('../views/details.vue')
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router

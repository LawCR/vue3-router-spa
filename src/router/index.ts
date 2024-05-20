import isAuthenticatedGuard from '@/modules/auth/guards/is-authenticated.guard'
import NotFound from '@/modules/common/pages/NotFound.vue'
import HomePage from '@/modules/landing/pages/HomePage.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: () => import('@/modules/landing/layouts/LandingLayout.vue'),
      children: [
        {
          path: '/',
          name: 'home',
          component: HomePage,
        },
        {
          path: '/contact',
          name: 'contact',
          component: () => import('@/modules/landing/pages/ContactPage.vue'),
        },
        {
          path: '/features',
          name: 'features',
          component: () => import('@/modules/landing/pages/FeaturesPage.vue'),
        },
        {
          path: '/pricing',
          name: 'pricing',
          component: () => import('@/modules/landing/pages/PricingPage.vue'),
        },
        {
          path: '/pokemon/:id',
          name: 'pokemon-id',
          beforeEnter: [isAuthenticatedGuard],
          component: () => import('@/modules/pokemons/pages/PokemonPage.vue'),
          // props: true,
          props(to) {
            const id = Number(to.params.id)
            if (isNaN(id)) return { id: 1 }
            return { id }
          },
        },
      ],
    },
    {
      path: '/auth',
      name: 'auth',
      redirect: { name: 'login' },
      component: () => import('@/modules/auth/layouts/AuthLayout.vue'),
      children: [
        {
          path: 'login',
          name: 'login',
          component: () => import('@/modules/auth/pages/LoginPage.vue'),
        },
        {
          path: 'register',
          name: 'register',
          component: () => import('@/modules/auth/pages/RegisterPage.vue'),
        },
      ],
    },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
  ],
})

export default router

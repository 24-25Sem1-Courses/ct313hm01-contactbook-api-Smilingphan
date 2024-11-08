import { createWebHistory, createRouter } from 'vue-router';
import ContactBook from '@/views/ContactBook.vue';
const routes = [{
        path: '/',
        name: 'contactbook',
        component: ContactBook,

    },
    {
        path: '/:pathMAtch(.*)*',
        name: 'not found',
        component: () =>
            import ('@/views/NotFound.vue'),
    },
];
const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes,
});
export default router;
import {createRouter, createWebHistory} from 'vue-router'

import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'
import FAQs from '@/pages/FAQs.vue'
import Features from '@/pages/Features.vue'
import Pricing from '@/pages/Pricing.vue'

const router = createRouter({
    history : createWebHistory(),
    routes : [
        {path : '/', component : Home},
        {path : '/about', component : About},
        {path : '/faqs', component : FAQs},
        {path : '/features', component : Features},
        {path : '/pricing', component : Pricing}
    ]
});

export default router;
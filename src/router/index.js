// Import modules for initializing Router
import { createRouter, createWebHashHistory } from "vue-router";
import { nextTick } from 'vue'
// Import Views for Router
import EinführungView from "./../views/EinführungView.vue"
import AuszahlungssummeView from "./../views/AuszahlungssummeView.vue"
import StaalicheFörderungView from "./../views/StaalicheFörderungView.vue"
import ThemenauswhalView from "./../views/ThemenauswhalView.vue"
import store from '@/store'
import { format } from "prettier";


const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "Einführung",
            component: EinführungView
        },
        {
            path: "/payout-sum",
            name: "Auszahlungssumme",
            component: AuszahlungssummeView
        },
        {
            path: "/state-funding",
            name: "StaalicheFörderung",
            component: StaalicheFörderungView
        },
        {
            path: "/topic-selection",
            name: "Themenauswhal",
            component: ThemenauswhalView
        }
    ]
})

// Ensure path to be rendered matches step in state
// router.beforeEach((to, from, next) => {
//     const steps = store.state.steps
//     const currentStep = steps.find(item => item.status === 'active')

// //     console.log('from: ', from)
// //     console.log('to: ', to)

// //     next(currentStep)

// const isForceRedirection = from === null;
// console.log(from)
//     if (from.redirectedForm === undefined) {
//         console.log('User forced redirection via URL bar');
//         from.redirectedForm = {}
//         next(currentStep)
//     } else {
//         // Continue with the normal navigation
//         next();
//     }
// })

export default router
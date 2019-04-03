import Vue from "vue";
import Router from "vue-router";
import assignment1 from "./components/assignment1";
import assignment4 from "./components/assignment4";

Vue.use(Router);

export default new Router({
    routes:[
        {
            path: '/one',
            name:'Assignment One',
            component:assignment1
        },
        {
            path: '/four',
            name:'Assignment Four',
            component:assignment4
        }
    ]
})
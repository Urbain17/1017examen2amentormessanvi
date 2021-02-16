import Vue from  "vue"
import Router from "vue-router"


import Home from "./views/Home.vue"
import Contact from "./views/Contact.vue"
import Profil from "./views/Profil.vue"
import Projet from "./views/Projet.vue"




Vue.use (Router)

export default new Router ({
    routes: [
        {path:'/Home',  component: Home},
        {path: '/Contact', component: Contact},
        {path: '/Profil', component: Profil},
        {path: '/Projet', component: Projet},
       
    ]
})
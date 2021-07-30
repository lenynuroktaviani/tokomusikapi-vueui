import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/items/Home.vue'
import Createitems from '../views/items/Createitems.vue'
import Edititems from '../views/items/Edititems.vue'
import Detailitems from '../views/items/Detailitems.vue'
import Kategoris from '../views/kategoris/Kategoris.vue'
import Detailkategoris from '../views/kategoris/Detailkategoris.vue'
import Createkategoris from '../views/kategoris/Createkategoris.vue'
import Editkategoris from '../views/kategoris/Editkategoris.vue'
import Pembelis from '../views/pembelis/Pembelis.vue'
import Createpembelis from '../views/pembelis/Createpembelis.vue'
import Editpembelis from '../views/pembelis/Editpembelis.vue'
import Detailpembelis from '../views/pembelis/Detailpembelis.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/createitems',
    name: 'Createitems',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Createitems
  },
  {
    path: '/edititems/:id',
    name: 'Edititems',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Edititems
  },
  {
    path: '/detailitems/:id',
    name: 'Detailitems',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Detailitems
  },
  {
    path: '/kategoris',
    name: 'Kategoris',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Kategoris
  },
  {
    path: '/detailkategoris/:id',
    name: 'Detailkategoris',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Detailkategoris
  },
  {
    path: '/createkategoris',
    name: 'Createkategoris',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Createkategoris
  },
  {
    path: '/editkategoris/:id',
    name: 'Editkategoris',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Editkategoris
  },
  {
    path: '/pembelis',
    name: 'Pembelis',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Pembelis
  },
  {
    path: '/createpembelis',
    name: 'Createpembelis',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Createpembelis
  },
  {
    path: '/editpembelis/:id',
    name: 'Editpembelis',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Editpembelis
  },
  {
    path: '/detailpembelis/:id',
    name: 'Detailpembelis',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Detailpembelis
  },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router
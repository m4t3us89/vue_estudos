import Vue from 'vue'
import Router from 'vue-router'
import Authentication from './components/auth/Authentication'
import User from './components/users/User.vue'
//import Menu from './components/template/Menu'
//import MenuAlt from './components/template/MenuAlt'

// import Usuario from './components/usuario/Usuario'
// import UsuarioLista from './components/usuario/UsuarioLista'
// import UsuarioDetalhe from './components/usuario/UsuarioDetalhe'
// import UsuarioEditar from './components/usuario/UsuarioEditar'

Vue.use(Router)


const router = new Router({
    mode: 'history',
    routes: [{
        name: 'authentitcation',
        path: '/',
        component: Authentication
        },
        {
        name: 'user',
        path: '/users',
        component:  User
        }
        /*name: 'inicio',
        path: '/',
        // component: Inicio
        components: {
            default: Inicio,
            menu: Menu
        }
    }, {
        path: '/usuario',
        // component: Usuario,
        components: {
            default: Usuario,
            menu: MenuAlt,
            menuInferior: MenuAlt
        },
        props: true,
        children: [
            { path: '', component: UsuarioLista },
            { path: ':id', component: UsuarioDetalhe, props: true,
                beforeEnter: (to, from, next) => {
                    console.log('antes da rota -> usuário detalhe')
                    next()
                } },
            { path: ':id/editar', component: UsuarioEditar, props: true,
                name: 'editarUsuario' },
        ]
    }, {
        path: '/redirecionar',
        redirect: '/usuario'
    }, {
        path: '*',
        redirect: '/'*/
    ]
})

router.beforeEach((to, from, next) => {
    console.log('antes das rotas -> global' , to.path, from.path)
    next()
})

export default router
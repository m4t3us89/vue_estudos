<template>
    <div class="authentication">
        <h2>Login</h2>
        <hr>
        <form @submit.prevent="login">
            <input type="email" v-model="form.email" @keypress.enter="$refs.password.focus()">
            <input type="password" ref="password" v-model="form.password">
            <button type="submit" :disabled="loading">Logar</button>
        </form>
    </div>
</template>

<script>

const Axios = require( '../../services/axios.js' )

export default {
    data(){
        return{
            form:{
                email: 'allissonmateus89@gmail.com',
                password: '123',
            },
            loading : false
        }     
    },
    methods: {
        irParaInicio() {
            // this.$router.push('/')
            // this.$router.push({ path: '/' })
            this.$router.push({ name: 'inicio' })
        },
        async login(){
            this.loading = true
            try{
                const cred = await Axios.post('auth' , this.form)
                console.log(cred)
                localStorage.setItem('credenciais' , JSON.stringify(cred.data))
                this.$router.push({path: 'users'})
                
            }catch(error){
                console.log(error)
                //console.log(error.response.status,error.response.data,)
            }
            this.loading = false
            

        }
    }
}
</script>

<style>

</style>

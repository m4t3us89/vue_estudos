<template>
    <div class="authentication">
        <h2>Login</h2>
        <hr>
        <form @submit.prevent="login">
            <div v-if="msg" style="color: red;">{{ msg.message }}</div>
            <input type="email" v-model="form.email" @keypress.enter="$refs.password.focus()" :readonly="loading">
            <input type="password" ref="password" v-model="form.password" :readonly="loading">
            <button type="submit" :disabled="loading"><i class="fas fa-spinner fa-spin" v-if="loading"></i> Logar</button>
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
            loading : false,
            msg: null
        }     
    },
    methods: {
        irParaInicio() {
            // this.$router.push('/')
            // this.$router.push({ path: '/' })
            this.$router.push({ name: 'inicio' })
        },
        async login(){
            this.msg = null
            this.loading = true
            try{
                const cred = await Axios.post('auth' , this.form)
                console.log(cred)
                localStorage.setItem('credenciais' , JSON.stringify(cred.data))
                this.$router.push({path: 'users'})
                
            }catch(error){
                console.log(error)
                this.msg = error.response.data
                //console.log(error.response.status,error.response.data,)
            }
            this.loading = false
            

        }
    }
}
</script>

<style>

</style>

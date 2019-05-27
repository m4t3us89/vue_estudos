<template>
    <div class="authentication">
        <h2>Usuários</h2>
        <hr>
        <ul>
            <li v-for='user in users'>{{ user.name }} | {{ user.email }}</li>
        </ul>
    </div>
</template>

<script>
const Axios = require( '../../services/axios.js' )
export default {
    data(){
        return{
           users : []
        }     
    },
    methods: {
        irParaInicio() {
            // this.$router.push('/')
            // this.$router.push({ path: '/' })
            this.$router.push({ name: 'inicio' })
        },
        async usuarios(){
            try{
                const users = await Axios.get('users' , {headers:{
                    token : JSON.parse(localStorage.getItem('credenciais')).token
                }})
                this.users = users.data
                console.log(this.users)
            }catch(error){
                console.log(error.response.status,error.response.data,)
            }
        },
    }, 
    mounted() {
        this.usuarios()
    },
}
</script>

<style>

</style>

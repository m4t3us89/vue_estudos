<template>
    <div class="authentication">
        <h2>Error {{ codError  }}</h2>
        <hr> 
        <template v-if="codError == 401">
            Acesso Negado. <router-link to="/" tag="a">Login</router-link>
        </template>
        <template v-else-if="codError == 403">
            Sessão expirada. <a @click="logout" >Logout</a>
        </template>
        <template v-else>
            Página Não Encontrada
        </template>
    </div>
</template>

<script>

export default {
    data(){
        return{
            codError : this.$route.params.id ?  this.$route.params.id : 404
        }     
    },
    methods: {
        logout(){
			localStorage.removeItem('credenciais');
			this.$router.push('/')
		}
    }, 
    mounted() {
      
    },
}
</script>

<style>

</style>

<template>
	<div id="app">
		<h1>Rotas com VueRouter</h1> <a @click="logout" v-if="usuario" v-html="usuario"></a>
		<router-view name="menu"></router-view>
		<transition mode="out-in"
			enter-active-class="animated rubberBand"
			leave-active-class="animated rollOut">
			<router-view />
		</transition>
		<router-view name="menuInferior"></router-view>
	</div>
</template>

<script>
export default {
	data(){
		return {
			usuario : ''
		}
	},
	methods:{
		logout(){
			localStorage.removeItem('credenciais');
			this.$router.push('/')
		},
		montarHTMLProfile(){
			var url_storage = process.env.VUE_APP_ENV_URL_S3
			if( /local/.test(process.env.VUE_APP_ENV_API_URL) ) url_storage = process.env.VUE_APP_ENV_API_URL
			this.usuario = localStorage.getItem('credenciais') ? `Olá ${JSON.parse(localStorage.getItem('credenciais')).user.name} | Sair <br> <img src='${url_storage}/${JSON.parse(localStorage.getItem('credenciais')).user.profile}' />` : ''
		}
	},
	 watch: {
		'$route' (to, from) {
			this.montarHTMLProfile()
		}
  	},
	mounted(){
		this.montarHTMLProfile()
	}

}
</script>

<style>
	#app {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>

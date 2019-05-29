<template>
	<div id="app">
		<h1>Rotas com VueRouter</h1> <a @click="logout" v-if="usuario">{{ usuario }} | Sair</a>
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
			usuario : localStorage.getItem('credenciais') ? `Olá ${JSON.parse(localStorage.getItem('credenciais')).user.name}` : ''
		}
	},
	methods:{
		logout(){
			localStorage.removeItem('credenciais');
			this.$router.push('/')
		}
	},
	updated() {
   		this.usuario = localStorage.getItem('credenciais') ? `Olá ${JSON.parse(localStorage.getItem('credenciais')).user.name}` : ''
	},
	watch: {
		
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

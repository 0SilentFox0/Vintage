<template>
	<div id="app">
		<Header/>
		<Map/>
		<Footer/>
	</div>
</template>

<script>
	import Header from './components/Header.vue'
	import Map from "@/components/Map";
	import Footer from "@/components/Footer";

	export default {
		name: 'app',
		components: {
			Header,
			Map,
			Footer
		}
	}
</script>

<style>

</style>

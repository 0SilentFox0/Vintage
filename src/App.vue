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
	@font-face {
		font-family: "Suisse Intl";
		src: local("Suisse Intl"),
		url(/assets/fonts/SuisseIntl.woff2) format('woff2'),
		url(/assets/fonts/SuisseIntl.woff) format('woff');
	}

	@font-face {
		font-family: "Suisse Intl - Semi Bold";
		src: url(/assets/fonts/SuisseIntl-SemiBold.woff2) format('woff2'),
		url(/assets/fonts/SuisseIntl-SemiBold.woff) format('woff');
	}
</style>

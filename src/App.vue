<template>
	<div>
		<HeaderApp/>
		<ShadowModal v-if="GET_AUTH_VISIBLE"/>
		<Auth v-if="GET_AUTH_VISIBLE"/>
		
		<BodyApp/>
		<FooterApp/>
	</div>
</template>

<script>
import HeaderApp from './components/Header.vue';
import BodyApp from './components/Body.vue';
import FooterApp from './components/Footer.vue';
import Auth from './components/Auth.vue'
import ShadowModal from './components/ShadowModal.vue'
import { mapGetters } from 'vuex';

export default {
  name: 'App',
  components: {
    HeaderApp,
	BodyApp,
	FooterApp,
	Auth,
	ShadowModal,
  },
  data: function () {
    return {

	}
  },
  computed:{
	...mapGetters([
		'GET_AUTH_VISIBLE',
		'GET_REG_VISIBLE',
	])
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap');
/* Reset CSS */
html, body, div, span, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li,
fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary, time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	vertical-align: baseline;
}
article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav,
section {
	display: block;
}
	
body {
	line-height: 1.2;
}
ol {
	padding-left: 1.4em;
	list-style: decimal;
}
ul {
	padding-left: 1.4em;
	list-style: square;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
/*==========================*/
#app{
	font-family: 'Roboto', Tahoma, sans-serif;
}
.mainContent{
	display: flex;
    flex-direction: row;
	justify-content: space-between;
}
</style>

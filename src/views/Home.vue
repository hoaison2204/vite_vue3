<template>
	<h1 class="text-red-500">Home Page</h1>
	<p>
		{{ bodyText }}
	</p>
</template>

<script>
	export default {
		data(){
			return {
				bodyText: 'This is a website that call some of free APIs with router navigation'
			}
		}
	}
</script>

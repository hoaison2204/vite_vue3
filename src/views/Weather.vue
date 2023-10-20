<template>
	<div class="flex justify-center flex-col">
		<div>
			<h1 class="text-red-500">Weather app</h1>
		</div>

		<div class="design">
			<div class="">
				<div class="left-col">
					<div class="search">
						<input type="text" />
						<label>Hanoi, Vietnam</label>
					</div>
					<div class="information">
						<div class="top">
							<div class="">
								<img
									src=""
									alt=""
								/>
								<label for="">Image</label>
							</div>
						</div>
						<div class="bottom"></div>
					</div>
				</div>
			</div>
			<div class="">
				<div class="right-col">
					<div class="right-col-1"></div>
					<div class="right-col-2"></div>
					<div class="right-col-3"></div>
				</div>
			</div>
		</div>

		<div class="flex justify-center">
			<button
				class="rounded bg-blue-500 text-white p-2 hover:bg-blue-700"
				@click="callAPI"
			>
				Call API
			</button>
		</div>
		<div
			v-if="weatherData != null"
			class="weather-data"
		>
			<div>{{ weatherData }}</div>
			<div>
				<img
					:src="weatherData.current.condition.icon"
					:alt="weatherData.current.condition.text"
				/>
				<p>{{ weatherData.current.condition.text }}</p>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		props: {
			//props
		},
		data() {
			return {
				//data
				weatherData: null,
			}
		},
		mounted() {
			//mounted
		},
		created() {
			//created
		},
		methods: {
			//methods
			callAPI() {
				axios
					.get(
						'https://api.weatherapi.com/v1/current.json?key=670d1a129fd04bd39e582528232010&q=21.027763,105.834160&aqi=yes&lang=vi'
					)
					.then((response) => {
						this.weatherData = { ...response.data }
						console.log(response.data)
					})
					.catch((error) => {
						console.log('error', error)
					})
			},
		},
		computed: {
			//computed
		},
		watch: {
			//watch
		},
	}
</script>

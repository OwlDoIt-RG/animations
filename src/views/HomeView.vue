<script setup lang="ts">
	//import { useRoute } from "vue-router";

	//import router from "@/router";
</script>

<template>
	<div class="all">
		<Transition name="fade" mode="out-in">
			<div class="containt">
				<div class="bou">
					<HeroView />
				</div>
			</div>
		</Transition>
	</div>
</template>

<style scoped>
	.containt {
		height: 100vh;
		overflow-y: scroll;
		scroll-snap-type: y mandatory;
		scroll-padding-top: 1px;
		scroll-behavior: smooth;
	}
	.bou {
		height: 100vh;
		scroll-snap-align: center;
	}
</style>

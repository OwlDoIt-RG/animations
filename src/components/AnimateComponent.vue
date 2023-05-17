<script setup lang="ts">
	import gsap from "gsap";
	import { ScrollTrigger } from "gsap/ScrollTrigger";
	import { onMounted } from "vue";

	onMounted(() => {
		gsap.registerPlugin(ScrollTrigger);
		gsap.to(".testimg", {
			scrollTrigger: {
				trigger: ".testimg",
				start: "top top",
				end: "bottom center left",
				scrub: true,
				markers: false,
			},
			y: 50,
			perspective: 500,
			rotationY: 45,
			skewX: 2,
			scaleZ: 1.5,
			ease: "none",
			scale: 2,
			//crop the bottom of the image
			//cropBottom: 1000,
			rotationX: -1,
		});
		gsap.registerPlugin(ScrollTrigger);
		gsap.to(".testimg", {
			scrollTrigger: {
				trigger: ".testimg",
				start: "bottom center left",
				end: " center center",
				scrub: true,
				markers: false,
			},

			ease: "power2",
		});
	});
</script>

<template>
	<div class="contain">
		<!-- <div class="header">
			<h1>Scroll Animation Test</h1>
		</div> -->
		<img
			src="../assets/images/clearturnroad.jpg"
			class="testimg"
			alt="test image"
		/>

		<!-- <img
			src="../assets/images/clearturnroad.jpg"
			class="testimg"
			alt="test image"
		/> -->
	</div>
</template>

<style scoped>
	div#app {
		overflow: hidden;
		padding: none;
		margin: none;
		max-width: max-content;
	}
	.contain {
		width: 100vw;
		height: 100vh;
		overflow: hidden;
		margin: 0;
		padding: 0;
	}
	.testimg {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
		position: relative;
		overflow: hidden;
	}

	/* @keyframes move {
    0% {
        transform: scale(1);
    }
    25% {
        transform: scale(1.1);
    }
} */
</style>

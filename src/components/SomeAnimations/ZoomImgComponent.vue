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
			ease: "1",
			scale: 2,
			//crop the bottom of the image
			//cropBottom: 1000,
			rotationX: -1,
		});
	});
</script>

<template>
	<div>
		<!-- <div class="header">
			<h1>Scroll Animation Test</h1>
		</div> -->
		<img
			src="../assets/images/clearturnroad.jpg"
			class="testimg"
			alt="test image"
		/>
	</div>
</template>

<style scoped>
	.testimg {
		width: 100%;
		height: 100vh;
		object-fit: cover;
		object-position: center;
		position: relative;
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

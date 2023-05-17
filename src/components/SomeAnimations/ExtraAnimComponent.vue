<script setup lang="ts">
	import gsap from "gsap";
	import { ScrollTrigger } from "gsap/ScrollTrigger";

	import { onMounted } from "vue";

	gsap.registerPlugin(ScrollTrigger);

	onMounted(() => {
		const element = document.querySelector(".testimg"); // Replace with your element selector
		const element2 = document.querySelector(".testimg2"); // Replace with your element selector

		const timeline = gsap.timeline({
			scrollTrigger: {
				trigger: element,
				start: "top center",
				end: "bottom center",
				scrub: true,
				markers: false,
			},
		});

		timeline
			.from(element, {
				scale: 0.5,
				ease: "none",
			})
			.to(element2, {
				scale: 2.5,
				ease: "none",
			});
	});
</script>

<template>
	<div class="contain">
		<!-- <div class="header">
			<h1>Scroll Animation Test</h1>
		</div> -->
		<img src="../assets/images/path1.png" class="testimg" alt="test image" />
	</div>
	<div class="contain">
		<!-- <div class="header">
			<h1>Scroll Animation Test</h1>
		</div> -->
		<img src="../assets/images/path4.png" class="testimg" alt="test image" />
	</div>
	<!-- <div>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti itaque
		quisquam alias doloremque earum, harum inventore. Cum minus laboriosam ut
		rerum vitae, tempore quasi aut. Ipsam voluptatibus alias deserunt dolorem,
		odit neque fuga ullam, nam minus nesciunt dignissimos deleniti a ducimus,
		perspiciatis impedit quasi eveniet sit! Iure architecto dolorum earum?
	</div> -->
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
		object-position: top;
		position: relative;
		overflow: none;
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

<script setup>
	import gsap from "gsap";
	import { ScrollTrigger } from "gsap/ScrollTrigger";
	import { onMounted } from "vue";

	onMounted(() => {
		gsap.set("img", {
			yPercent: -50,
			xPercent: -50,
			top: "50%",
			left: "50%",
			minWidth: "100%",
			position: "absolute",
		});

		//linear easing doesn't APPEAR linear (visually).
		gsap.fromTo(
			"#linear img",
			{ scale: 0.1 },
			{ scale: 8, duration: 10, ease: "none", repeat: -1 }
		);

		//notice how we feed in the starting and ending [scale] values to "expoScale()" so that it can adjust its curve accordingly so that scaling appears linear visually even though technically the scale values aren't animating linearly at all.
		gsap.fromTo(
			"#expo img",
			{ scale: 0.1 },
			{ scale: 8, duration: 10, ease: "expoScale(0.1, 8)", repeat: -1 }
		);
	});

	//for a more complicated example that shows multi-step zooming
	//(swapping new images for better resolution as it progresses),
	//see https://codepen.io/GreenSock/pen/0cfddbdd3f1954a5cc813994d7b502ac
</script>

<template>
	<div id="container">
		<div id="expo">
			<img
				src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/zoom-1.jpg"
			/>
			<img
				src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/zoom-2.jpg"
			/>
			<img
				src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/zoom-3.jpg"
			/>
			<img
				src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/zoom-4.jpg"
			/>
			<img
				src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/zoom-5.jpg"
			/>
			<img
				src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/zoom-6.jpg"
			/>
			<img
				src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/zoom-7.jpg"
			/>
			<img
				src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/zoom-8.jpg"
			/>
			<img
				src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/zoom-9.jpg"
			/>
			<img
				src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/zoom-10.jpg"
			/>
			<img
				src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/zoom-11.jpg"
			/>
			<img
				src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/zoom-12.jpg"
			/>
			<img
				src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/zoom-13.jpg"
			/>
			<img
				src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/zoom-14.jpg"
			/>
			<img
				src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/zoom-15.jpg"
			/>
			<img
				src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/zoom-16.jpg"
			/>
			<img
				src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/zoom-17.jpg"
			/>
			<img
				src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/zoom-18.jpg"
			/>
			<img
				src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/zoom-19.jpg"
			/>
			<img
				src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/zoom-20.jpg"
			/>
			<img
				src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/zoom-21.jpg"
			/>
			<img
				src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/zoom-22.jpg"
			/>
			<div class="label">ExpoScaleEase</div>
		</div>

		<div id="linear">
			<img
				src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/zoom-1.jpg"
			/>
			<img
				src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/zoom-2.jpg"
			/>
			<img
				src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/zoom-3.jpg"
			/>
			<img
				src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/zoom-4.jpg"
			/>
			<img
				src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/zoom-5.jpg"
			/>
			<img
				src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/zoom-6.jpg"
			/>
			<img
				src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/zoom-7.jpg"
			/>
			<img
				src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/zoom-8.jpg"
			/>
			<img
				src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/zoom-9.jpg"
			/>
			<img
				src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/zoom-10.jpg"
			/>
			<img
				src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/zoom-11.jpg"
			/>
			<img
				src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/zoom-12.jpg"
			/>
			<img
				src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/zoom-13.jpg"
			/>
			<img
				src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/zoom-14.jpg"
			/>
			<img
				src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/zoom-15.jpg"
			/>
			<img
				src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/zoom-16.jpg"
			/>
			<img
				src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/zoom-17.jpg"
			/>
			<img
				src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/zoom-18.jpg"
			/>
			<img
				src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/zoom-19.jpg"
			/>
			<img
				src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/zoom-20.jpg"
			/>
			<img
				src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/zoom-21.jpg"
			/>
			<img
				src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/zoom-22.jpg"
			/>
			<div class="label">Linear easing</div>
		</div>

		<link
			href="//fonts.googleapis.com/css?family=Signika+Negative:300,400"
			rel="stylesheet"
			type="text/css"
		/>
	</div>
</template>

<style scoped>
	body {
		margin: 0;
		padding: 0;
		background-color: black;
	}
	#expo {
		/*display: none;*/
	}
	#container {
		display: flex;
		min-height: 100vh;
	}
	#expo,
	#linear {
		flex-grow: 1;
		overflow: hidden;
		position: relative;
		color: white;
		font-size: 3em;
	}
	#linear {
		border-left: 2px solid white;
	}
	img {
		position: absolute;
		top: 50%;
		left: 50%;
		min-width: 100%;
	}
	.label {
		position: relative;
		top: 0px;
		padding: 10px;
		text-align: center;
		font-family: "Signika Negative", sans-serif;
		background-color: rgba(0, 0, 0, 0.5);
	}
</style>

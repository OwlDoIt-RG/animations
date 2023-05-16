import { createRouter, createWebHistory } from "vue-router";
import AnimateComponent from "./components/AnimateComponent.vue";

const routes = [
	{
		path: "/",
		name: "AnimateComponent",
		component: AnimateComponent,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;

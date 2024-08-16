<script>
	import App from "$lib/App.svelte";
	import { Canvas } from "@threlte/core";
	import { World } from "@threlte/rapier";

    let value;
</script>

<Canvas>
    <World>
        <App />
    </World>
</Canvas>
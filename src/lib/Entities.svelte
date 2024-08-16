<script lang="ts">
	import type { Entity, World } from "@medieval/sword";
	import { setEntitiesContext } from "./hooks";
	import type { Snippet } from "svelte";
    let { world, children}: { world: World<any>, children: Snippet} = $props()
    setEntitiesContext<any>(world);
</script>

{@render children?.()}
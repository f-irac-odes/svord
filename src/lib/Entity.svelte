<script lang="ts">
    import { setEntityContext, getEntitiesContext } from "./hooks";
    import type { Snippet } from "svelte";

    let { children, oncreate, onremove }: { children: Snippet, 
        oncreate?: ({ entity, components}: { entity?: any, components?: keyof any }) => void,
        onremove?: ({ entity, components}: { entity?: any, components?: keyof any }) => void
    } = $props();
    
    const world = getEntitiesContext<any>();
    const entity = world.createEntity({}, oncreate)
    setEntityContext(entity);

    $effect(() => {
        return () => world.removeEntity(entity, onremove)
    })
</script>

{@render children?.()}
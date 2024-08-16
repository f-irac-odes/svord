<script lang="ts">
    import { setEntityContext, getEntitiesContext } from "./hooks";
    import type { Snippet } from "svelte";

    let { children, oncreate, onremove, entity = $bindable() }: { children: Snippet, 
        oncreate?: ({ entity, components}: { entity?: any, components?: keyof any }) => void,
        onremove?: ({ entity, components}: { entity?: any, components?: keyof any }) => void,
        entity: any
    } = $props();


    const world = getEntitiesContext<any>();
    const e = world.createEntity({}, oncreate)
    entity = e;
    setEntityContext(entity);

    $effect(() => {
        return () => world.removeEntity(entity, onremove)
    })
</script>

{@render children?.()}
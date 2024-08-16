<script lang="ts" generics="T">
    import { getEntitiesContext, getEntityContext } from "./hooks";
    import type { Snippet } from "svelte";

    const entity = getEntityContext();
    const world = getEntitiesContext()
    let { children, value }: {value: Partial<T>, children?: Snippet<[value: Partial<T>]>} = $props()


    $effect(() => {
        const entries = Object.entries(value);

        if (entity) {
            for (const [key, value] of entries) {    
                world.addComponent(entity, key, value)
            }
        }

        return () => {
            if (entity) {
                for (const key in value) {
                    world.removeComponent(entity, key)
                }
            }
        }
    })
</script>

{@render children?.(value)}
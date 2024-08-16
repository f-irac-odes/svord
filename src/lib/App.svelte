<script>
    import {T, useThrelte} from '@threlte/core'
    import {useRapier} from '@threlte/rapier'
	import Entities from './Entities.svelte';
	import Entity from './Entity.svelte';
	import Component from './Component.svelte';
	import { w } from './hooks';

    const { scene } = useThrelte()
    const { world } = useRapier()

    $effect(() => {
        console.log(w)
    })
</script>


<Entities world={w}>

    <Entity oncreate={({ entity }) => {
        console.log('scene are you loaded?:', scene);
        console.log('world are you loaded?:', world);
        console.log('entity are you loaded?:', entity);
    }}>
        <Component  value={{three: undefined, camera: undefined}}>
            {#snippet children(value)}
                <T.Object3D bind:ref={value.three} />
                <T.PerspectiveCamera bind:ref={value.camera} />
            {/snippet}
        </Component>
    </Entity>

</Entities>

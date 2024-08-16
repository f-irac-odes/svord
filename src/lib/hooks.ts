import { World, type Entity, type QueryEvent } from "@medieval/sword";
import { getContext, setContext, getAllContexts } from "svelte";
import type { Object3D, PerspectiveCamera } from "three";

// world context
export function setEntitiesContext<T extends Entity> (world: World<T>) {
    return setContext('world', world);
}

export function getEntitiesContext<T extends Entity>() {
    return getContext<World<T>>('world');
}

// entity context
export function setEntityContext<T extends Entity> (entity: T) {
    return setContext('entity', entity);
}

export function getEntityContext<T extends Entity> () {
    return getContext<T>('entity');
}

// component context
export function setComponentContext<T> (component: T) {
    return setContext('component', component);
}

export function getAllContext () {
    return getAllContexts();
}

    
export const w = new World<{ three: Object3D, camera: PerspectiveCamera, toberemoved: number }>([])



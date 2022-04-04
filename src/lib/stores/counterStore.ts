import { writable } from "svelte/store";

const counterStore = writable<number>(0)

const increase = () => {
    counterStore.update(pre => pre + 1)
}

const decrease = () => {
    counterStore.update(pre => pre - 1)
}

const counterStoreAction = { increase, decrease }

export {
    counterStore,
    counterStoreAction
}
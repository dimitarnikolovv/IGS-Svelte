<script>
    import { fly } from 'svelte/transition';
    export let overflow = true;
    export let contacts = false;
</script>

<main
    class:only-item={!overflow}
    class:contacts
    in:fly={{ duration: 400, x: 500, delay: 300 }}
    out:fly={{ duration: 200, x: -500 }}
>
    <slot />
</main>

<style lang="scss">
    .only-item {
        height: 100vh;
        padding-block: 0;
    }

    .contacts {
        @media only screen and (max-width: 768px) {
            height: fit-content;
        }
    }

    main {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 6rem;
        padding-block: 2.5rem;

        @media only screen and (max-width: 1080px) {
            padding-block: 0;
        }
    }
</style>

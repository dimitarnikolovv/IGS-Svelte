<script>
    import { fly } from 'svelte/transition';
    export let overflow = true;
</script>

<main
    class:only-item={!overflow}
    in:fly={{ duration: 400, x: 500, delay: 300 }}
    out:fly={{ duration: 200, x: -500 }}
>
    <slot />
</main>

<style lang="scss">
    .only-item {
        height: 100vh;

        @media only screen and (max-width: 768px) {
            height: 125vh;
        }
    }
    main {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        @media only screen and (max-width: 1080px) {
            margin: 0;
        }
    }
</style>

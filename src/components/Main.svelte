<script>
    import { fly } from 'svelte/transition';
    export let overflow = true;
</script>

<main
    style={overflow ? '' : 'height: 100vh'}
    in:fly={{ duration: 400, x: 500, delay: 300 }}
    out:fly={{ duration: 200, x: -500 }}
>
    <slot />
</main>

<style lang="scss">
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

<script>
    import Saos from 'saos';
    export let direction = '';
    export let title = 'Title';
    export let multipleItems = false;
</script>

<h4>{title}</h4>
<Saos
    animation={direction === 'top-left'
        ? 'from-top-left 600ms ease forwards'
        : direction === 'top-right'
        ? 'from-top-right 600ms ease forwards'
        : ''}
    animation_out={direction === 'top-left'
        ? 'from-top-left 600ms ease forwards reverse'
        : direction === 'top-right'
        ? 'from-top-right 600ms ease forwards reverse'
        : ''}
    top={150}
    bottom={100}
>
    {#if multipleItems}
        <div>
            <slot />
        </div>
    {:else}
        <slot />
    {/if}
</Saos>

<style lang="scss">
    div {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    @keyframes -global-from-top-left {
        0% {
            transform: translate(-400px, -200px);
            opacity: 0;
        }
        100% {
            transform: translate(0, 0);
            opacity: 1;
        }
    }
    @keyframes -global-from-top-right {
        0% {
            transform: translate(400px, -200px);
            opacity: 0;
        }
        100% {
            transform: translate(0, 0);
            opacity: 1;
        }
    }
</style>

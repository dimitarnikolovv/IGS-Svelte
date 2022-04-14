<script>
    import Loader from './components/Loader.svelte';
    import Nav from './components/Nav.svelte';
    import Header from './components/Header.svelte';
    import { onMount, onDestroy } from 'svelte';
    import Router from 'svelte-spa-router';
    import routes from './routes';
    import { isToggled } from './stores';

    onMount(() => {
        window.onload = () => {
            window.scrollTo(0, 0);
            setTimeout(() => {
                rotateMessage();
            }, 0);
            setTimeout(() => {
                document.querySelector('body').style.overflowY = 'visible';
            }, 2800);
        };

        window.addEventListener('resize', rotateMessage);

        function rotateMessage() {
            if (window.matchMedia('(max-width: 940px) and (max-height: 430px)').matches) {
                document.querySelector('.rotate-phone').style.display = 'flex';
                document.querySelector('main').style.display = 'none';
            } else {
                document.querySelector('.rotate-phone').style.display = 'none';
                document.querySelector('main').style.display = 'flex';
            }
        }
    });

    const unsubscribe = isToggled.subscribe(() => {});

    onDestroy(unsubscribe);
</script>

<!-- <Loader /> -->

<div class="rotate-phone" style="display: none">
    <div class="rotate-wrap">
        <h3>Please, rotate your phone :)</h3>
    </div>
</div>

<div class="app-wrapper">
    <Header />
    <Nav />

    {#if !$isToggled}
        <Router {routes} />
    {/if}
</div>

<style lang="scss">
    .app-wrapper {
        z-index: 1;
        position: relative;
        display: flex;
        flex-direction: column;
        @media only screen and (max-width: 768px) {
            overflow-x: hidden;
        }
    }

    //ROTATE PHONE//
    .rotate-phone {
        z-index: 20;
        position: absolute;
        width: 100vw;
        height: 100vh;
        overflow: hidden;

        .rotate-wrap {
            height: inherit;
            width: inherit;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: var(--clr-primery-700);
        }

        h3 {
            color: var(--clr-text-primery-100);
            font-size: 3rem;
        }

        @media only screen and (max-width: 940px) and (max-height: 430px) {
            overflow-x: hidden;
        }
    }

    //END ROTATE PHONE//
</style>

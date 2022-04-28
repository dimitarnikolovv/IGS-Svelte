<script>
    import './global.css';
    import { onMount } from 'svelte';
    import Router from 'svelte-spa-router';
    import routes from './routes';
    import { isToggled } from './stores';
    import MediaQuery from './components/MediaQuery.svelte';
    import Loader from './components/Loader.svelte';
    import Nav from './components/Nav.svelte';
    import Header from './components/Header.svelte';

    onMount(() => {
        window.onload = () => {
            window.scrollTo(0, 0);
            setTimeout(() => {
                document.querySelector('body').style.overflowY = 'visible';
            }, 4700);
        };
    });

    let scrollY;
</script>

<svelte:window bind:scrollY />

<Loader />

<MediaQuery query="(max-width: 940px) and (max-height: 430px)" let:matches>
    {#if matches}
        <div class="rotate-phone">
            <div class="rotate-wrap">
                <h3>Please, rotate your phone :)</h3>
            </div>
        </div>
    {/if}
</MediaQuery>

<div class="app-wrapper">
    <Header />
    <Nav />

    {#if !$isToggled}
        <Router {routes} />
    {/if}

    <div
        class="back-to-top"
        class:show-top-btn={scrollY > 750 ? true : false}
        on:click={() => {
            scrollY = 0;
        }}
    >
        <svg xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
            <path
                d="M11 2.206l-6.235 7.528-.765-.645 7.521-9 7.479 9-.764.646-6.236-7.53v21.884h-1v-21.883z"
            />
        </svg>
    </div>
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

    //BACK TO TOP//

    .back-to-top {
        opacity: 0;
        cursor: pointer;
        position: fixed;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        aspect-ratio: 1;
        background-color: var(--clr-accent-600);
        border-radius: 50%;
        bottom: 2rem;
        right: 1rem;
        transform: translateY(200%);
        transition: transform 300ms 100ms ease, opacity 300ms 50ms ease;
        svg {
            width: 24px;
            height: 24px;
        }
        path {
            fill: var(--clr-primery-100);
        }
    }

    .show-top-btn {
        visibility: visible;
        opacity: 1;
        transform: translateY(0);
    }
</style>

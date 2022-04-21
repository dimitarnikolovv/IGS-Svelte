<script>
    import { gsap } from 'gsap';
    import { onMount } from 'svelte';

    onMount(() => {
        const timeLineLoader = gsap.timeline();

        timeLineLoader
            .delay(4)
            .from('.loader-animate-left', { y: '-101%', duration: 0.8 }, 'slider-y')
            .from('.loader-animate-right', { y: '101%', duration: 0.8 }, 'slider-y')
            .to('.loader-logo', { scale: 0, duration: 0.1 })
            .to('.loader-animate-left', { x: '-100%' }, 'slider-x')
            .to('.loader-animate-right', { x: '100%' }, 'slider-x')
            .to('.loader-slides', { backgroundColor: 'transparent', duration: 0 }, 'slider-x')
            .to('.loader', { opacity: 0, duration: 0.3 }, '-=0.3')
            .to('.loader', { display: 'none' }, '-=0.2');
    });
</script>

<div class="loader">
    <video class="loader-logo" autoplay muted>
        <track kind="captions" />
        <source src="./images/logo.webm" type="video/webm" />
        Your browser does not support the video tag.
    </video>
    <ul class="loader-slides">
        <li class="loader-animate-left" />
        <li class="loader-animate-right" />
    </ul>
</div>

<style lang="scss">
    .loader {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10;
        top: 0;
        width: 100vw;
        height: 100vh;
        overflow: hidden;

        video {
            position: absolute;
            width: 35%;
        }

        ul {
            display: flex;
            width: 100%;
            height: 100%;
            background-color: black;
            li {
                background-color: white;
                width: 50%;
                height: 100%;
            }
        }
    }
</style>

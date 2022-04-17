<script>
    import { Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide';
    import '@splidejs/svelte-splide/css';
    import { fly } from 'svelte/transition';
    export let images = [];

    const options = {
        rewind: true,
        gap: '1rem',
        autoplay: true,
        arrows: true,
        autoHeight: true,
        autoWidth: true,
        type: 'loop',
        perPage: 3,
        perMove: 1,
        pagination: false,
        focus: 'center',
    };
</script>

<div
    class="wrapper"
    in:fly={{ duration: 400, x: -500, delay: 300 }}
    out:fly={{ duration: 200, x: -500 }}
>
    <Splide {options} hasTrack={false}>
        <div style="position: relative">
            <SplideTrack>
                {#each images as image}
                    <SplideSlide>
                        <div style="background-image: url({image});" class="image-wh" />
                    </SplideSlide>
                {/each}
            </SplideTrack>

            <div class="splide__arrows">
                <button class="splide__arrow splide__arrow--prev">
                    <!-- <ArrowSlide direction="left" /> -->
                </button>
                <button class="splide__arrow splide__arrow--next">
                    <!-- <ArrowSlide direction="right" /> -->
                </button>
                <div class="background background--left" />
                <div class="background background--right" />
            </div>
        </div>

        <div class="splide__progress">
            <div class="splide__progress__bar" />
        </div>
    </Splide>
</div>

<style lang="scss">
    div.wrapper {
        background-color: black;
        position: absolute;
        z-index: 2;
        top: 0;
        left: 0;
        width: 90vw;
        height: calc(100vh - 5rem);

        .image-wh {
            width: 50vw;
            height: calc(100vh - 5rem);
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center center;

            @media only screen and (max-width: 1080px) {
                height: 100vh;
            }

            @media only screen and (max-width: 950px) {
                width: 100vw;
            }

            @media only screen and (max-width: 768px) {
                width: 100vw;
                height: 50vh;
            }

            @media only screen and (max-width: 495px) {
                height: 30vh;
            }
        }

        @media only screen and (max-width: 1080px) {
            width: 100vw;
            height: 100vh;
        }

        @media only screen and (max-width: 768px) {
            height: 50vh;
        }

        @media only screen and (max-width: 495px) {
            height: 30vh;
        }
    }
</style>

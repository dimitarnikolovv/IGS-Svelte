<script>
    import Slider from '../components/Slider.svelte';
    import Saos from 'saos';

    export let type = '';
    export let carousel = false;
    export let image = '';
    export let gallery = [];

    export let sectionLabel = '';

    let showSlider = false;
    let scaled = false;
</script>

{#if type === ''}
    <section aria-label={sectionLabel}>
        <div class="section-wrapper">
            {#if showSlider}
                <div
                    class="close-slider"
                    on:click={() => {
                        showSlider = false;
                    }}
                >
                    <p style="color: white; font-weight:800;">X</p>
                </div>
                <Slider images={gallery} />
            {/if}
            <div class="section-background">
                {#if carousel}
                    <div class="carousel">
                        <div
                            class="carousel-background--image"
                            class:scale-1-03={scaled}
                            style="background-image: url({image});"
                            on:click={() => {
                                showSlider = true;
                            }}
                        />
                        <div
                            class="carousel--badge"
                            on:click={() => {
                                showSlider = true;
                            }}
                            on:mouseenter={() => {
                                scaled = true;
                            }}
                            on:mouseleave={() => {
                                scaled = false;
                            }}
                        >
                            <div class="carousel--badge--background" />
                            <div class="carousel--badge--content">
                                <h4>See More</h4>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                >
                                    <path
                                        d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                {:else}
                    <div
                        class="section-background--image"
                        style="background-image: url({image});"
                    />
                {/if}
            </div>
            <div class="section-container" class:section-container-double={carousel}>
                <slot />
            </div>
        </div>
    </section>
{/if}

{#if type === 'blank'}
    <section aria-label={sectionLabel}>
        <slot />
    </section>
{/if}

{#if type === 'work'}
    <section class="section-work" aria-label={sectionLabel}>
        <div class="section-wrapper">
            <div class="section-container-work">
                <div class="content-wrap">
                    <slot />
                </div>
                <Saos
                    animation={'from-top 400ms ease both'}
                    animation_out={'from-top 400ms ease both reverse'}
                >
                    <div class="devider" />
                </Saos>
            </div>
        </div>
    </section>
{/if}

<style lang="scss">
    div.close-slider {
        z-index: 3;
        position: absolute;
        top: 2rem;
        right: 2rem;
        height: fit-content;
        cursor: pointer;
    }

    .scale-1-03 {
        transform: scale(1.03);
    }
    section {
        position: relative;
        width: 90vw;
        height: calc(100vh - 5rem);
        max-height: 90vh;
        background-color: var(--clr-primery-700);
        overflow: hidden;
        margin-block: 3rem;
        margin-inline: auto;

        .section-wrapper {
            display: flex;
            align-items: center;
            width: 100%;
            min-height: inherit;

            .section-background {
                width: 54vw;
                height: calc(100vh - 5rem);
                background-color: transparent;
                transform: skew(-27deg) translateX(-32%);
                box-shadow: 0 -2px 10px 6px rgba(0, 0, 0, 0.664);
                overflow: hidden;
                @media only screen and (max-width: 1000px) {
                    width: 65vw;
                }

                &--image {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    transform: skew(27deg) translateX(32%);
                    transition: transform 300ms ease;
                    will-change: contents;

                    background-repeat: no-repeat;
                    background-size: cover;
                    background-position: center center;

                    &:hover {
                        transform: scale(1.03) skew(27deg) translateX(32%);
                    }
                }
            }

            .section-container {
                position: absolute;
                right: 2%;
                width: 48%;
                height: 100%;
                display: flex;
                flex-direction: column;
                align-items: flex-end;
                justify-content: center;
                gap: 1rem;
            }

            .section-container-double {
                width: 98%;
                height: unset;
                right: 1%;
                flex-direction: row;
                align-items: center;
                // pointer-events: none;
            }
        }

        @media only screen and (max-width: 1080px) {
            position: relative;
            width: 100vw;
            height: 100vh;
            min-height: 100vh;
            margin-block-start: 0;
            margin-block-end: 5vh;

            .section-wrapper {
                .section-background {
                    height: 100vh;
                }
            }
        }

        @media only screen and (max-width: 768px) {
            position: relative;
            width: 100vw;
            height: 120vh;
            min-height: 120vh;
            margin-block-end: 5vh;

            .section-wrapper {
                flex-direction: column;
                align-items: center;

                .section-background {
                    width: 100%;
                    height: 50vh;
                    transform: skew(0) translateX(0);
                    box-shadow: 0 -2px 10px 6px rgba(0, 0, 0, 0.664);
                    margin-block-end: 2vh;

                    &--image {
                        transform: skew(0deg) translateX(0%);

                        &:hover {
                            transform: scale(1.02) skew(0deg) translateX(0%);
                        }
                    }
                }

                .section-container {
                    position: relative;
                    right: 0;
                    width: 90%;
                    height: 60vh;
                    align-items: center;
                    justify-content: center;
                }

                .section-container-double {
                    flex-direction: column;
                    width: 90%;
                    height: 60vh;
                }
            }
        }

        @media only screen and (max-width: 495px) {
            .section-wrapper {
                .section-background {
                    height: 30vh;
                }

                .section-container {
                    position: relative;
                    right: 0;
                    width: 90%;
                    height: 80vh;
                    align-items: center;
                    justify-content: center;
                }

                .section-container-double {
                    flex-direction: column;
                    width: 90%;
                    height: 80vh;
                }
            }
        }
    }

    section.section-work {
        min-height: 90vh;
        max-height: 200vh;
        @media only screen and (max-width: 1350px) {
            height: 110vh;
        }
        @media only screen and (max-width: 1010px) {
            height: 140vh;
        }
        background-color: wheat;
        background-color: transparent;
        padding-block: 1rem;
        .section-wrapper {
            display: block;
            @media only screen and (max-width: 1080px) {
                height: fit-content;
            }
            .section-container-work {
                position: absolute;
                display: flex;
                align-items: center;
                width: 100%;
                min-height: inherit;
                @media only screen and (max-width: 1080px) {
                    justify-content: center;
                }

                .content-wrap {
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                    align-items: flex-start;
                    justify-content: flex-start;

                    @media only screen and (max-width: 1080px) {
                        width: 95%;
                    }
                }
            }
            .devider {
                position: absolute;
                left: 50%;
                width: 2px;
                height: 80%;
                background-color: var(--clr-text-accent-700);
                &::after {
                    content: '';
                    position: absolute;
                    background-color: inherit;
                    width: 20px;
                    height: 2px;
                    bottom: -8px;
                    transform: rotate(-60deg) translate(10px, -10px);
                }
                &::before {
                    content: '';
                    position: absolute;
                    background-color: inherit;
                    width: 20px;
                    height: 2px;
                    bottom: 2px;
                    transform: rotate(60deg) translate(-10px, 10px);
                }
            }
        }
        @media only screen and (max-width: 768px) {
            height: fit-content;
            min-height: 150vh;
            padding-block: 1rem;
            .section-wrapper {
                .section-container-work {
                    position: relative;
                    display: block;
                    width: 100%;

                    .content-wrap {
                        align-items: center;
                    }
                }
                .devider {
                    display: none;
                }
            }
        }

        @media only screen and (max-height: 670px) {
            height: fit-content;
            min-height: 210vh;
        }
    }

    //CAROUSEL//

    .carousel {
        position: relative;
        width: 100%;
        height: 100%;
        transform: skew(27deg) translateX(32%);

        &-background--image {
            position: absolute;
            width: 100%;
            height: 100%;
            cursor: pointer;
            transition: transform 300ms ease;
            will-change: contents;

            background-repeat: no-repeat;
            background-size: cover;
            background-position: center center;

            &:hover {
                transform: scale(1.03);
                ~ .carousel--badge {
                    transform: translateX(0);
                    opacity: 1;
                    svg {
                        transform: translateX(15px);
                    }
                }
            }
        }

        &--badge {
            opacity: 0;
            cursor: pointer;
            position: absolute;
            top: 20%;
            left: 0;
            height: fit-content;
            padding-block: 1.2rem;
            padding-inline-end: 2.5rem;
            padding-inline-start: 0.8rem;
            text-align: center;
            transform: translateX(-100%);
            transition: transform 300ms ease, opacity 300ms ease;
            overflow: hidden;

            &--background {
                position: absolute;
                background-color: rgba(rgb(0, 0, 0), 0.9);
                width: 100%;
                height: 90%;
                margin: -1.2rem;
                transform: skew(-27deg) translateX(-0.8rem);
            }

            &--content {
                display: flex;
                justify-content: center;
                gap: 1.5rem;
                h4 {
                    font-size: 1.4rem;
                    transform: skew(0);
                    text-transform: uppercase;
                    font-family: 'Sailec Medium';
                }
                svg {
                    z-index: 1;
                    width: 40px;
                    height: 30px;
                    transition: transform 300ms 250ms ease;
                    will-change: contents;
                    path {
                        fill: var(--clr-text-primery-100);
                    }
                }
            }

            &:hover {
                transform: translateX(0);
                opacity: 1;

                svg {
                    transform: translateX(15px);
                }
            }
        }
        @media only screen and (max-width: 768px) {
            transform: skew(0) translateX(0);
            &--badge {
                display: none;
            }
        }
    }

    .section-background {
        transition: width 200ms ease;
    }

    //ANIMATIONS//

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
    @keyframes -global-from-top {
        0% {
            height: 80%;
            position: absolute;
            left: 50%;
            top: 0;
            transform: translateY(-100%);
        }
        100% {
            height: 80%;
            position: absolute;
            left: 50%;
            top: 20%;
            transform: translateY(0, 0);
        }
    }
</style>

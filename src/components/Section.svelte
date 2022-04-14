<script>
    import AOS from 'aos';
    import 'aos/dist/aos.css';

    import { onMount } from 'svelte';

    onMount(() => {
        AOS.init();
    });
    export let title = '';
    export let type = '';
</script>

{#if type === ''}
    <section>
        <div class="section-wrapper">
            <div class="section-background background-expanded-" data-carousel>
                <div class="section-background--reversed" />
            </div>
            <div class="section-container">
                <h3>{title}</h3>
                <p class="content">par</p>
                <p class="content">par</p>
            </div>
        </div>
    </section>
{/if}

{#if type === 'work'}
    <section class="section-work">
        <div class="section-wrapper">
            <div class="section-container-work">
                <div class="content-wrap">
                    <div class="content-wrap--x">
                        <div class="content-wrap--right">
                            <h4>Ttitle</h4>
                            <p data-aos="fade-down-right">par</p>
                        </div>
                        <div class="content-wrap--left">
                            <h4>Title</h4>
                            <p data-aos="fade-down-left">par</p>
                        </div>
                    </div>
                    <div class="content-wrap--x">
                        <div class="content-wrap--right">
                            <h4>Title</h4>
                            <p data-aos="fade-down-right">par</p>
                        </div>
                        <div class="content-wrap--left">
                            <h4>Title</h4>
                            <p data-aos="fade-down-left">par</p>
                        </div>
                    </div>
                </div>
                <div class="devider" data-aos="slide-down" data-aos-offset="300" />
            </div>
        </div>
    </section>
{/if}

<style lang="scss">
    section {
        position: relative;
        width: 90vw;
        min-height: calc(100vh - 7rem);
        max-height: 80vh;
        background-color: var(--clr-primery-700);
        overflow: hidden;
        margin-block: 4rem;
        margin-inline: auto;

        .section-wrapper {
            display: flex;
            width: 100%;
            min-height: inherit;

            .section-background {
                width: 54vw;
                height: calc(100vh - 7rem);
                background-color: transparent;
                transform: skew(-27deg) translateX(-32%);
                box-shadow: 0 -2px 10px 6px rgba(0, 0, 0, 0.664);
                overflow: hidden;

                &--reversed {
                    height: 100%;
                    transform: skew(27deg) translateX(32%);
                }

                &--image {
                    transition: transform 300ms ease;
                    will-change: contents;
                    img {
                        width: 120%;
                    }

                    &:hover {
                        transform: scale(1.03);
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
                .content {
                    margin-block-start: 3rem;
                }
                h3 {
                    text-align: right;
                }
            }
        }

        &.reversed {
            .section-background {
                transform: skew(27deg) translateX(-32%);

                &--reversed {
                    transform: skew(-27deg) translateX(25%);
                }
            }
        }
        &#main {
            margin: 0;
        }

        &#team {
            .image-container {
                width: 100%;
                height: 100%;

                img {
                    width: 100%;
                }
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
                    height: 30vh;
                    transform: skew(0) translateX(0);
                    box-shadow: 0 -2px 10px 6px rgba(0, 0, 0, 0.664);
                    margin-block-end: 2vh;

                    &--reversed {
                        transform: skew(0) translateX(0);
                    }
                }

                .section-container {
                    position: relative;
                    right: 0;
                    width: 90%;
                    height: 60%;
                    align-items: center;
                    justify-content: center;
                }
            }
        }
    }

    section.section-work {
        min-height: calc(80vh - 7rem);
        height: 90vh;
        max-height: max-content;
        background-color: wheat;
        background-color: transparent;
        padding-block: 1rem;
        .section-wrapper {
            .section-container-work {
                position: absolute;
                display: flex;
                align-items: center;
                width: 100%;
                min-height: inherit;

                .content-wrap {
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                    align-items: flex-start;
                    justify-content: flex-start;

                    &--x {
                        position: relative;
                        display: flex;
                        width: 100%;
                        flex-direction: row;
                        align-items: center;
                        justify-content: space-between;

                        &:first-child {
                            margin-block-end: 4rem;
                        }
                    }

                    &--left,
                    &--right {
                        h1,
                        h2,
                        h3,
                        h4,
                        h5,
                        h6 {
                            color: var(--clr-text-accent-700);
                        }
                        width: 40%;
                        :first-child {
                            margin-block-end: 2rem;
                            width: fit-content;
                        }

                        p {
                            max-width: 90%;
                        }
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
            height: 150vh;
            min-height: 150vh;
            padding-block: 1rem;
            .section-wrapper {
                .section-container-work {
                    position: relative;
                    display: block;
                    width: 100%;

                    .content-wrap {
                        align-items: center;

                        &--x {
                            position: relative;
                            display: flex;
                            width: 90%;
                            flex-direction: column;
                            align-items: center;

                            &:first-child {
                                margin-block-end: 0;
                            }
                        }

                        &--left,
                        &--right {
                            width: 100%;
                            margin-block-end: 1rem;
                        }
                    }
                }
                .devider {
                    display: none;
                }
            }
        }

        @media only screen and (max-height: 670px) {
            height: 210vh;
            min-height: 210vh;
        }
    }

    //TYPOGRAPHY//
    section {
        h1,
        h2,
        h3,
        h4 {
            font-family: 'Sailec Medium';
            color: var(--clr-text-primery-100);
            span {
                font-family: 'Sailec Bold';
                font-weight: 600;
            }
        }
        h2 {
            font-size: 4rem;
        }
        h3 {
            font-size: 3rem;
        }
        h4 {
            font-size: 2rem;
        }
        p {
            color: var(--clr-text-primery-100);
            span {
                font-family: 'Sailec Regular';
                font-weight: 600;
            }
        }
        p.sub-heading {
            font-family: 'Sailec Light';
            padding-block: 0.4rem;
            span {
                font-family: 'Sailec Thin';
                font-weight: 900;
            }
        }

        &.section-work {
            p {
                color: var(--clr-text-accent-700);
            }
        }
    }

    //CAROUSEL//
    .carousel {
        position: relative;
        width: 100%;
        height: 100%;

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

        img[data-carousel-main-image] {
            cursor: pointer;
            width: 100%;
            transition: transform 300ms ease;
            will-change: contents;

            &.scale-1-02 {
                transform: scale(1.02);
            }

            &:hover {
                transform: scale(1.02);

                + .carousel--badge {
                    transform: translateX(-65%);
                    opacity: 1;
                    svg {
                        transform: translateX(15px);
                    }
                }
            }
        }

        &--arrow {
            z-index: 2;
            cursor: pointer;
            position: absolute;
            top: 50%;
            width: 30px;
            height: 30px;
            overflow: hidden;

            opacity: 0;
            transition: transform 200ms ease;

            svg {
                fill: var(--clr-text-primery-100);
                width: 100% !important;
                height: 100% !important;
            }

            &--right {
                right: 2rem;
                transform: translateX(300%);
                transition: transform 200ms 200ms ease;
            }

            &--left {
                left: 2rem;
                display: none;
                transform: translateX(-300%);
                transition: transform 200ms 200ms ease;
            }
        }

        &--images-wrapper {
            width: 100%;
            height: 100%;
            transform: translateX(-50%);
            opacity: 0;
            transition: transform 100ms ease, opacity 200ms ease;
        }

        button {
            z-index: 2;
            cursor: pointer;
            position: absolute;
            bottom: 1rem;
            left: 1rem;
            background: none;
            border: none;
            text-transform: uppercase;
            font-family: 'Sailec Medium';
            color: var(--clr-text-primery-100);
            transform: translateY(200%);
            transition: transform 200ms ease;
        }

        @media only screen and (max-width: 768px) {
            &--badge {
                display: none;
            }
        }
    }

    .reversed {
        .carousel--badge {
            left: 7%;
        }

        .carousel--badge--background {
            transform: skew(27deg) translateX(-0.8rem);
        }
    }

    .section-background {
        transition: width 200ms ease;
    }

    .background-expanded {
        z-index: 1;
        position: absolute;
        width: 100% !important;
        transform: skew(0) !important;

        .section-background--reversed {
            transform: skew(0) !important;
        }

        .carousel {
            &--arrow {
                opacity: 1;

                &--right {
                    transform: translateX(0);
                }
                &--left {
                    transform: translateX(0);
                }
            }

            &--images-wrapper {
                opacity: 1;
                transform: translateX(0);
            }

            &--images {
                width: 100%;
                height: 100%;
                display: grid;
                grid-auto-flow: column;
                grid-auto-columns: 50%;
                transition: transform 300ms ease;

                li {
                    img {
                        max-width: 100%;
                        object-fit: contain !important;
                    }

                    background-color: var(--clr-accent-900);
                }
            }

            button {
                transform: translateY(0);
            }
        }
        @media only screen and (max-width: 768px) {
            position: relative;
            .carousel {
                &--images {
                    grid-auto-columns: 100%;
                }
            }
        }
    }
</style>

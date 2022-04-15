<script>
    import gsap from 'gsap';
    import { onMount } from 'svelte';

    onMount(() => {
        const timelineRealisationsHover = gsap.timeline();

        hvr = function animateRealisationsHover() {
            timelineRealisationsHover
                .to('.realizations', { scale: 1.02, duration: 0.3 })
                .to('.realizations--content--arrow', { x: '10px', duration: 0.2 }, '-=0.3');
        };

        hvrOut = function animateRealisationsHoverOut() {
            timelineRealisationsHover
                .to('.realizations', { scale: 1.0, duration: 0.3 })
                .to('.realizations--content--arrow', { x: '0', duration: 0.2 }, '-=0.3');
        };
    });

    let hvr;
    let hvrOut;
</script>

<div class="realizations" on:mouseenter={hvr} on:mouseleave={hvrOut}>
    <div class="realizations--background" />
    <a href="/#/realisations" class="realizations--content">
        <h4>Our Realisations</h4>
        <div class="realizations--content--arrow">
            <svg xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                <path
                    d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"
                />
            </svg>
        </div>
    </a>
</div>

<style lang="scss">
    .realizations {
        cursor: pointer;
        position: fixed;
        width: 20rem;
        height: 3rem;
        bottom: 1.3rem;
        right: 5.25rem;
        color: var(--clr-text-primery-100);
        overflow: hidden;

        &--background {
            position: absolute;
            width: 100%;
            height: 100%;
            background-color: var(--clr-accent-600);
            transform: skew(-27deg) translateX(10%);
        }

        &--content {
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;

            h4 {
                font-size: 1rem;
                font-family: 'Sailec Thin';
                font-weight: 600;
                text-transform: uppercase;
                position: absolute;
                color: var(--clr-text-primery-100);
            }

            &--arrow {
                position: absolute;
                right: 0.2rem;
                transition: transform 300ms ease;
                svg {
                    width: 40px;
                    height: 20px;
                    path {
                        fill: var(--clr-text-primery-100);
                    }
                }
            }
        }

        @media only screen and (max-width: 768px) {
            width: 20rem;
            height: 3rem;
            bottom: 0;
            right: 0;
        }
    }
</style>

<script>
    import { _ } from '../lib/i18n';
    import gsap from 'gsap';
    import { contactsTransitioning } from '../lib/stores';
    import { onMount } from 'svelte';

    export let type = '';
    export let isSent = false;

    onMount(() => {
        const timelineBtnSendHover = gsap.timeline();

        hvr = function animateSendHover() {
            timelineBtnSendHover
                .to('.btn-right-bg', { scale: 1.02, duration: 0.3 })
                .to('.arrow', { x: '10px', duration: 0.1 }, '-=0.3');
        };

        hvrOut = function animateSendHoverOut() {
            timelineBtnSendHover
                .to('.btn-right-bg', { scale: 1.0, duration: 0.3 })
                .to('.arrow', { x: '0', duration: 0.1 }, '-=0.3');
        };

        const timelineBtnBackHover = gsap.timeline();

        hvrBack = function animateBackHover() {
            timelineBtnBackHover
                .to('.btn-left-bg', { scale: 1.02, duration: 0.3 })
                .to('.arrow-back', { x: '-10px', duration: 0.1 }, '-=0.3');
        };

        hvrBackOut = function animateBackHoverOut() {
            timelineBtnBackHover
                .to('.btn-left-bg', { scale: 1.0, duration: 0.3 })
                .to('.arrow-back', { x: '0', duration: 0.1 }, '-=0.3');
        };

        const timelineRealisationsHover = gsap.timeline();

        hvrR = function animateRealisationsHover() {
            timelineRealisationsHover
                .to('.realizations', { scale: 1.02, duration: 0.3 })
                .to('.realizations--content--arrow', { x: '10px', duration: 0.2 }, '-=0.3');
        };

        hvrROut = function animateRealisationsHoverOut() {
            timelineRealisationsHover
                .to('.realizations', { scale: 1.0, duration: 0.3 })
                .to('.realizations--content--arrow', { x: '0', duration: 0.2 }, '-=0.3');
        };
    });

    let hvrR;
    let hvrROut;
    let hvr;
    let hvrOut;
    let hvrBack;
    let hvrBackOut;
</script>

{#if type === 'realisations'}
    <div class="realizations" on:mouseenter={hvrR} on:mouseleave={hvrROut}>
        <div class="realizations--background" />
        <a href="/#/realisations" class="realizations--content">
            <h4>{$_('home.realisations-button')}</h4>
            <div class="realizations--content--arrow">
                <svg xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                    <path
                        d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"
                    />
                </svg>
            </div>
        </a>
    </div>
{/if}
{#if type === 'back'}
    <button
        class="btn-back"
        type="button"
        on:click={() => {
            $contactsTransitioning.location = 'countries';
        }}
        on:mouseenter={hvrBack}
        on:mouseleave={hvrBackOut}
    >
        <div class="btn-left-bg" />
        {$_('contact.form.back-button')}
        <div class="arrow-back">
            <svg xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                <path
                    d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"
                />
            </svg>
        </div>
    </button>
{/if}
{#if type === 'submit'}
    <button
        class="btn-submit"
        type="submit"
        id="btn-submit"
        on:mouseenter={hvr}
        on:mouseleave={hvrOut}
        ><div class="btn-right-bg" />
        {$_('contact.form.send-button')}
        <div class="arrow">
            <svg xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                <path
                    d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"
                />
            </svg>
        </div>
        {#if isSent}
            <div class="email-sent">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    style=" fill:#000000;"
                    ><path
                        fill="#c8e6c9"
                        d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"
                    /><path
                        fill="#4caf50"
                        d="M34.586,14.586l-13.57,13.586l-5.602-5.586l-2.828,2.828l8.434,8.414l16.395-16.414L34.586,14.586z"
                    /></svg
                >
            </div>
        {/if}
    </button>
{/if}
{#if type === 'contact_us'}
    <button
        class="btn-contact"
        on:click={() => {
            $contactsTransitioning.location = 'form';
        }}
        on:mouseenter={hvr}
        on:mouseleave={hvrOut}
    >
        <div class="btn-right-bg" />
        {$_('contact.contact-button')}
        <div class="arrow">
            <svg xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                <path
                    d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"
                />
            </svg>
        </div>
    </button>
{/if}

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
                font-size: 1.2rem;
                font-family: 'Sailec Normal', 'Gilroy';
                font-weight: 600;
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

    button {
        isolation: isolate;
        height: 1.5em;
        position: relative;
        font-family: 'Sailec Normal', 'Gilroy';
        font-size: 1.2rem;
        font-weight: 600;
        color: var(--clr-text-primery-100);
        padding-block: 0.6em 1.5em;
        padding-inline: 3em;
        cursor: pointer;

        .arrow,
        .arrow-back {
            overflow: hidden;
            position: absolute;
            top: 22%;
            height: 100%;
            transition: transform 300ms ease;
            svg {
                width: 30px;
                height: inherit;
                path {
                    fill: var(--clr-text-primery-100);
                }
            }
        }

        .arrow {
            right: 0.8em;
        }
        .arrow-back {
            left: 0.8em;
            svg {
                transform: rotate(180deg) translateY(40%);
            }
        }

        .btn-left-bg,
        .btn-right-bg {
            z-index: -1;
            position: absolute;
            inset: 0;
            height: 100%;
            width: 100%;
            background-color: var(--clr-accent-600);
        }

        .btn-right-bg {
            clip-path: polygon(10% 0, 100% 0, 100% 100%, 0% 100%);
        }
        .btn-left-bg {
            clip-path: polygon(0 0, 90% 0, 100% 100%, 0% 100%);
        }
    }

    button {
        &.btn-contact {
            margin-inline-end: auto;
        }

        &.btn-submit {
            &:disabled {
                color: var(--clr-text-accent-900);

                .btn-right-bg {
                    background-color: gray;
                }

                svg {
                    path {
                        fill: var(--clr-text-accent-900);
                    }
                }
            }

            .email-sent {
                position: absolute;
                left: 4%;
                top: -10%;
            }
        }
    }
</style>

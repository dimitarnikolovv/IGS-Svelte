<script>
    import { fly, fade } from 'svelte/transition';
    import { onMount } from 'svelte';
    import { contactsLocation } from '../../stores';
    import gsap from 'gsap';

    onMount(() => {
        const timelineBtnContactHover = gsap.timeline();

        hvr = function animateRealisationsHover() {
            timelineBtnContactHover.to('.arrow', { x: '10px', duration: 0.1 });
        };

        hvrOut = function animateRealisationsHoverOut() {
            timelineBtnContactHover.to('.arrow', { x: '0', duration: 0.1 });
        };

        const timelineBtnCountryHover = gsap.timeline();

        hvrCntry = function animateRealisationsHover() {
            timelineBtnCountryHover.to('.arrow-country', { x: '10px', duration: 0.1 });
        };

        hvrCntryOut = function animateRealisationsHoverOut() {
            timelineBtnCountryHover.to('.arrow-country', { x: '0', duration: 0.1 });
        };
    });

    let hvr;
    let hvrOut;
    let hvrCntry;
    let hvrCntryOut;
    let country = 'Poland';
</script>

<div class="content" in:fade={{ delay: 300 }} out:fly={{ x: 500, duration: 300 }}>
    <div class="container">
        <ul class="contacts">
            <li>
                <span class="info">Tel: </span>
                <a class="contacts-link" href="tel:+48694091229">
                    {#if country == 'Poland'}
                        +48 694 091 229
                    {/if}
                    {#if country == 'Bulgaria'}
                        +356 000 000 000
                    {/if}
                </a>
            </li>
            <li>
                <span class="info">Email: </span>
                <a class="contacts-link" href="mailto:biuro@igsproduction.com">
                    biuro@igsproduction.com
                </a>
            </li>
            <li>
                <span class="info"> Address: </span>
                <address>
                    <a
                        class="contacts-link"
                        href="https://goo.gl/maps/VDLTr2n9J67rQivL9"
                        target="blank"
                    >
                        {#if country == 'Poland'}
                            <span class="info--content">
                                Goździków 27-9, 04-231 <br /> Warszawa, Poland
                            </span>
                        {/if}

                        {#if country == 'Bulgaria'}
                            <span class="info--content">
                                Some street №00, <br /> 1000 Sofia, Bulgaria
                            </span>
                        {/if}
                    </a>
                </address>
            </li>
        </ul>
        <div class="btn-country-wrapper">
            <h4>See our contact info for {country == 'Poland' ? 'Bulgaria' : 'Poland'}</h4>
            <button
                class="btn-country"
                on:click={() => {
                    country = country == 'Poland' ? 'Bulgaria' : 'Poland';
                }}
                on:mouseenter={hvrCntry}
                on:mouseleave={hvrCntryOut}
            >
                {country == 'Poland' ? 'Bulgaria' : 'Poland'}
                <div class="arrow-country">
                    <svg xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                        <path
                            d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"
                        />
                    </svg>
                </div>
            </button>
        </div>
    </div>
    <iframe
        title="Our location in {country}"
        width="600"
        height="400"
        src={country == 'Poland'
            ? 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d152.7036492997698!2d21.137907494663!3d52.23869022782944!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ed21282c2f4e5%3A0xea1747c029c6c40!2zR2_FumR6aWvDs3cgMjcsIDA0LTIzMSBXYXJzemF3YSwg0J_QvtC70YjQsA!5e0!3m2!1sbg!2sbg!4v1644875164418!5m2!1sbg!2sbg'
            : 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2932.472112366705!2d23.323635715711085!3d42.693723221956695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa85726ebd90df%3A0x508308aa9b1d8685!2zMTAwMCDQptC10L3RgtGK0YAsINCh0L7RhNC40Y8!5e0!3m2!1sbg!2sbg!4v1645650005255!5m2!1sbg!2sbg'}
        style="border:0"
        allowfullscreen
    />

    <div class="btn-wrapper">
        <button
            class="btn-next"
            on:click={() => {
                $contactsLocation = 'form';
            }}
            on:mouseenter={hvr}
            on:mouseleave={hvrOut}
        >
            Contact us
            <div class="arrow">
                <svg xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                    <path
                        d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"
                    />
                </svg>
            </div>
        </button>
    </div>
</div>

<style lang="scss">
    div.content {
        width: 90%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 2rem;
    }
    iframe {
        width: 100%;
        height: 35vh;
    }

    div.container {
        width: 100%;
        display: flex;

        ul.contacts {
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 0.8rem;

            li {
                display: flex;
                flex-direction: column;
                gap: 0.2rem;
                color: var(--clr-text-primery-100);
                span.info {
                    font-weight: 600;
                }
                a.contacts-link {
                    color: inherit;
                }
            }
        }
        div.btn-country-wrapper {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
            width: 100%;
        }

        button.btn-country {
            font-size: 1.3rem;
            position: relative;
            color: var(--clr-text-primery-100);
            width: fit-content;
            padding-inline-end: 2.5em;
            cursor: pointer;

            .arrow-country {
                position: absolute;
                right: 0.6em;
                top: 0;
                transition: transform 300ms ease;
                svg {
                    width: 30px;
                    height: inherit;
                    path {
                        fill: var(--clr-text-primery-100);
                    }
                }
            }
        }
    }

    div.btn-wrapper {
        width: 100%;
    }

    button.btn-next {
        font-size: 1.2rem;
        position: relative;
        color: var(--clr-text-primery-100);
        background-color: var(--clr-accent-600);
        padding-block: 0.7em 0.4em;
        padding-inline: 2.6em;
        border-radius: 2em;
        cursor: pointer;

        .arrow {
            position: absolute;
            right: 0.6em;
            top: 26%;
            transition: transform 300ms ease;
            svg {
                width: 30px;
                height: inherit;
                path {
                    fill: var(--clr-text-primery-100);
                }
            }
        }
    }
</style>

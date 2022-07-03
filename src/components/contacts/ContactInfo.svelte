<script>
    import { _, locale } from '../../lib/i18n';
    import { fly, fade } from 'svelte/transition';
    import { onMount } from 'svelte';
    import { contactsTransitioning } from '../../lib/stores';
    import Button from '../Button.svelte';
    import gsap from 'gsap';

    onMount(() => {
        const timelineBtnCountryHover = gsap.timeline();

        hvrCntry = function animateCountryHover() {
            timelineBtnCountryHover.to('.arrow-country', { x: '10px', duration: 0.1 });
        };

        hvrCntryOut = function animateCountryHoverOut() {
            timelineBtnCountryHover.to('.arrow-country', { x: '0', duration: 0.1 });
        };
    });

    let hvrCntry;
    let hvrCntryOut;
    let country = $locale === 'bg' ? 'Bulgaria' : 'Poland';

    let matchesMedia = window.matchMedia('(min-width: 606px)');

    window.addEventListener('resize', () => {
        matchesMedia = window.matchMedia('(min-width: 606px)');
    });

    const outrosEnd = {
        poland: $locale === 'bg' ? true : false,
        bulgaria: $locale === 'bg' ? false : true,
    };

    let targetCntry;

    $: {
        if (country === 'Poland') {
            if ($locale === 'pl') targetCntry = 'Bułgarii';
            else targetCntry = $_('contact.bulgaria');
        } else {
            if ($locale === 'pl') targetCntry = 'Polski';
            else targetCntry = $_('contact.poland');
        }
    }
</script>

{#if $contactsTransitioning.outroEnd.form}
    <div
        class="content"
        in:fade={{ duration: 300 }}
        out:fly={{ x: 500, duration: 200 }}
        on:outroend={() => {
            $contactsTransitioning.outroEnd.countries = true;
            $contactsTransitioning.outroEnd.form = false;
        }}
    >
        {#if country == 'Poland' && outrosEnd.bulgaria}
            <div
                class="container"
                in:fade={{ duration: 400 }}
                out:fly={{ x: 100, duration: 200 }}
                on:outroend={() => {
                    outrosEnd.poland = true;
                    outrosEnd.bulgaria = false;
                }}
            >
                <ul class="contacts">
                    <li>
                        <span class="info">{$_('contact.tel')} </span>
                        <a class="contacts-link" href="tel:+48694091229"> +48 694 091 229 </a>
                    </li>
                    <li>
                        <span class="info">{$_('contact.email')} </span>
                        <a class="contacts-link" href="mailto:biuro@igsproduction.com">
                            biuro@igsproduction.com
                        </a>
                    </li>
                    <li>
                        <span class="info">{$_('contact.address')} </span>
                        <address>
                            <a
                                class="contacts-link"
                                href="https://goo.gl/maps/VDLTr2n9J67rQivL9"
                                target="blank"
                            >
                                <span class="info--content">
                                    Goździków 13/37, 04-231 <br /> Warszawa, Poland
                                </span>
                            </a>
                        </address>
                    </li>
                </ul>

                {#if matchesMedia.matches}
                    <div class="btn-country-wrapper">
                        <h4>
                            {$_('contact.title', {
                                values: {
                                    targetCountry: targetCntry,
                                },
                            })}
                        </h4>
                        <button
                            class="btn-country"
                            on:click={() => {
                                country = country == 'Poland' ? 'Bulgaria' : 'Poland';
                            }}
                            on:mouseenter={hvrCntry}
                            on:mouseleave={hvrCntryOut}
                        >
                            {country == 'Poland' ? $_('contact.bulgaria') : $_('contact.poland')}
                            <div class="arrow-country">
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
                        </button>
                    </div>
                {/if}
            </div>
            <iframe
                in:fade={{ duration: 400 }}
                out:fly={{ x: 100, duration: 200 }}
                title="Our location in {country}"
                width="600"
                height="400"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d152.7036492997698!2d21.137907494663!3d52.23869022782944!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ed21282c2f4e5%3A0xea1747c029c6c40!2zR2_FumR6aWvDs3cgMjcsIDA0LTIzMSBXYXJzemF3YSwg0J_QvtC70YjQsA!5e0!3m2!1sbg!2sbg!4v1644875164418!5m2!1sbg!2sbg"
                style="border:0"
                allowfullscreen
            />

            {#if !matchesMedia.matches}
                <div
                    class="btn-country-wrapper-mobile"
                    in:fade={{ duration: 400 }}
                    out:fly={{ x: 100, duration: 200 }}
                    on:outroend={() => {
                        outrosEnd.poland = true;
                        outrosEnd.bulgaria = false;
                    }}
                >
                    <h4>
                        {$_('contact.title', {
                            values: {
                                targetCountry: targetCntry,
                            },
                        })}
                    </h4>
                    <button
                        class="btn-country"
                        on:click={() => {
                            country = country == 'Poland' ? 'Bulgaria' : 'Poland';
                        }}
                        on:mouseenter={hvrCntry}
                        on:mouseleave={hvrCntryOut}
                    >
                        {country == 'Poland' ? $_('contact.bulgaria') : $_('contact.poland')}
                        <div class="arrow-country">
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
                    </button>
                </div>
            {/if}
        {/if}

        {#if country == 'Bulgaria' && outrosEnd.poland}
            <div
                class="container"
                in:fade={{ duration: 400 }}
                out:fly={{ x: 100, duration: 200 }}
                on:outroend={() => {
                    outrosEnd.bulgaria = true;
                    outrosEnd.poland = false;
                }}
            >
                <ul class="contacts">
                    <li>
                        <span class="info">{$_('contact.tel')} </span>
                        <a class="contacts-link" href="tel:+359896501210"> +356 89 6501210 </a>
                    </li>
                    <li>
                        <span class="info">{$_('contact.email')} </span>
                        <a class="contacts-link" href="mailto:office@igsproduction.com">
                            office@igsproduction.com
                        </a>
                    </li>
                    <li>
                        <span class="info">{$_('contact.address')} </span>
                        <address>
                            <a
                                class="contacts-link"
                                href="https://goo.gl/maps/Uxk7FZ9STybzqLwA6"
                                target="blank"
                            >
                                <span class="info--content">
                                    Ул. Бачо Киро №5, <br /> 9700 Шумен , България
                                </span>
                            </a>
                        </address>
                    </li>
                </ul>
                {#if matchesMedia.matches}
                    <div class="btn-country-wrapper">
                        <h4>
                            {$_('contact.title', {
                                values: {
                                    targetCountry: targetCntry,
                                },
                            })}
                        </h4>
                        <button
                            class="btn-country"
                            on:click={() => {
                                country = country == 'Poland' ? 'Bulgaria' : 'Poland';
                            }}
                            on:mouseenter={hvrCntry}
                            on:mouseleave={hvrCntryOut}
                        >
                            {country == 'Poland' ? $_('contact.bulgaria') : $_('contact.poland')}
                            <div class="arrow-country">
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
                        </button>
                    </div>
                {/if}
            </div>
            <iframe
                in:fade={{ duration: 400 }}
                out:fly={{ x: 100, duration: 200 }}
                title="Our location in {country}"
                width="600"
                height="400"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d871.8283247972486!2d23.32691186681162!3d42.69378379607549!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa856e0bf1bb6d%3A0x36725da11aa21a6c!2zMTAwMCDQodC-0YTQuNGPINGG0LXQvdGC0YrRgCwg0KHQvtGE0LjRjw!5e0!3m2!1sbg!2sbg!4v1651091027836!5m2!1sbg!2sbg"
                style="border:0"
                allowfullscreen
            />
            {#if !matchesMedia.matches}
                <div
                    class="btn-country-wrapper-mobile"
                    in:fade={{ duration: 400 }}
                    out:fly={{ x: 100, duration: 200 }}
                    on:outroend={() => {
                        outrosEnd.bulgaria = true;
                        outrosEnd.poland = false;
                    }}
                >
                    <h4>
                        {$_('contact.title', {
                            values: {
                                targetCountry: targetCntry,
                            },
                        })}
                    </h4>
                    <button
                        class="btn-country"
                        on:click={() => {
                            country = country == 'Poland' ? 'Bulgaria' : 'Poland';
                        }}
                        on:mouseenter={hvrCntry}
                        on:mouseleave={hvrCntryOut}
                    >
                        {country == 'Poland' ? $_('contact.bulgaria') : $_('contact.poland')}
                        <div class="arrow-country">
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
                    </button>
                </div>
            {/if}
        {/if}

        <Button type="contact_us" />
    </div>
{/if}

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

        @media only screen and (max-width: 605px) {
            flex-direction: column;
            gap: 2rem;
            div.btn-country-wrapper {
                order: 1;
            }
            ul.contacts {
                order: 2;
            }
        }

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

            button.btn-country {
                overflow: hidden;
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
    }

    div.btn-country-wrapper-mobile {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        width: fit-content;

        button.btn-country {
            overflow: hidden;
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
</style>

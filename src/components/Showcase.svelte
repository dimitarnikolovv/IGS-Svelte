<script>
    import { _ } from '../lib/i18n';
    import { images } from '../lib/stores';

    const clicked = {
        one: false,
        two: false,
        three: false,
        four: false,
        five: false,
    };

    function clearClicks(person = 0) {
        if (person === 1) {
            clicked.two = false;
            clicked.three = false;
            clicked.four = false;
            clicked.five = false;
        }
        if (person === 2) {
            clicked.one = false;
            clicked.three = false;
            clicked.four = false;
            clicked.five = false;
        }
        if (person === 3) {
            clicked.one = false;
            clicked.two = false;
            clicked.four = false;
            clicked.five = false;
        }
        if (person === 4) {
            clicked.one = false;
            clicked.two = false;
            clicked.three = false;
            clicked.five = false;
        }
        if (person === 5) {
            clicked.one = false;
            clicked.two = false;
            clicked.three = false;
            clicked.four = false;
        }
    }
</script>

<div class="container">
    <ul class="showcase" aria-label="our staff">
        <li
            class="showcase--items"
            class:on-click={clicked.one}
            aria-label={clicked.one ? 'close description' : 'expand description'}
            on:click={() => {
                clearClicks(1);
                clicked.one = !clicked.one;
            }}
        >
            <div class="wrap start" style="background-image: url({$images.people.person1})">
                <h4>{$_('about.team.person1.name')}</h4>
                <p class:hidden={!clicked.one} aria-label="description">
                    {$_('about.team.person1.description')}
                </p>
            </div>
        </li>
        <li
            class="showcase--items"
            class:on-click={clicked.two}
            aria-label={clicked.two ? 'close description' : 'expand description'}
            on:click={() => {
                clearClicks(2);
                clicked.two = !clicked.two;
            }}
        >
            <div class="wrap" style="background-image: url({$images.people.person2})">
                <h4>{$_('about.team.person2.name')}</h4>
                <p class:hidden={!clicked.two} aria-label="description">
                    {$_('about.team.person2.description')}
                </p>
            </div>
        </li>
        <li
            class="showcase--items"
            class:on-click={clicked.three}
            aria-label={clicked.three ? 'close description' : 'expand description'}
            on:click={() => {
                clearClicks(3);
                clicked.three = !clicked.three;
            }}
        >
            <div class="wrap" style="background-image: url({$images.people.person3})">
                <h4>{$_('about.team.person3.name')}</h4>
                <p class:hidden={!clicked.three} aria-label="description">
                    {$_('about.team.person3.description')}
                </p>
            </div>
        </li>
        <li
            class="showcase--items"
            class:on-click={clicked.four}
            aria-label={clicked.four ? 'close description' : 'expand description'}
            on:click={() => {
                clearClicks(4);
                clicked.four = !clicked.four;
            }}
        >
            <div class="wrap" style="background-image: url({$images.people.person4})">
                <h4>{$_('about.team.person4.name')}</h4>
                <p class:hidden={!clicked.four} aria-label="description">
                    {$_('about.team.person4.description')}
                </p>
            </div>
        </li>
        <li
            class="showcase--items"
            class:on-click={clicked.five}
            aria-label={clicked.five ? 'close description' : 'expand description'}
            on:click={() => {
                clearClicks(5);
                clicked.five = !clicked.five;
            }}
        >
            <div class="wrap end" style="background-image: url({$images.people.person5})">
                <h4>{$_('about.team.person5.name')}</h4>
                <p class:hidden={!clicked.five} aria-label="description">
                    {$_('about.team.person5.description')}
                </p>
            </div>
        </li>
    </ul>
</div>

<style lang="scss">
    .container {
        position: relative;
        display: flex;
        justify-content: center;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }

    ul.showcase {
        position: absolute;
        display: flex;
        width: 121%;
        height: 100%;

        li.showcase--items {
            overflow: hidden;
            display: flex;
            justify-content: center;
            width: 20%;
            height: 100%;
            cursor: pointer;
            transform: skew(-20deg);
            transition: all 200ms ease-in-out;

            div.wrap {
                transform: skew(20deg);
                position: absolute;
                height: 100%;
                width: 80vw;
                display: flex;
                justify-content: center;
                align-items: center;

                background-repeat: no-repeat;
                background-size: cover;
                background-position: center;

                h4 {
                    width: fit-content;
                    max-width: 25%;
                    font-size: 1.6rem;
                    font-family: 'Sailec Bold', 'Gilroy';
                    transition: transform 100ms 230ms ease-in;
                }

                p {
                    position: absolute;
                    transition: opacity 200ms 400ms ease-in;

                    @media only screen and (max-width: 420px) {
                        bottom: 10%;
                    }

                    @media only screen and (max-width: 365px) {
                        bottom: 0.5rem;
                    }
                }

                .hidden {
                    opacity: 0;
                    transition: opacity 0ms ease-in;
                }

                &.start {
                    h4 {
                        width: 15%;
                        padding-inline-start: 13%;
                    }
                }

                &.end {
                    h4 {
                        width: 15%;
                        padding-inline-end: 9%;

                        @media only screen and (min-width: 1081), (max-width: 1289px) {
                            font-size: 1.4rem;
                        }
                    }
                }
            }

            &:hover {
                transform: scale(1.04) skew(-20deg);
            }

            &.on-click {
                width: 80%;
                div.wrap {
                    align-items: center;
                    padding-block-start: 0;
                    padding-inline-start: 0;

                    h4 {
                        max-width: fit-content;
                        transform: translateY(-7rem);
                    }

                    p {
                        width: 60%;
                    }
                    &.start {
                        h4 {
                            max-width: fit-content;
                            width: fit-content;
                            padding-inline-start: 0;
                        }
                        p {
                            padding-inline-start: 12%;
                            width: 48%;

                            @media only screen and (max-width: 490px) {
                                bottom: 5%;
                            }
                        }
                    }

                    &.end {
                        h4 {
                            max-width: fit-content;
                            width: fit-content;
                            padding-inline-end: 0;
                        }
                        p {
                            padding-inline-end: 10%;
                            width: 50%;
                        }
                    }
                }
            }
        }

        @media only screen and (max-width: 1080px) {
            flex-direction: column;
            width: 100%;
            li.showcase--items {
                width: 100%;
                height: 20%;
                transform: skew(0);

                div.wrap {
                    transform: skew(0);
                    width: 100vw;
                    height: 100%;

                    h4 {
                        max-width: 100%;
                        transition: transform 100ms 0ms ease-in;
                    }

                    &.start {
                        h4 {
                            width: fit-content;
                            padding-inline-start: 0;
                        }
                    }

                    &.end {
                        h4 {
                            width: fit-content;
                            padding-inline-end: 0;
                        }
                    }
                }

                &:hover,
                &:focus {
                    transform: scale(1.03) skew(0deg);
                }

                &.on-click {
                    height: 50%;
                    width: 100%;

                    div.wrap {
                        p {
                            width: 80%;
                            @media only screen and (max-width: 424px) {
                                width: 90%;
                            }
                        }

                        &.start {
                            p {
                                padding-inline-start: 0;
                                width: 80%;
                                @media only screen and (max-width: 424px) {
                                    width: 90%;
                                }
                            }
                        }

                        &.end {
                            p {
                                padding-inline-end: 0;
                                width: 80%;
                                @media only screen and (max-width: 424px) {
                                    width: 90%;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>

<script>
    import { images } from '../stores';

    const clicked = {
        one: false,
        two: false,
        three: false,
        four: false,
        five: false,
    };

    function clerClicks(person = 0) {
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
    <div style="position: absolute; top: 2rem; z-index: 10; pointer-events: none">
        <p>
            <span class="info-text"
                >The images are with different color filters. Pay attention on the text and how it
                looks in front of them to deside which works best for you.</span
            >
        </p>
    </div>
    <ul class="showcase">
        <li
            class="showcase--items"
            class:on-click={clicked.one}
            on:click={() => {
                clerClicks(1);
                clicked.one = !clicked.one;
            }}
        >
            <div class="wrap start" style="background-image: url({$images.people.person1})">
                <div class="content">
                    <h4>Norbert Grzechnik</h4>
                    <p class:hidden={!clicked.one}>
                        Norbert loves teamwork, but he also feels like a fish in water alone. He has
                        knowledge and experience in the industry, he can talk to people and listen
                        to their needs, and his creativity allows him to create original projects
                        that accurately match the client's assumptions. He is hardworking, ambitious
                        and will always lend a helping hand.
                    </p>
                </div>
            </div>
        </li>
        <li
            class="showcase--items"
            class:on-click={clicked.two}
            on:click={() => {
                clerClicks(2);
                clicked.two = !clicked.two;
            }}
        >
            <div class="wrap" style="background-image: url({$images.people.person2})">
                <div class="content">
                    <h4>Radosław Frelek</h4>
                    <p class:hidden={!clicked.two}>
                        Radek is great in finances. He creates valuations and budget assumptions for
                        our clients with closed eyes. He can find money where there is none, and his
                        cool calculations and entrepreneurial thinking provide safe solutions to the
                        financial dilemmas of our contractors.
                    </p>
                </div>
            </div>
        </li>
        <li
            class="showcase--items"
            class:on-click={clicked.three}
            on:click={() => {
                clerClicks(3);
                clicked.three = !clicked.three;
            }}
        >
            <div class="wrap" style="background-image: url({$images.people.person3})">
                <div class="content">
                    <h4>Aleksandra Zięb</h4>
                    <p class:hidden={!clicked.three}>
                        Ola is a woman focused on work and achieving success. She is meticulous, can
                        handle difficult and supposedly unsolvable issues, and is always smiling and
                        ready to help. She drives our entire team with energy and commitment, and
                        her fresh perspective opens up previously closed gates.
                    </p>
                </div>
            </div>
        </li>
        <li
            class="showcase--items"
            class:on-click={clicked.four}
            on:click={() => {
                clerClicks(4);
                clicked.four = !clicked.four;
            }}
        >
            <div class="wrap" style="background-image: url({$images.people.person4})">
                <div class="content">
                    <h4>Igor Grzegorz Suski</h4>
                    <p class:hidden={!clicked.four}>
                        Igor is someone every company would like to have. Hard-working,
                        conscientious and always willing to act. He is not afraid of the most
                        difficult challenges posed by our clients, he will always find favorable
                        solutions. He infects others with his sense of humor and new ideas, and his
                        projects always end with customer satisfaction.
                    </p>
                </div>
            </div>
        </li>
        <li
            class="showcase--items"
            class:on-click={clicked.five}
            on:click={() => {
                clerClicks(5);
                clicked.five = !clicked.five;
            }}
        >
            <div class="wrap end" style="background-image: url({$images.people.person5})">
                <div class="content">
                    <h4>Hanna Sosnowska</h4>
                    <p class:hidden={!clicked.five}>
                        Hanna, thanks to many years of experience in domestic and international
                        business, is a person ready for anything. Smiling, relaxed, but at the same
                        time conscientious and always 100% committed to work, she motivates us to
                        overcome difficulties and develop.
                    </p>
                </div>
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
                transition: all 200ms ease-in-out;

                background-repeat: no-repeat;
                background-size: cover;
                background-position: center;

                .content {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 1rem;
                    width: 20%;
                    transition: width 200ms ease-in;
                    // background-color: rgba(0, 0, 0, 0.5);

                    h4 {
                        font-family: 'Sailec Bold';
                    }

                    p {
                        transition: opacity 200ms 400ms ease-in;
                    }

                    .hidden {
                        opacity: 0;
                        position: absolute;
                        transition: opacity 0ms 0ms ease-in;
                    }
                }

                &.start {
                    .content {
                        padding-inline-start: 17%;
                    }
                }

                &.end {
                    .content {
                        padding-inline-end: 6%;
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
                    .content {
                        width: 60%;
                    }

                    &.start {
                        .content {
                            padding-inline-start: 15%;
                            width: 45%;
                        }
                    }

                    &.end {
                        .content {
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

                    .content {
                        width: 20%;
                    }

                    &.start {
                        .content {
                            padding-inline-start: 0;
                            width: 20%;
                        }
                    }

                    &.end {
                        .content {
                            padding-inline-end: 0;
                            width: 20%;
                        }
                    }
                }

                &:hover {
                    transform: scale(1.03) skew(0deg);
                }

                &.on-click {
                    height: 50%;
                    width: 100%;

                    div.wrap {
                        .content {
                            width: 80%;
                        }

                        &.start {
                            .content {
                                padding-inline-start: 0;
                                width: 80%;
                            }
                        }

                        &.end {
                            .content {
                                padding-inline-end: 0;
                                width: 80%;
                            }
                        }
                    }
                }
            }
        }
    }
</style>

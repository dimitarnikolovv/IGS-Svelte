<script>
    import { fly } from 'svelte/transition';
    import { isToggled, menuDark } from '../stores';

    function navClick() {
        $isToggled = false;
    }

    function onMouseIn() {
        $menuDark = true;
    }

    function onMouseOut() {
        $menuDark = false;
    }
</script>

{#if $isToggled}
    <div class="navigation-main" transition:fly={{ duration: 300, x: 400, delay: 200 }}>
        <nav>
            <ul class="nav-links">
                <li class="nav-link" on:mouseenter={onMouseIn} on:mouseleave={onMouseOut}>
                    <a class="nav-a" href="/" on:click={navClick}>
                        <p class="nav-title">home</p>
                        <p class="nav-sub-title">Where it all began</p></a
                    >
                </li>
                <li class="nav-link">
                    <a class="nav-a" href="/#/about" on:click={navClick}>
                        <p class="nav-title">who we are</p>
                        <p class="nav-sub-title">Get to know us better</p></a
                    >
                </li>
                <li class="nav-link">
                    <a class="nav-a" href="/#/realisations" on:click={navClick}
                        ><p class="nav-title">realisations</p>
                        <p class="nav-sub-title">See what we are proud of</p></a
                    >
                </li>
                <li class="nav-link">
                    <a class="nav-a" href="/#/contact" on:click={navClick}>
                        <p class="nav-title">contact us</p>
                        <p class="nav-sub-title">We are waiting for you</p></a
                    >
                </li>
            </ul>
        </nav>
    </div>
{/if}

<style lang="scss">
    .navigation-main {
        overflow: hidden;
        width: 100vw;
        height: 100vh;
        position: relative;
        margin: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        @media only screen and (max-width: 1080px) {
            margin: 0;
        }
    }
    nav {
        overflow: hidden;
        display: flex;
        justify-content: center;
        width: 121%;
        height: 100%;
        background-color: var(--clr-accent-900);

        ul {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;
            opacity: 1;
            background: linear-gradient(105deg, rgba(0, 0, 0, 1) 50%, rgb(15, 15, 87) 100%);

            li {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 100%;
                height: 100%;
                transform: skew(-20deg);
                transition: width 200ms ease;

                &:nth-of-type(1) {
                    justify-content: flex-end;
                    a {
                        margin-right: 20%;
                    }
                }
                &:nth-of-type(4) {
                    justify-content: flex-start;
                    a {
                        margin-left: 4rem;
                    }
                }

                &:nth-of-type(2),
                &:nth-of-type(3),
                &:nth-of-type(4) {
                    border-left: 1px solid var(--clr-primery-100);
                }

                &::after {
                    content: '';
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    background-color: var(--clr-primery-100);
                    transform: translateX(100%);
                    opacity: 0;
                    transition: transform 400ms ease, opacity 10ms;
                }

                a {
                    z-index: 10;
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                    align-items: center;
                    justify-content: center;
                    text-transform: uppercase;
                    color: var(--clr-text-primery-100);
                    transition: color 300ms ease;
                    p {
                        transform: skew(20deg);

                        &.nav-title {
                            font-family: 'Sailec Medium';
                            font-size: 1.3rem;
                        }

                        &.nav-sub-title {
                            text-transform: none;
                            opacity: 0;
                            transform: translateX(100%);
                            transition: transform 400ms ease, opacity 200ms ease;
                        }
                    }
                }

                &:hover {
                    overflow: hidden;
                    &:after {
                        opacity: 1;
                        transform: translateX(0);
                    }
                    a {
                        color: var(--clr-text-primery-900);
                    }
                    .nav-sub-title {
                        opacity: 1;
                        transform: translateX(0.7rem) skew(20deg);
                        @media only screen and (max-width: 1150px) {
                            transform: translateX(0) skew(0);
                        }
                    }
                }
            }
        }

        @media only screen and (max-width: 1150px) {
            width: 100%;
            ul {
                position: absolute;
                bottom: 2rem;
                height: 80%;
                flex-direction: column;
                background: transparent;
                transform: skew(0);

                li {
                    transform: skew(0);

                    &:nth-of-type(2),
                    &:nth-of-type(3),
                    &:nth-of-type(4) {
                        border-left: none;
                        border-block-start: 1px solid var(--clr-primery-100);
                    }

                    &:nth-of-type(1) {
                        justify-content: center;
                        a {
                            margin: 0;
                        }
                    }
                    &:nth-of-type(4) {
                        justify-content: center;
                        a {
                            margin-left: 0;
                        }
                    }

                    a {
                        p {
                            transform: skew(0);
                            &.nav-sub-title {
                                opacity: 1;
                                transform: translateX(0) skew(0);
                            }
                        }
                    }
                }
            }
        }
    }
</style>

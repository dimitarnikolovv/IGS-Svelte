<script>
    import { isToggled, menuDark, darkenMenu } from '../lib/stores';

    function changeToggled() {
        $isToggled = !$isToggled;
    }

    let scrollY;
</script>

<svelte:window bind:scrollY />

<div class="hamburger-wrap app-head" class:head-on-scroll={scrollY > 40 ? true : false}>
    <div
        class="hamburger"
        class:animate-hamburger-bg={$isToggled}
        class:menu-dark={$menuDark}
        class:darken-menu={$darkenMenu}
    >
        <button
            id="nav-link"
            on:click={changeToggled}
            aria-label={$isToggled ? 'Close navigation' : 'Open navigation'}
        >
            <div data-cross="1" class:animate-hamburger-1={$isToggled} />
            <div data-cross="hide" class:animate-hamburger-hide={$isToggled} />
            <div data-cross="2" class:animate-hamburger-2={$isToggled} />
        </button>
    </div>
    <div class="menu" />
</div>

<style lang="scss">
    .app-head {
        transition: transform 350ms ease;
    }

    .head-on-scroll {
        transform: translateY(-3rem);
        @media only screen and (max-width: 1080px) {
            transform: translateY(-1rem);
        }
    }

    .hamburger-wrap {
        z-index: 3;
        position: fixed;
        left: 8vw;
        top: 5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: 'Sailec Medium';

        @media only screen and (max-width: 1080px) {
            left: 2rem;
            top: 2rem;
        }

        @media only screen and (max-width: 768px) {
            left: 1rem;
            top: 1rem;
        }
    }

    //MENU//

    .hamburger {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50px;
        height: 50px;

        &::after {
            z-index: -1;
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            background-color: red;
            transform: translateY(50px);
            opacity: 0;
            transition: all 400ms ease;
        }

        div,
        button {
            margin-block: 4px;
            height: 2px;
        }
        #nav-link {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 90%;
            height: 90%;
            cursor: pointer;
            :nth-child(1) {
                width: 80%;
                background-color: var(--clr-accent-900);
                transition: transform 300ms 200ms ease;
            }
            :nth-child(2) {
                width: 50%;
                transform: translateX(-7px);
                transition: transform 300ms 200ms ease, opacity 300ms 200ms ease,
                    background 200ms linear;
                background-color: var(--clr-accent-900);
            }
            :nth-child(3) {
                width: 70%;
                transform: translateX(-3px);
                transition: transform 300ms 200ms ease;
                background-color: var(--clr-accent-900);
            }
        }

        #nav-link::after {
            content: 'menu';
            position: absolute;
            right: -3.7rem;
            text-transform: uppercase;
        }

        #nav-link:hover {
            :nth-child(2),
            :nth-child(3) {
                transform: translateX(0);
            }
        }

        @media only screen and (max-width: 768px) {
            #nav-link {
                color: var(--clr-primery-100) !important;

                & > * {
                    background-color: var(--clr-primery-100) !important;
                }
            }
        }
    }

    .animate-hamburger-hide {
        background-color: transparent !important;
        opacity: 0;
    }

    .animate-hamburger-1 {
        background-color: var(--clr-primery-100) !important;
        width: 30px !important;
        transform: translateY(10px) rotate(45deg) !important;
    }

    .animate-hamburger-2 {
        background-color: var(--clr-primery-100) !important;
        width: 30px !important;
        transform: translateY(-10px) rotate(-45deg) !important;
    }

    .animate-hamburger-bg {
        #nav-link::after {
            content: 'close';
            color: var(--clr-primery-100);
        }
    }

    .animate-hamburger-bg::after {
        transform: translateY(0);
        opacity: 1;
    }

    .menu-dark {
        #nav-link::after {
            color: var(--clr-accent-900);
            transition: color 200ms ease;
        }
        @media only screen and (max-width: 1151px) {
            #nav-link::after {
                color: var(--clr-primery-100);
            }
        }
    }

    .darken-menu {
        #nav-link {
            color: var(--clr-accent-900) !important;

            & > * {
                background-color: var(--clr-accent-900) !important;
            }
        }
    }

    //END MENU//
</style>

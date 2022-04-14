<script>
    import { isToggled } from '../stores';
    import Main from '../components/Main.svelte';
    import Section from '../components/Section.svelte';
    import RealisationsBtn from '../components/RealisationsBtn.svelte';
</script>

<Main overflow={false}>
    {#if !$isToggled}
        <div class="languages-wrap">
            <span class="active-lang"><a href="/">EN</a></span>
            <span class="lang-spacer">/</span>
            <span><a href="/en">BG</a></span>
            <span class="lang-spacer">/</span>
            <span><a href="/pl">PL</a></span>
        </div>
    {/if}

    <Section title="Lorem ipsum dolor sit amet." />

    {#if !$isToggled}
        <RealisationsBtn />
    {/if}
</Main>

<style lang="scss">
    .languages-wrap {
        z-index: 3;
        position: fixed;
        right: 8vw;
        top: 6rem;
        display: flex;
        font-family: 'Sailec Thin';
        span {
            font-size: 1.1rem;
            overflow-y: hidden;
            color: var(--clr-text-primery-100);
            &.lang-spacer {
                margin-inline: 0.4rem;
            }

            &.active-lang::before {
                content: '';
                display: block;
                width: 100%;
                height: 4px;
                background-color: var(--clr-accent-600);
            }

            a {
                color: var(--clr-text-primery-100);
            }

            a::after {
                content: '';
                display: block;
                height: 1px;
                width: 100%;
                left: 0;
                opacity: 0;
                transform: translateX(-100%);
                background-color: var(--clr-primery-100);
                transition: all 300ms ease;
            }
            a:hover {
                &::after {
                    opacity: 1;
                    transform: translateX(0);
                }
            }
        }

        @media only screen and (max-width: 1080px) {
            right: 2rem;
            top: 4rem;
        }

        @media only screen and (max-width: 768px) {
            right: 1rem;
            top: 2rem;
        }
    }
</style>

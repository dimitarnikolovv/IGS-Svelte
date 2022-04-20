<script>
    import { images, isToggled } from '../stores';
    import Main from '../components/Main.svelte';
    import Section from '../components/Section.svelte';
    import RealisationsBtn from '../components/RealisationsBtn.svelte';
</script>

<Main overflow={false}>
    {#if !$isToggled}
        <div class="languages-wrap">
            <span class="active-lang"><a href="/">EN</a></span>
            <span class="lang-spacer">/</span>
            <span><a href="/bg">BG</a></span>
            <span class="lang-spacer">/</span>
            <span><a href="/pl">PL</a></span>
        </div>
    {/if}

    <Section carousel={false} image={$images.covers.home} sectionLabel="Home section">
        <h3>Using new media, we change <span>your ideas</span> into reality!</h3>
    </Section>

    {#if !$isToggled}
        <RealisationsBtn />
    {/if}
</Main>

<style lang="scss">
    h3 {
        text-align: right;
    }

    .languages-wrap {
        z-index: 3;
        position: fixed;
        right: 8vw;
        top: 6rem;
        display: flex;
        font-family: 'Sailec Thin';
        span {
            font-size: 1rem;
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
                position: relative;
                color: var(--clr-text-primery-100);
            }

            a::after {
                content: '';
                position: absolute;
                width: 100%;
                transform: scaleX(0);
                height: 1px;
                bottom: 0;
                left: 0;
                background-color: var(--clr-primery-100);
                transform-origin: bottom right;
                transition: transform 0.25s ease-out;
            }
            a:hover {
                &::after {
                    transform: scaleX(1);
                    transform-origin: bottom left;
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

<script>
    import { _, locale, setUpI18n } from '../i18n';
    import { images, isToggled } from '../stores';
    import Main from '../components/Main.svelte';
    import Section from '../components/Section.svelte';
    import RealisationsBtn from '../components/RealisationsBtn.svelte';
</script>

<svelte:head>
    <title>{$_('home.page-title')}</title>
</svelte:head>

<Main overflow={false}>
    {#if !$isToggled}
        <h1 style="position: absolute;">IGS Production Home Page</h1>
        <div class="languages-wrap">
            <span class:active-lang={$locale === 'en'}>
                <button
                    type="button"
                    on:click={() => {
                        setUpI18n({ withLocale: 'en' });
                    }}>EN</button
                >
            </span>
            <span class="lang-spacer">/</span>
            <span class:active-lang={$locale === 'bg'}>
                <button
                    type="button"
                    on:click={() => {
                        setUpI18n({ withLocale: 'bg' });
                    }}>BG</button
                >
            </span>
            <span class="lang-spacer">/</span>
            <span class:active-lang={$locale === 'pl'}>
                <button
                    type="button"
                    on:click={() => {
                        setUpI18n({ withLocale: 'pl' });
                    }}>PL</button
                >
            </span>
        </div>
    {/if}

    <Section carousel={false} image={$images.covers.home} sectionLabel="Home section">
        <h3>{@html $_('home.title')}</h3>
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

            button {
                cursor: pointer;
                position: relative;
                color: var(--clr-text-primery-100);
            }

            button::after {
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
            button:hover {
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

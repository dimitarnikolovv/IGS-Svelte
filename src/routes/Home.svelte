<script>
    import { _, locale, setUpI18n } from '../lib/i18n';
    import { images, isToggled, loaderFinished } from '../lib/stores';
    import Main from '../components/Main.svelte';
    import Section from '../components/Section.svelte';
    import Button from '../components/Button.svelte';

    let renderVideo = true;

    $: {
        reMountVideo($locale);
    }

    function reMountVideo() {
        renderVideo = false;
        setTimeout(() => (renderVideo = true), 0);
    }
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
        <h3 style="opacity: 0; position: absolute">{@html $_('home.title')}</h3>
        <div class="text-animation-wrap">
            {#if renderVideo && $loaderFinished}
                <video autoplay muted playsinline loop preload="metadata">
                    <source src={$_('home.animation-path.webm')} type="video/webm" />
                    <source src={$_('home.animation-path.mov')} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            {/if}
        </div>
    </Section>

    {#if !$isToggled}
        <Button type="realisations" />
    {/if}
</Main>

<style lang="scss">
    h3 {
        text-align: right;
    }

    .text-animation-wrap {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        video {
            width: 100%;
        }
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

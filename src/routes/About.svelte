<script>
    import { _ } from '../i18n';
    import Section from '../components/Section.svelte';
    import Main from '../components/Main.svelte';
    import Showcase from '../components/Showcase.svelte';
    import { images } from '../stores';
</script>

<svelte:head>
    <title>{$_('about.page-title')}</title>
</svelte:head>

<Main>
    <h1 style="position: absolute; top:8rem;">About our team</h1>
    <Section type="blank" sectionLabel="Meet our team">
        <Showcase />
    </Section>
    <Section carousel={false} image={$images.covers.about[0]} sectionLabel="Who we are?">
        <p>
            {@html $_('about.section1')}
        </p>
    </Section>
    <Section carousel={false} image={$images.covers.about[1]} sectionLabel="How we work?"
        ><p>
            {@html $_('about.section2')}
        </p>
    </Section>
    <Section carousel={false} image={$images.covers.about[2]} sectionLabel="We are prosperous">
        <p>
            {@html $_('about.section3')}
        </p>
    </Section>
</Main>

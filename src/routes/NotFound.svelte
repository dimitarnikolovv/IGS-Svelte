<script>
    import Main from '../components/Main.svelte';
    import Section from '../components/Section.svelte';
</script>

<svelte:head>
    <title>Page Not Found - IGS Production</title>
</svelte:head>

<Main overflow={false}>
    <Section type="blank" sectionLabel="Page not found">
        <h1>
            We are <span>sorry</span> to inform you that the page you are looking for is
            <span>not found</span> :(
        </h1>
    </Section>
</Main>

<style type="scss">
    h1 {
        margin-block-start: 20%;
        padding-inline: 3%;
    }
</style>

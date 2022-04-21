<script>
    import { images } from '../stores';
    import Main from '../components/Main.svelte';
    import Section from '../components/Section.svelte';
    import Footer from '../components/Footer.svelte';
</script>

<Main overflow={false}>
    <Section carousel={false} image={$images.covers.contact} sectionLabel="Contacts section">
        <h3>Contact <span>us</span></h3>
    </Section>
</Main>

<Footer />

<style lang="scss">
    h3 {
        text-align: right;
    }
</style>

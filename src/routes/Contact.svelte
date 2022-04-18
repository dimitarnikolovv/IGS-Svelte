<script>
    import { images, isToggled } from '../stores';
    import Main from '../components/Main.svelte';
    import Section from '../components/Section.svelte';
    // import RealisationsBtn from '../components/RealisationsBtn.svelte';
</script>

<Main overflow={false}>
    <Section carousel={false} image={$images.covers.contact}>
        <h3>Contact <span>us</span></h3>
    </Section>
</Main>

<style lang="scss">
    h3 {
        text-align: right;
    }
</style>

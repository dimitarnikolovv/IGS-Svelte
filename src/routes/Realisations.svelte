<script>
    import Main from '../components/Main.svelte';
    import Section from '../components/Section.svelte';
    import { images } from '../stores';
</script>

<Main>
    <Section
        carousel={true}
        image={$images.projects.project1.images[$images.projects.project1.images.length - 1]}
        gallery={$images.projects.project1.images}
    >
        <h3>Work in <span>progress</span></h3>
        <p>coming soon</p>
        <p>coming soon</p>
    </Section>
    <Section type="work" />
    <Section
        carousel={true}
        image={$images.projects.project2.images[$images.projects.project2.images.length - 1]}
        gallery={$images.projects.project2.images}
    />
    <Section type="work" />
    <Section
        carousel={true}
        image={$images.projects.project3.images[$images.projects.project3.images.length - 1]}
        gallery={$images.projects.project3.images}
    />
    <Section type="work" />
    <Section
        carousel={true}
        image={$images.projects.project4.images[$images.projects.project4.images.length - 1]}
        gallery={$images.projects.project4.images}
    />
    <Section type="work" />
    <Section
        carousel={true}
        image={$images.projects.project5.images[$images.projects.project5.images.length - 1]}
        gallery={$images.projects.project5.images}
    />
    <Section type="work" />
</Main>

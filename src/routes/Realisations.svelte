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
        <div class="right">
            <h3>ZPE - Integrated Educational Platform</h3>
        </div>
    </Section>
    <Section type="work" />
    <Section
        carousel={true}
        image={$images.projects.project2.images[$images.projects.project2.images.length - 1]}
        gallery={$images.projects.project2.images}
    >
        <div class="right">
            <h3>The future through the past</h3>
        </div>
    </Section>
    <Section type="work" />
    <Section
        carousel={true}
        image={$images.projects.project3.images[$images.projects.project3.images.length - 1]}
        gallery={$images.projects.project3.images}
    >
        <div class="right">
            <h3>Karolina Stanisławczyk - Do you like me?</h3>
        </div>
    </Section>
    <Section type="work" />
    <Section
        carousel={true}
        image={$images.projects.project4.images[$images.projects.project4.images.length - 1]}
        gallery={$images.projects.project4.images}
    >
        <div class="right">
            <h3>
                Everyday Warsaw 1915-1918. Glass negatives from the collection of TCHOREK BENTAL L
                HISTORICAL STUDY
            </h3>
        </div>
    </Section>
    <Section type="work" />
    <Section
        carousel={true}
        image={$images.projects.project5.images[$images.projects.project5.images.length - 1]}
        gallery={$images.projects.project5.images}
    >
        <div class="right">
            <h3>Yasir - Dope</h3>
        </div>
    </Section>
    <Section type="work" />
</Main>

<style lang="scss">
    div.right {
        position: absolute;
        max-width: 40%;
        right: 2%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    @media only screen and (max-width: 768px) {
        div.right {
            position: relative;
            justify-content: center;
            max-width: 100%;
        }
    }
</style>

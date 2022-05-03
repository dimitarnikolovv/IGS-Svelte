<script>
    import Section from '../components/Section.svelte';
    import Main from '../components/Main.svelte';
    import Showcase from '../components/Showcase.svelte';
    import { images } from '../stores';
</script>

<svelte:head>
    <title>About - IGS Production</title>
</svelte:head>

<Main>
    <h1 style="position: absolute; top:8rem;">About our team</h1>
    <Section type="blank" sectionLabel="Meet our team">
        <Showcase />
    </Section>
    <Section carousel={false} image={$images.covers.about[0]} sectionLabel="Who we are?">
        <p>
            We are a collective of young, <span>creative people</span>. Full of passion and
            <span>professionalism</span>, as well as <span>perfectionism</span> in the actions
            taken. We want these features to convince <span>you to cooperate</span> with us. We
            would like to thank all our existing contractors and we hope that we will always enjoy
            so much <span>trust from you</span>.
        </p>
    </Section>
    <Section carousel={false} image={$images.covers.about[1]} sectionLabel="How we work?"
        ><p>
            Our team is divided into those who work in the office, <span
                >preparing for your concepts</span
            >, budgeting and settlements, and a <span>team of planners</span>, bravely carrying out
            projects in the field. <span>We are not afraid</span> of new challenges, each of which
            is carried out with <span>attention to the smallest details</span>. Thanks to you, we
            can <span>constantly develop and improve our skills</span>.
        </p>
    </Section>
    <Section carousel={false} image={$images.covers.about[2]} sectionLabel="We are prosperous">
        <p>
            Without resting on our laurels, <span>we constantly improve our services</span>, train
            and increase the technical resources of our equipment so that
            <span>each subsequent project is our best</span>. Development goes hand in hand with the
            <span>recruitment of new personalities</span>, so if you think that you can
            <span>turn an idea into reality</span> just like us - speak up!
        </p>
    </Section>
</Main>

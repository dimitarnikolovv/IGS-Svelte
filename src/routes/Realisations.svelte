<script>
    import { _ } from '../lib/i18n';
    import { images } from '../lib/stores';
    import Main from '../components/Main.svelte';
    import Showreel from '../components/Showreel.svelte';
    import Section from '../components/Section.svelte';
    import ProjectDescription from '../components/ProjectDescription.svelte';
</script>

<svelte:head>
    <title>{$_('realisations.page-title')}</title>
</svelte:head>

<Main>
    <h1 style="position: absolute; top:8rem; font-size: 5px;">What we have done</h1>
    <Showreel videoUrl={{ mov: './images/logo.mov', webm: './images/logo.webm' }} />
    <Section
        carousel={true}
        image={$images.projects.project1.images[$images.projects.project1.images.length - 1]}
        gallery={$images.projects.project1.images}
        sectionLabel="Project section"
    >
        <div class="right">
            <h3>{$_('realisations.section1.title')}</h3>
        </div>
    </Section>
    <Section type="work" sectionLabel="About the project above">
        <div class="content-wrap--x">
            <div class="content-wrap--right">
                <ProjectDescription
                    title={$_('realisations.section1.project-information.about.title')}
                    direction="top-left"
                    multipleItems={true}
                >
                    {@html $_('realisations.section1.project-information.about.content')}
                </ProjectDescription>
            </div>
            <div class="content-wrap--left">
                <ProjectDescription
                    title={$_('realisations.section1.project-information.implementation.title')}
                    direction="top-right"
                >
                    {@html $_('realisations.section1.project-information.implementation.content')}
                </ProjectDescription>
            </div>
        </div>
        <div class="content-wrap--x">
            <div class="content-wrap--right">
                <ProjectDescription
                    title={$_('realisations.section1.project-information.ordering-party.title')}
                    direction="top-left"
                >
                    {@html $_('realisations.section1.project-information.ordering-party.content')}
                </ProjectDescription>
            </div>
            <div class="content-wrap--left">
                <ProjectDescription
                    title={$_('realisations.section1.project-information.link.title')}
                    direction="top-right"
                >
                    {@html $_('realisations.section1.project-information.link.content')}
                </ProjectDescription>
            </div>
        </div>
    </Section>
    <Section
        carousel={true}
        image={$images.projects.project2.images[$images.projects.project2.images.length - 1]}
        gallery={$images.projects.project2.images}
        sectionLabel="Project section"
    >
        <div class="right">
            <h3>{$_('realisations.section2.title')}</h3>
        </div>
    </Section>
    <Section type="work" sectionLabel="About the project above">
        <div class="content-wrap--x">
            <div class="content-wrap--right">
                <ProjectDescription
                    title={$_('realisations.section2.project-information.about.title')}
                    direction="top-left"
                    multipleItems={true}
                >
                    {@html $_('realisations.section2.project-information.about.content')}
                </ProjectDescription>
            </div>
            <div class="content-wrap--left">
                <ProjectDescription
                    title={$_('realisations.section2.project-information.implementation.title')}
                    direction="top-right"
                >
                    {@html $_('realisations.section2.project-information.implementation.content')}
                </ProjectDescription>
            </div>
        </div>
        <div class="content-wrap--x">
            <div class="content-wrap--right">
                <ProjectDescription
                    title={$_('realisations.section2.project-information.ordering-party.title')}
                    direction="top-left"
                >
                    {@html $_('realisations.section2.project-information.ordering-party.content')}
                </ProjectDescription>
            </div>
            <div class="content-wrap--left">
                <ProjectDescription
                    title={$_('realisations.section2.project-information.link.title')}
                    direction="top-right"
                >
                    {@html $_('realisations.section2.project-information.link.content')}
                </ProjectDescription>
            </div>
        </div>
    </Section>
    <Section
        carousel={true}
        image={$images.projects.project3.images[$images.projects.project3.images.length - 1]}
        gallery={$images.projects.project3.images}
        sectionLabel="Project section"
    >
        <div class="right">
            <h3>{$_('realisations.section3.title')}</h3>
        </div>
    </Section>
    <Section type="work" sectionLabel="About the project above">
        <div class="content-wrap--x">
            <div class="content-wrap--right">
                <ProjectDescription
                    title={$_('realisations.section3.project-information.about.title')}
                    direction="top-left"
                    multipleItems={true}
                >
                    {@html $_('realisations.section3.project-information.about.content')}
                </ProjectDescription>
            </div>
            <div class="content-wrap--left">
                <ProjectDescription
                    title={$_('realisations.section3.project-information.implementation.title')}
                    direction="top-right"
                >
                    {@html $_('realisations.section3.project-information.implementation.content')}
                </ProjectDescription>
            </div>
        </div>
        <div class="content-wrap--x">
            <div class="content-wrap--right">
                <ProjectDescription
                    title={$_('realisations.section3.project-information.ordering-party.title')}
                    direction="top-left"
                >
                    {@html $_('realisations.section3.project-information.ordering-party.content')}
                </ProjectDescription>
            </div>
            <div class="content-wrap--left">
                <ProjectDescription
                    title={$_('realisations.section3.project-information.link.title')}
                    direction="top-right"
                >
                    {@html $_('realisations.section3.project-information.link.content')}
                </ProjectDescription>
            </div>
        </div>
    </Section>
    <Section
        carousel={true}
        image={$images.projects.project4.images[$images.projects.project4.images.length - 1]}
        gallery={$images.projects.project4.images}
        sectionLabel="Project section"
    >
        <div class="right">
            <h3>
                {$_('realisations.section4.title')}
            </h3>
        </div>
    </Section>
    <Section type="work" sectionLabel="About the project above">
        <div class="content-wrap--x">
            <div class="content-wrap--right">
                <ProjectDescription
                    title={$_('realisations.section4.project-information.about.title')}
                    direction="top-left"
                    multipleItems={true}
                >
                    {@html $_('realisations.section4.project-information.about.content')}
                </ProjectDescription>
            </div>
            <div class="content-wrap--left">
                <ProjectDescription
                    title={$_('realisations.section4.project-information.implementation.title')}
                    direction="top-right"
                >
                    {@html $_('realisations.section4.project-information.implementation.content')}
                </ProjectDescription>
            </div>
        </div>
        <div class="content-wrap--x">
            <div class="content-wrap--right">
                <ProjectDescription
                    title={$_('realisations.section4.project-information.ordering-party.title')}
                    direction="top-left"
                >
                    {@html $_('realisations.section4.project-information.ordering-party.content')}
                </ProjectDescription>
            </div>
            <div class="content-wrap--left">
                <ProjectDescription
                    title={$_('realisations.section4.project-information.link.title')}
                    direction="top-right"
                >
                    {@html $_('realisations.section4.project-information.link.content')}
                </ProjectDescription>
            </div>
        </div>
    </Section>
    <Section
        carousel={true}
        image={$images.projects.project5.images[$images.projects.project5.images.length - 1]}
        gallery={$images.projects.project5.images}
        sectionLabel="Project section"
    >
        <div class="right">
            <h3>{$_('realisations.section5.title')}</h3>
        </div>
    </Section>
    <Section type="work" sectionLabel="About the project above">
        <div class="content-wrap--x">
            <div class="content-wrap--right">
                <ProjectDescription
                    title={$_('realisations.section5.project-information.about.title')}
                    direction="top-left"
                    multipleItems={true}
                >
                    {@html $_('realisations.section5.project-information.about.content')}
                </ProjectDescription>
            </div>
            <div class="content-wrap--left">
                <ProjectDescription
                    title={$_('realisations.section5.project-information.implementation.title')}
                    direction="top-right"
                >
                    {@html $_('realisations.section5.project-information.implementation.content')}
                </ProjectDescription>
            </div>
        </div>
        <div class="content-wrap--x">
            <div class="content-wrap--right">
                <ProjectDescription
                    title={$_('realisations.section5.project-information.ordering-party.title')}
                    direction="top-left"
                >
                    {@html $_('realisations.section5.project-information.ordering-party.content')}
                </ProjectDescription>
            </div>
            <div class="content-wrap--left">
                <ProjectDescription
                    title={$_('realisations.section5.project-information.link.title')}
                    direction="top-right"
                >
                    {@html $_('realisations.section5.project-information.link.content')}
                </ProjectDescription>
            </div>
        </div>
    </Section>
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

    //SECTION WORK//
    .content-wrap--x {
        position: relative;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .content-wrap--left,
    .content-wrap--right {
        width: 40%;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    @media only screen and (max-width: 768px) {
        .content-wrap--x {
            position: relative;
            display: flex;
            width: 90%;
            flex-direction: column;
            align-items: center;
        }

        .content-wrap--left,
        .content-wrap--right {
            width: 100%;
            margin-block-end: 1rem;
        }
    }
</style>

<script>
    import Main from '../components/Main.svelte';
    import Section from '../components/Section.svelte';
    import ProjectDescription from '../components/ProjectDescription.svelte';
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
    <Section type="work">
        <div class="content-wrap--x">
            <div class="content-wrap--right">
                <ProjectDescription title="About the project:" direction="top-left">
                    <p>
                        Integrated Educational Platform, formerly: e-textbooks for general education
                        is a base of free, generally available and open educational resources for
                        developing students 'and teachers' competences in the use of communication
                        and information technologies under the government program "Digital School".
                    </p>
                    <p>
                        This platform contains materials that were created with the funds of the
                        European Union under the European Social Fund (Human Capital Operational
                        Program 2007-2013 and the Knowledge Education Development Operational
                        Program 2014-2020).
                    </p>
                </ProjectDescription>
            </div>
            <div class="content-wrap--left">
                <ProjectDescription title="About the project implementation:" direction="top-right">
                    <p>
                        The Integrated Educational Platform project is a long-term project, during
                        which we had the pleasure to cooperate with many specialists in various
                        fields of humanities and science, as well as with craftsmen representing
                        various professions in our country. While implementing the project, our team
                        visited many places all over Poland, covering a total of thousands of
                        kilometers. Our camera operators recorded the works of the Basketball
                        Player-Plecionkarz one day, and the Typhloinformatics Technique the other.
                        Another interesting task was the preparation of podcasts on news in the
                        field of genetics, or the creation of interactive games presenting chemical
                        phenomena occurring in the surrounding environment. In addition to
                        audiovisual recordings and programming, we also created graphic diagrams, 2D
                        animations and films in the 360 ° technique.
                    </p>
                </ProjectDescription>
            </div>
        </div>
        <div class="content-wrap--x">
            <div class="content-wrap--right">
                <ProjectDescription title="About the Ordering Party:" direction="top-left">
                    <p>
                        Our Team has been implementing the project since 2019, inter alia, in
                        cooperation with GroMar Sp. z o. o., Englishsquare.pl Sp. z o. o.,
                        CONTENTPLUS.PL Sp. z o. o., LPE Sp. z o. o. and Double Dare Sp. z o. o.
                        These companies are leaders on the Polish e-learning market.
                    </p>
                </ProjectDescription>
            </div>
            <div class="content-wrap--left">
                <ProjectDescription title="Link to the project:" direction="top-right">
                    <p>
                        <a
                            class="external-link"
                            href="https://zpe.gov.pl/"
                            target="_blank"
                            rel="noreferrer noopener">https://zpe.gov.pl/</a
                        >
                    </p>
                </ProjectDescription>
            </div>
        </div>
    </Section>
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

    //SECTION WORK//
    .content-wrap--x {
        position: relative;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        &:last-child {
            margin-block-end: 4rem;
        }

        p {
            max-width: 90%;
        }
    }

    .content-wrap--left,
    .content-wrap--right {
        width: 40%;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        :last-child {
            margin-block-end: 2rem;
            width: fit-content;
        }
    }

    @media only screen and (max-width: 768px) {
        .content-wrap--x {
            position: relative;
            display: flex;
            width: 90%;
            flex-direction: column;
            align-items: center;

            &:first-child {
                margin-block-end: 0;
            }
        }

        .content-wrap--left,
        .content-wrap--right {
            width: 100%;
            margin-block-end: 1rem;
        }
    }
</style>

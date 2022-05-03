<script>
    import Main from '../components/Main.svelte';
    import Section from '../components/Section.svelte';
    import ProjectDescription from '../components/ProjectDescription.svelte';
    import { images } from '../stores';
</script>

<svelte:head>
    <title>Our Work - IGS Production</title>
</svelte:head>

<Main>
    <h1 style="position: absolute; top:8rem;">What we have done</h1>
    <Section
        carousel={true}
        image={$images.projects.project1.images[$images.projects.project1.images.length - 1]}
        gallery={$images.projects.project1.images}
        sectionLabel="Project section"
    >
        <div class="right">
            <h3>ZPE - Integrated Educational Platform</h3>
        </div>
    </Section>
    <Section type="work" sectionLabel="About the project above">
        <div class="content-wrap--x">
            <div class="content-wrap--right">
                <ProjectDescription
                    title="About the project:"
                    direction="top-left"
                    multipleItems={true}
                >
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
                        <a
                            class="external-link"
                            href="https://contentplus.pl/"
                            target="_blank"
                            rel="noreferrer noopener">CONTENTPLUS.PL</a
                        > Sp. z o. o., LPE Sp. z o. o. and Double Dare Sp. z o. o. These companies are
                        leaders on the Polish e-learning market.
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
                            rel="noreferrer noopener">zpe.gov.pl</a
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
        sectionLabel="Project section"
    >
        <div class="right">
            <h3>The future through the past</h3>
        </div>
    </Section>
    <Section type="work" sectionLabel="About the project above">
        <div class="content-wrap--x">
            <div class="content-wrap--right">
                <ProjectDescription
                    title="About the project:"
                    direction="top-left"
                    multipleItems={true}
                >
                    <p>
                        Future thanks to the Past - a story about the development of medicine - a
                        project commissioned by the Medical University of Gdańsk, the famous "MUG".
                        Quoting an article about the project, posted on the MUG website - “Its aim
                        is to popularize the history of medicine, and as part of it, the Virtual
                        Museum of the Medical University of Gdańsk will be created. Thanks to this,
                        from anywhere in the world, you will be able to see selected exhibits from
                        the Museum collections, learn about their history and the role they played
                        in the development of individual fields of medicine. "
                    </p>
                    <p>
                        The project was financed by the Medical University of Gdańsk and the Social
                        Responsibility of Science program of the Minister of Education and Higher
                        Education.
                    </p>
                </ProjectDescription>
            </div>
            <div class="content-wrap--left">
                <ProjectDescription title="About the project implementation:" direction="top-right">
                    <p>
                        Our team in three production installments recorded and edited a total of 51
                        films from the series "Future through the future". We always remember three
                        trips to Gdańsk with a smile on our face, not only thanks to the
                        well-coordinated team, but also thanks to the atmosphere that always
                        prevails on our plans. In the post-production process, we realized the
                        vision of presenting museum exhibits in a fresh way, departing from the
                        worn-out templates for documentation of objects. Thanks to the game of
                        chiaroscuro and precise camera movements, we created shots full of artistry
                        and cinematic flair. In correlation with the great narrative of Dr. Marek
                        Bukowski, we managed to produce a series of short documentaries about the
                        history of the development of medicine over the years.
                    </p>
                </ProjectDescription>
            </div>
        </div>
        <div class="content-wrap--x">
            <div class="content-wrap--right">
                <ProjectDescription title="About the Ordering Party:" direction="top-left">
                    <p>
                        Medical University of Gdańsk - one of the oldest medical universities and
                        the only medical research university in Poland.
                    </p>
                </ProjectDescription>
            </div>
            <div class="content-wrap--left">
                <ProjectDescription title="Link to the project:" direction="top-right">
                    <p>
                        <a
                            class="external-link"
                            href="https://muzeum.gumed.edu.pl/61668.html"
                            target="_blank"
                            rel="noreferrer noopener">muzeum.gumed.edu.pl</a
                        >
                    </p>
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
            <h3>Karolina Stanisławczyk - Do you like me?</h3>
        </div>
    </Section>
    <Section type="work" sectionLabel="About the project above">
        <div class="content-wrap--x">
            <div class="content-wrap--right">
                <ProjectDescription title="About the project:" direction="top-left">
                    <p>
                        Karolina Stanisławczyk - a young singer, composer and songwriter from
                        Warsaw, conquers the music scene of the young generation. One of her
                        greatest musical successes is the song Cliché, which has received over 10
                        million views on YouTube. Without resting on her laurels, Karolina shows her
                        natural talent with each subsequent song. This is how we met on the set
                        during the making of the video for her next hit.
                    </p>
                </ProjectDescription>
            </div>
            <div class="content-wrap--left">
                <ProjectDescription title="About the project implementation:" direction="top-right">
                    <p>
                        The shooting took place in a professional studio, which had been previously
                        adapted by our set designers especially for the conceptual needs of the
                        client. We used a set of LED swords to illuminate the plan, and the material
                        was recorded with professional Black Magic cameras. In the pre-production
                        process, we prepared the script, choreography, costumes and planned what
                        effect we want to achieve with the final product. We comprehensively met the
                        client's expectations, delivering a professionally made, edited music video
                        with the color and nature of a fairy-tale dream from the post-production
                        department.
                    </p>
                </ProjectDescription>
            </div>
        </div>
        <div class="content-wrap--x">
            <div class="content-wrap--right">
                <ProjectDescription title="About the Ordering Party:" direction="top-left">
                    <p>
                        HYPSTERIA RECORDS® as they define themselves is more than just a label or an
                        art agency. They focus on young, not necessarily famous artists from various
                        fields of art, believing in the potential of a new wave. On their way to
                        success, they follow their own uncharted paths. They are led by artists such
                        as: Karolina Stanisławczyk, Cywil, B-ART, KOBESTONE and Pazzy.
                    </p>
                </ProjectDescription>
            </div>
            <div class="content-wrap--left">
                <ProjectDescription title="Link to the project:" direction="top-right">
                    <p>
                        <a
                            class="external-link"
                            href="https://youtu.be/xTONJTQeMTM"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            youtu.be/xTONJTQeMTM
                        </a>
                    </p>
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
                Everyday Warsaw 1915-1918. Glass negatives from the collection of TCHOREK BENTAL L
                HISTORICAL STUDY
            </h3>
        </div>
    </Section>
    <Section type="work" sectionLabel="About the project above">
        <div class="content-wrap--x">
            <div class="content-wrap--right">
                <ProjectDescription
                    title="About the project:"
                    direction="top-left"
                    multipleItems={true}
                >
                    <p>
                        The film dedicated to Pracownia Historyczna Tchorek / Bentall, founded by
                        the sculptor and collector Karol Tchorek, was made before it was handed over
                        to the city in July 2021. Today, this space can be seen as a contemporary
                        art, where three narratives converged: Karol Tchorek's collection, his son's
                        archive, art theorist , Mariusz and the vision of the artist Katy Bentall -
                        Mariusz's wife, commenting and interpreting historical space in her artistic
                        activities.
                    </p>
                    <p>
                        An important protagonist of the film are the negatives of an anonymous
                        author from the First World War, extraordinary documents of everyday life in
                        former Warsaw - its architecture and inhabitants - at one time stored in the
                        Studio.
                    </p>
                </ProjectDescription>
            </div>
            <div class="content-wrap--left">
                <ProjectDescription title="About the project implementation:" direction="top-right">
                    <p>
                        Our task was to create a film that would convey the essence of the negatives
                        of the anonymous author in a cinematic way. Today's capital city would not
                        regain its former beauty, for example: if it were not for this collection,
                        therefore our "bar" has been set high. The locations where the recordings
                        for the film took place ensured an extraordinary visual experience - the
                        Tyszkiewicz-Potocki Palace showed the beauty and class of old Polish palace
                        architecture in the era of classicism, and the Tchorek Historical Studio /
                        Bental Studio allowed us to feel what accompanied the famous Karol Tchorek
                        and his loved ones.
                    </p>
                </ProjectDescription>
            </div>
        </div>
        <div class="content-wrap--x">
            <div class="content-wrap--right">
                <ProjectDescription title="About the Ordering Party:" direction="top-left">
                    <p>
                        The Association of University Museums is an association of museum units that
                        are part of Polish universities, operating since 2012. Representatives of
                        106 units from all over Poland belong to the Association of University
                        Museums . As an association, they deal, among others, with the protection,
                        promotion and conservation of monuments in museum resources. More
                        information on the website: <a
                            class="external-link"
                            href="https://muzeauczelniane.pl/"
                            target="_blank"
                            rel="noreferrer noopener">muzeauczelniane.pl</a
                        >
                    </p>
                </ProjectDescription>
            </div>
            <div class="content-wrap--left">
                <ProjectDescription title="Link to the project:" direction="top-right">
                    <p>
                        <a
                            class="external-link"
                            href="https://youtu.be/08YpFfODo5g"
                            target="_blank"
                            rel="noreferrer noopener">youtu.be/08YpFfODo5g</a
                        >
                    </p>
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
            <h3>Yasir - Dope</h3>
        </div>
    </Section>
    <Section type="work" sectionLabel="About the project above">
        <div class="content-wrap--x">
            <div class="content-wrap--right">
                <ProjectDescription title="About the project:" direction="top-left">
                    <p>
                        This music video was one of the first projects carried out by our team
                        internationally. YASIR as a Pakistani artist, looking for a suitable film
                        crew to create a clip, came under our wing. The concept of the music video
                        was to maintain a steampunk atmosphere with contemporary club elements.
                    </p>
                </ProjectDescription>
            </div>
            <div class="content-wrap--left">
                <ProjectDescription title="About the project implementation:" direction="top-right">
                    <p>
                        This project was characterized by a short preparation time for the shooting
                        day. The pre-production period lasted 2 days, the material itself was
                        recorded during one shooting day, and it took us exactly 13 hours. As our
                        team likes to take up challenges, this project has shown that nothing is
                        impossible for us. In this material, apart from cinematic shots and
                        complicated lighting settings, we can boast that 1.5 minutes of the clip
                        consisted of only one mastershot!
                    </p>
                </ProjectDescription>
            </div>
        </div>
        <div class="content-wrap--x">
            <div class="content-wrap--right">
                <ProjectDescription title="About the Ordering Party:" direction="top-left">
                    <p>
                        Chaudhry Yasir Zaman, known as YASIR, is a rapper, writer, songwriter and
                        composer. Hindu, Urdu and Punjabi are the main languages of his work.
                    </p>
                </ProjectDescription>
            </div>
            <div class="content-wrap--left">
                <ProjectDescription title="Link to the project:" direction="top-right">
                    <p>
                        <a
                            class="external-link"
                            href="https://youtu.be/IcoOPIVRXII"
                            target="_blank"
                            rel="noreferrer noopener">youtu.be/IcoOPIVRXII</a
                        >
                    </p>
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

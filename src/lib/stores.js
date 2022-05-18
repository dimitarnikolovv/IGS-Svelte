import { readable, writable } from 'svelte/store';

export const isToggled = writable(false);
export const menuDark = writable(false);
export const darkenMenu = writable(false);
export const isInForm = writable(false);
export const contactsTransitioning = writable({
    location: 'countries',
    outroEnd: {
        countries: false,
        form: true,
    },
});
export const images = readable({
    projects: {
        project1: {
            images: [
                './images/projects/project1/image1.webp',
                './images/projects/project1/image2.webp',
                './images/projects/project1/image3.webp',
                './images/projects/project1/image4.webp',
                './images/projects/project1/image5.webp',
                './images/projects/project1/image6.webp',
                './images/projects/project1/image7.webp',
                './images/projects/project1/image8.webp',
            ],
        },
        project2: {
            images: [
                './images/projects/project2/image1.webp',
                './images/projects/project2/image2.webp',
                './images/projects/project2/image3.webp',
                './images/projects/project2/image4.webp',
                './images/projects/project2/image5.webp',
                './images/projects/project2/image6.webp',
            ],
        },
        project3: {
            images: [
                './images/projects/project3/image1.webp',
                './images/projects/project3/image2.webp',
                './images/projects/project3/image3.webp',
                './images/projects/project3/image4.webp',
                './images/projects/project3/image5.webp',
                './images/projects/project3/image6.webp',
                './images/projects/project3/image7.webp',
            ],
        },
        project4: {
            images: [
                './images/projects/project4/image1.webp',
                './images/projects/project4/image2.webp',
                './images/projects/project4/image3.webp',
                './images/projects/project4/image4.webp',
                './images/projects/project4/image5.webp',
                './images/projects/project4/image6.webp',
            ],
        },
        project5: {
            images: [
                './images/projects/project5/image1.webp',
                './images/projects/project5/image2.webp',
                './images/projects/project5/image3.webp',
                './images/projects/project5/image4.webp',
                './images/projects/project5/image5.webp',
            ],
        },
    },
    covers: {
        home: './images/covers/home_page.webp',
        contact: './images/covers/contact_us.webp',
        about: [
            './images/covers/who_we_are_1.webp',
            './images/covers/who_we_are_2.webp',
            './images/covers/who_we_are_3.webp',
        ],
    },
    people: {
        person1: './images/showcase/person1.webp',
        person2: './images/showcase/person2.webp',
        person3: './images/showcase/person3.webp',
        person4: './images/showcase/person4.webp',
        person5: './images/showcase/person5.webp',
    },
});

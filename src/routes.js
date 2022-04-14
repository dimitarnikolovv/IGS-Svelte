import Home from './routes/Home.svelte';
import About from './routes/About.svelte';
import Realisations from './routes/Realisations.svelte';
import Contact from './routes/Contact.svelte';
import NotFound from './routes/NotFound.svelte';

export default {
    '/': Home,
    '/about': About,
    '/realisations': Realisations,
    '/contact': Contact,
    '*': NotFound,
};

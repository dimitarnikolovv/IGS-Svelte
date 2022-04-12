<script>
    import Footer from './components/Footer.svelte';
    import Header from './components/Header.svelte';
    import Router from 'svelte-spa-router';
    import Home from './routes/Home.svelte';
    import Stats from './routes/Stats.svelte';
    import Contact from './routes/Contact.svelte';
    import NotFound from './routes/NotFound.svelte';

    let routes = {
        '/': Home,
        '/statistics': Stats,
        '/contact': Contact,

        '*': NotFound,
    };
</script>

<Header />

<main>
    <Router {routes} />
</main>

<Footer />

<style lang="scss">
    main {
        background-color: white;
    }
</style>

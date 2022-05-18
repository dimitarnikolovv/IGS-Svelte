<script>
    import { _ } from '../lib/i18n';

    const year = new Date().getFullYear();
</script>

<footer>
    {@html $_('contact.footer', { values: { currYear: year } })}
</footer>

<style lang="scss">
    footer {
        position: absolute;
        bottom: 0.5rem;
        width: 90vw;
        display: flex;
        justify-content: flex-end;
        gap: 2rem;

        @media only screen and (max-width: 1080px) {
            width: 100vw;
            position: relative;
            margin-block-start: 1rem;
        }
        @media only screen and (max-width: 555px) {
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 0.5rem;
        }
    }
</style>

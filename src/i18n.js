import { derived } from 'svelte/store';
import { dictionary, locale, _ } from 'svelte-i18n';

const file_url_tmp = `./langs/{locale}.json`;

async function setUpI18n({ withLocale: _locale } = { withLocale: 'en' }) {
    const file_url = file_url_tmp.replace('{locale}', _locale);
    const response = await fetch(file_url);
    const messages = await response.json();
    dictionary.set({ [_locale]: messages });
    locale.set(_locale);
}

const isLocaleLoaded = derived(locale, ($locale) => typeof $locale === 'string');

export { _, locale, setUpI18n, isLocaleLoaded };

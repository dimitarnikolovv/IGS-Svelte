<script>
    import { _, locale } from '../../lib/i18n';
    import { contactsTransitioning, isInForm } from '../../lib/stores';
    import { init, sendForm } from 'emailjs-com';
    import { fly, fade } from 'svelte/transition';
    import { onDestroy } from 'svelte';
    import Button from '../Button.svelte';

    init('qtPbhq_mzlvFACosT');

    $isInForm = true;

    onDestroy(() => {
        $isInForm = false;
    });

    let outroStarted = false;

    let email = '';
    let name = '';
    let message = '';
    let subject = '';
    let sent = false;

    function clearForm() {
        email = '';
        name = '';
        message = '';
        subject = '';
    }

    function sendMessage() {
        let btn = document.getElementById('btn-submit');
        let form = document.getElementById('contact-form');
        btn.disabled = true;
        sendForm(
            'contact_service',
            `${$locale === 'pl' ? 'contact_form_pl' : 'contact_form_en_bg'}`,
            form
        )
            .then(() => {
                sent = true;
                clearForm();
                btn.disabled = false;
                setTimeout(() => {
                    sent = false;
                }, 2000);
            })
            .catch((error) => {
                sent = false;
                console.log(error);
            });
    }
</script>

{#if $contactsTransitioning.outroEnd.countries}
    <form
        on:submit|preventDefault={sendMessage}
        method="post"
        id="contact-form"
        in:fade={{ duration: 300 }}
        out:fly={{ x: -500, duration: 300 }}
        on:outroend={() => {
            $contactsTransitioning.outroEnd.form = true;
            $contactsTransitioning.outroEnd.countries = false;
        }}
        on:outrostart={() => {
            outroStarted = true;
        }}
    >
        <h4>{$_('contact.form.title')}</h4>
        <label for="name">{$_('contact.form.name-label')}</label>
        <input
            id="name"
            type="text"
            name="user_name"
            placeholder={$_('contact.form.name')}
            required={!outroStarted}
            bind:value={name}
        />

        <label for="email">{$_('contact.form.email-label')}</label>
        <input
            id="email"
            type="email"
            name="user_email"
            placeholder={$_('contact.form.email')}
            required={!outroStarted}
            bind:value={email}
        />

        <label for="subject">{$_('contact.form.subject-label')}</label>
        <input
            id="subject"
            type="text"
            name="contact_subject"
            placeholder={$_('contact.form.subject')}
            required={!outroStarted}
            bind:value={subject}
        />

        <label for="message">{$_('contact.form.message-label')}</label>
        <textarea
            id="message"
            name="message"
            placeholder={$_('contact.form.message')}
            bind:value={message}
        />

        <div class="btns">
            <Button type="back" />
            <Button type="submit" isSent={sent} />
        </div>
    </form>
{/if}

<style lang="scss">
    form {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        width: 80%;
        height: 100%;
        padding: 5vw;

        label {
            position: absolute;
            top: 0;
            opacity: 0;
        }

        input,
        textarea {
            position: relative;
            width: 100%;
            border: none;
            font-size: 1.2rem;
            border-bottom: 1px solid rgba(255, 255, 255, 0.5);
            padding: 0;
            height: 5%;
            background: transparent;
            color: rgba(255, 255, 255, 0.8);
            transition: border 200ms ease;

            &:focus {
                border: none;
                outline: none;
                border-bottom: 1px solid rgba(255, 255, 255, 1);
            }
            &::placeholder {
                color: rgba(255, 255, 255, 0.3);
            }
        }

        input {
            height: 1.5em;
        }

        .btns {
            position: relative;
            display: flex;
            justify-content: space-between;
            gap: 1rem;

            @media only screen and (max-width: 495px) {
                flex-direction: column;
                align-items: center;
            }
        }

        textarea {
            height: 150px;
            resize: none;
        }
    }
</style>

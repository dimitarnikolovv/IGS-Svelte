<script>
    import { fly, fade } from 'svelte/transition';
    import { onMount } from 'svelte';
    import { contactsLocation } from '../../stores';
    import gsap from 'gsap';

    onMount(() => {
        const timelineBtnSendHover = gsap.timeline();

        hvr = function animateRealisationsHover() {
            timelineBtnSendHover.to('.arrow', { x: '10px', duration: 0.1 });
        };

        hvrOut = function animateRealisationsHoverOut() {
            timelineBtnSendHover.to('.arrow', { x: '0', duration: 0.1 });
        };

        const timelineBtnBackHover = gsap.timeline();

        hvrBack = function animateRealisationsHover() {
            timelineBtnBackHover.to('.arrow-back', { x: '-10px', duration: 0.1 });
        };

        hvrBackOut = function animateRealisationsHoverOut() {
            timelineBtnBackHover.to('.arrow-back', { x: '0', duration: 0.1 });
        };
    });

    let hvr;
    let hvrOut;
    let hvrBack;
    let hvrBackOut;

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

    onMount(() => {
        window.onload = function () {
            document.getElementById('contact-form').addEventListener('submit', function (event) {
                event.preventDefault();
                emailjs.sendForm('contact_service', 'contact_form', this).then(
                    function () {
                        sent = true;
                        clearForm();
                    },
                    function (error) {
                        sent = false;
                        console.log(error);
                    }
                );
            });
            window.scrollTo(0, 0);
            setTimeout(() => {
                document.querySelector('body').style.overflowY = 'visible';
            }, 4700);
        };
    });
</script>

<form method="post" id="contact-form" in:fade={{ delay: 300 }} out:fly={{ x: -500, duration: 300 }}>
    <h4>Leave us a message</h4>
    <label for="name">Enter your name</label>
    <input id="name" type="text" name="user_name" placeholder="Name" required bind:value={name} />

    <label for="email">Enter your email</label>
    <input
        id="email"
        type="email"
        name="user_email"
        placeholder="Email"
        required
        bind:value={email}
    />

    <label for="subject">Enter the subject</label>
    <input
        id="subject"
        type="text"
        name="contact_subject"
        placeholder="Subject"
        required
        bind:value={subject}
    />

    <label for="message">Enter yout message</label>
    <textarea id="message" name="message" placeholder="Write your message" bind:value={message} />

    <div class="btns">
        <div class="btn-back">
            <button
                on:click={() => {
                    $contactsLocation = 'countries';
                }}
                on:mouseenter={hvrBack}
                on:mouseleave={hvrBackOut}
            >
                Back
                <div class="arrow-back">
                    <svg xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                        <path
                            d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"
                        />
                    </svg>
                </div>
            </button>
        </div>
        <div class="btn-submit">
            <input type="submit" value="Send" on:mouseenter={hvr} on:mouseleave={hvrOut} />
            {#if sent}
                <div class="email-sent">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="48"
                        height="48"
                        viewBox="0 0 48 48"
                        style=" fill:#000000;"
                        ><path
                            fill="#c8e6c9"
                            d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"
                        /><path
                            fill="#4caf50"
                            d="M34.586,14.586l-13.57,13.586l-5.602-5.586l-2.828,2.828l8.434,8.414l16.395-16.414L34.586,14.586z"
                        /></svg
                    >
                </div>
            {/if}
            <div class="arrow">
                <svg xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                    <path
                        d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"
                    />
                </svg>
            </div>
        </div>
    </div>
</form>

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

        input,
        button {
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

            div.btn-back {
                button {
                    position: relative;
                    font-size: 1.2rem;
                    color: var(--clr-text-primery-100);
                    background-color: var(--clr-accent-600);
                    padding-block: 0.6em 1.5em;
                    padding-inline: 3em;
                    border-radius: 2em;
                    cursor: pointer;

                    .arrow-back {
                        position: absolute;
                        left: 1em;
                        top: 5%;
                        transition: transform 300ms ease;
                        svg {
                            width: 30px;
                            height: inherit;
                            transform: rotate(180deg) translateY(80%);

                            path {
                                fill: var(--clr-text-primery-100);
                            }
                        }
                    }
                }
            }

            div.btn-submit {
                position: relative;
                input[type='submit'] {
                    font-size: 1.2rem;
                    border: none;
                    color: var(--clr-text-primery-100);
                    background-color: var(--clr-accent-600);
                    padding-block: 0.6em 1.5em;
                    padding-inline: 3em;
                    border-radius: 2em;
                    cursor: pointer;
                }

                .email-sent {
                    position: absolute;
                    left: 0;
                    top: 0;
                }

                .arrow {
                    position: absolute;
                    right: 1.2em;
                    top: 22%;
                    transition: transform 300ms ease;
                    svg {
                        width: 30px;
                        height: inherit;
                        path {
                            fill: var(--clr-text-primery-100);
                        }
                    }
                }
            }
        }

        textarea {
            height: 150px;
            resize: none;
        }
    }
</style>

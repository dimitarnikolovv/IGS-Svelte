<footer>
    <div class="copyright">
        <p class="info-text">
            All rights reserved. IGS Production <span data-cr-year /> &copy;.
        </p>
    </div>
    <div class="made-by">
        <p class="info-text">
            Made with love by
            <a href="https://infrablu.xyz" class="external-link" data-no-swup target="blank"
                >InfraBlu</a
            >.
        </p>
    </div>
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

<script>
    import Section from './Section.svelte';

    export let videoUrl = { mov: '', webm: '' };
</script>

<Section type="blank">
    <div class="video-wrapper">
        <video class="loader-logo" autoplay muted playsinline preload="metadata" loop="true">
            <source src={videoUrl.mov} type="video/mp4" />
            <source src={videoUrl.webm} type="video/webm" />
            Your browser does not support the video tag.
        </video>
    </div>
</Section>

<style lang="scss">
    div.video-wrapper {
        display: flex;
        height: 100%;
        width: 100%;

        video {
            width: 100%;
        }
    }
</style>

<script>
    import { onDestroy } from 'svelte';
    import { menuLight } from '../lib/stores';
    import inView from '../lib/isInView';

    export let videoUrl = '';

    onDestroy(() => {
        $menuLight = false;
    });

    let paused = false;
    let volume = 0;
    let video;
    let color = 'white';

    function checkBackground(e) {
        const time = e.target.currentTime;

        if (time > 17.5 && time < 18.2) {
            if (color != 'black') {
                color = 'black';
                setTimeout(() => {
                    color = 'white';
                }, 800);
            }
        }

        if (time > 25 && time < 27.8) {
            if (color != 'black') {
                color = 'black';
                setTimeout(() => {
                    color = 'white';
                }, 2800);
            }
        }

        if (time > 34 && time < 34.6) {
            if (color != 'black') {
                color = 'black';
                setTimeout(() => {
                    color = 'white';
                }, 600);
            }
        }

        if (time > 40.1 && time < 40.7) {
            if (color != 'black') {
                color = 'black';
                setTimeout(() => {
                    color = 'white';
                }, 600);
            }
        }

        if (time > 44.1 && time < 44.9) {
            if (color != 'black') {
                color = 'black';
                setTimeout(() => {
                    color = 'white';
                }, 800);
            }
        }

        if (time > 49.1 && time < 51) {
            if (color != 'black') {
                color = 'black';
                setTimeout(() => {
                    color = 'white';
                }, 1900);
            }
        }
    }

    function playPauseVideo() {
        if (paused) {
            video.play();
            paused = !paused;
        } else {
            video.pause();
            paused = !paused;
        }
    }

    function muteUnmuteVideo() {
        if (volume > 0) {
            video.muted = true;
            volume = 0;
        } else {
            video.muted = false;
            volume = 1;
        }
    }
</script>

<div class="video-wrapper">
    <video
        class="showreel-video"
        autoplay
        muted
        playsinline
        preload="metadata"
        loop="true"
        bind:this={video}
        bind:volume
        on:timeupdate={checkBackground}
        on:click={playPauseVideo}
        use:inView={{ bottom: 0 }}
        on:enter={() => {
            $menuLight = true;
        }}
        on:exit={() => {
            $menuLight = false;
        }}
    >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
    </video>

    <div class="video-controls" style="--svg-fill: {color}">
        <ul>
            <li
                style="display: {paused ? 'none' : 'block'}"
                data-control-pause
                on:click={playPauseVideo}
            >
                <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 47.607 47.607"
                    style="enable-background:new 0 0 47.607 47.607;"
                    xml:space="preserve"
                >
                    <g>
                        <path
                            d="M17.991,40.976c0,3.662-2.969,6.631-6.631,6.631l0,0c-3.662,0-6.631-2.969-6.631-6.631V6.631C4.729,2.969,7.698,0,11.36,0
		l0,0c3.662,0,6.631,2.969,6.631,6.631V40.976z"
                        />
                        <path
                            d="M42.877,40.976c0,3.662-2.969,6.631-6.631,6.631l0,0c-3.662,0-6.631-2.969-6.631-6.631V6.631
		C29.616,2.969,32.585,0,36.246,0l0,0c3.662,0,6.631,2.969,6.631,6.631V40.976z"
                        />
                    </g>
                </svg>
            </li>
            <li
                style="display: {paused ? 'block' : 'none'}"
                data-control-play
                on:click={playPauseVideo}
            >
                <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 494.148 494.148"
                    style="enable-background:new 0 0 494.148 494.148;"
                    xml:space="preserve"
                >
                    <g>
                        <path
                            d="M405.284,201.188L130.804,13.28C118.128,4.596,105.356,0,94.74,0C74.216,0,61.52,16.472,61.52,44.044v406.124
			c0,27.54,12.68,43.98,33.156,43.98c10.632,0,23.2-4.6,35.904-13.308l274.608-187.904c17.66-12.104,27.44-28.392,27.44-45.884
			C432.632,229.572,422.964,213.288,405.284,201.188z"
                        />
                    </g>
                </svg>
            </li>
        </ul>
        <ul>
            <li
                style="display: {volume === 0 ? 'block' : 'none'}"
                data-control-unmute
                on:click={muteUnmuteVideo}
            >
                <svg
                    height="50px"
                    version="1.1"
                    viewBox="0 0 50 50"
                    width="50px"
                    xml:space="preserve"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    ><line
                        stroke={color}
                        stroke-linecap="round"
                        stroke-miterlimit="10"
                        stroke-width="2"
                        x1="32"
                        x2="42"
                        y1="20"
                        y2="30"
                    /><line
                        stroke={color}
                        stroke-linecap="round"
                        stroke-miterlimit="10"
                        stroke-width="2"
                        x1="42"
                        x2="32"
                        y1="20"
                        y2="30"
                    /><rect fill="none" height="50" width="50" /><rect
                        fill="none"
                        height="50"
                        width="50"
                    /><path
                        d="M10,33H3  c-1.103,0-2-0.898-2-2V19c0-1.102,0.897-2,2-2h7"
                        fill={color}
                        stroke={color}
                        stroke-linejoin="round"
                        stroke-miterlimit="10"
                        stroke-width="2.08"
                    /><path
                        d="M9.604,32.43  C9.256,32.129,9,31.391,9,30.754V19.247c0-0.637,0.256-1.388,0.604-1.689L22.274,4.926C23.905,3.27,26,3.898,26,6.327v36.988  c0,2.614-1.896,3.604-3.785,1.686L9.604,32.43z"
                        fill="#none"
                        stroke={color}
                        stroke-linejoin="round"
                        stroke-miterlimit="10"
                        stroke-width="1.9797"
                    /></svg
                >
            </li>
            <li
                style="display: {volume === 0 ? 'none' : 'block'}"
                data-control-mute
                on:click={muteUnmuteVideo}
            >
                <svg
                    height="50px"
                    version="1.1"
                    viewBox="0 0 50 50"
                    width="50px"
                    xml:space="preserve"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    ><rect fill="none" height="50" width="50" /><path
                        d="M10,33H3  c-1.103,0-2-0.898-2-2V19c0-1.102,0.897-2,2-2h7"
                        fill={color}
                        stroke={color}
                        stroke-linejoin="round"
                        stroke-miterlimit="10"
                        stroke-width="2.08"
                    /><path
                        d="M9.604,32.43  C9.256,32.129,9,31.391,9,30.754V19.247c0-0.637,0.256-1.388,0.604-1.689L22.274,4.926C23.905,3.27,26,3.898,26,6.327v36.988  c0,2.614-1.896,3.604-3.785,1.686L9.604,32.43z"
                        fill={color}
                        stroke={color}
                        stroke-linejoin="round"
                        stroke-miterlimit="10"
                        stroke-width="1.9797"
                    /><path
                        d="  M30.688,19.417C33.167,20.064,35,22.32,35,25s-1.833,4.936-4.312,5.584"
                        fill={color}
                        stroke={color}
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-miterlimit="10"
                        stroke-width="2"
                    /><path
                        d="  M34.92,13.142C39.136,15.417,42,19.873,42,25c0,5.111-2.85,9.557-7.045,11.835"
                        fill={color}
                        stroke={color}
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-miterlimit="10"
                        stroke-width="2"
                    /></svg
                >
            </li>
        </ul>
    </div>
</div>

<style lang="scss">
    div.video-wrapper {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        max-height: 100vh;
        width: 100vw;

        margin-block-start: -2.5rem;

        @media only screen and (max-width: 1080px) {
            margin-block-start: 0;
        }

        video {
            width: 100%;
        }
    }

    div.video-controls {
        position: absolute;
        display: flex;
        align-items: center;
        gap: 1em;
        height: 60px;
        bottom: 0;
        left: 2rem;

        @media only screen and (max-width: 768px) {
            left: 1rem;
        }

        ul {
            svg {
                width: 24px;
                fill: var(--svg-fill);
                transition: 80ms ease;
                cursor: pointer;
            }
        }
    }
</style>

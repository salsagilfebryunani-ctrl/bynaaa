/* =========================================
   FLOWER CONFIG
========================================= */

const FLOWERS = [

    "assets/flowers/flowers1.png",
    "assets/flowers/flowers2.png",
    "assets/flowers/flowers3.png"

];


const container =
    document.getElementById(
        "flower-container"
    );


const startScreen =
    document.getElementById(
        "start-screen"
    );


const startButton =
    document.getElementById(
        "start-button"
    );


const flowerLoader =
    document.getElementById(
        "flower-loader"
    );


const flowerMessage =
    document.getElementById(
        "flower-message"
    );


const isMobile =
    window.innerWidth <= 600;


/* =========================================
   TRANSITION TIMING
========================================= */

/*
   Flower animation:
   max duration = 7s
   max delay    = 1s
   total        = 8s

   Text muncul ketika bunga sudah
   hampir memenuhi layar, sebelum
   fase terbang dimulai.
*/

const FLOWER_TEXT_TIME = 5000;

const MUSIC_SCREEN_TIME = 8200;


/* =========================================
   RANDOM
========================================= */

function random(min, max) {

    return Math.random() *
        (max - min) +
        min;

}


/* =========================================
   FLOWER IMAGE
========================================= */

function getFlowerImage() {

    const chance =
        Math.random();


    if (chance < 0.40) {

        return FLOWERS[0];

    }


    if (chance < 0.80) {

        return FLOWERS[1];

    }


    return FLOWERS[2];

}


/* =========================================
   CREATE FLOWER
========================================= */

function createFlower(
    x,
    y,
    size
) {

    const flower =
        document.createElement("img");


    flower.className =
        "flower";


    flower.src =
        getFlowerImage();


    flower.alt = "";


    flower.style.setProperty(
        "--size",
        `${size}px`
    );


    flower.style.setProperty(
        "--target-x",
        `${x}%`
    );


    flower.style.setProperty(
        "--target-y",
        `${y}%`
    );


    /* START */

    flower.style.setProperty(
        "--start-x",
        `${random(-15, 10)}vw`
    );


    flower.style.setProperty(
        "--start-y",
        `${random(100, 125)}vh`
    );


    /* APPEAR */

    flower.style.setProperty(
        "--appear-x",
        `${random(-40, 40)}px`
    );


    flower.style.setProperty(
        "--appear-y",
        `${random(-40, 40)}px`
    );


    /* SWAY */

    flower.style.setProperty(
        "--sway-x-1",
        `${random(-20, 20)}px`
    );


    flower.style.setProperty(
        "--sway-y-1",
        `${random(-20, 20)}px`
    );


    flower.style.setProperty(
        "--sway-x-2",
        `${random(-30, 30)}px`
    );


    flower.style.setProperty(
        "--sway-y-2",
        `${random(-25, 25)}px`
    );


    flower.style.setProperty(
        "--sway-x-3",
        `${random(-18, 18)}px`
    );


    flower.style.setProperty(
        "--sway-y-3",
        `${random(-18, 18)}px`
    );


    /* ROTATION */

    flower.style.setProperty(
        "--rotation-start",
        `${random(-120, 120)}deg`
    );


    flower.style.setProperty(
        "--rotation-middle",
        `${random(-40, 40)}deg`
    );


    flower.style.setProperty(
        "--sway-rotation-1",
        `${random(-6, 6)}deg`
    );


    flower.style.setProperty(
        "--sway-rotation-2",
        `${random(-9, 9)}deg`
    );


    flower.style.setProperty(
        "--sway-rotation-3",
        `${random(-5, 5)}deg`
    );


    flower.style.setProperty(
        "--rotation-end",
        `${random(-10, 10)}deg`
    );


    /* DEPTH */

    flower.style.setProperty(
        "--z",
        Math.floor(
            random(1, 150)
        )
    );


    /* TIMING */

    flower.style.setProperty(
        "--duration",
        `${random(5.8, 7)}s`
    );


    flower.style.setProperty(
        "--delay",
        `${random(0, 1)}s`
    );


    /* FLY AWAY */

    flower.style.setProperty(
        "--fly-x",
        `${random(85, 120)}vw`
    );


    flower.style.setProperty(
        "--fly-y",
        `${random(-130, -90)}vh`
    );


    flower.style.setProperty(
        "--fly-rotation",
        `${random(-500, 500)}deg`
    );


    flower.style.setProperty(
        "--fly-scale",
        random(.55, .8)
    );


    container.appendChild(
        flower
    );

}


/* =========================================
   CREATE ALL FLOWERS
========================================= */

function createFlowers() {


    /* =====================================
       DESKTOP
    ===================================== */

    if (!isMobile) {

        const xPositions = [
            -14,
            3,
            20,
            37,
            54,
            71,
            88,
            105
        ];


        const yPositions = [
            -17,
            7,
            31,
            55,
            79,
            103
        ];


        for (
            let row = 0;
            row < yPositions.length;
            row++
        ) {

            for (
                let col = 0;
                col < xPositions.length;
                col++
            ) {

                createFlower(

                    xPositions[col],

                    yPositions[row],

                    random(390, 480)

                );

            }

        }


        const extraPositions = [

            [11, -5],
            [45, -7],
            [78, -5],

            [11, 19],
            [45, 18],
            [78, 19],

            [11, 43],
            [45, 42],
            [78, 43],

            [11, 67],
            [45, 66],
            [78, 67],

            [11, 91],
            [45, 90],
            [78, 91]

        ];


        extraPositions.forEach(
            ([x, y]) => {

                createFlower(
                    x,
                    y,
                    random(350, 440)
                );

            }
        );


        const leftPositions = [

            [-22, 0],
            [-20, 24],
            [-23, 48],
            [-20, 72],
            [-22, 96]

        ];


        leftPositions.forEach(
            ([x, y]) => {

                createFlower(
                    x,
                    y,
                    random(420, 500)
                );

            }
        );


        const rightPositions = [

            [108, 0],
            [106, 24],
            [109, 48],
            [106, 72],
            [108, 96]

        ];


        rightPositions.forEach(
            ([x, y]) => {

                createFlower(
                    x,
                    y,
                    random(420, 500)
                );

            }
        );


        createFlower(-23, -22, 460);
        createFlower(108, -22, 460);
        createFlower(-23, 108, 460);
        createFlower(108, 108, 460);

    }


    /* =====================================
       MOBILE
    ===================================== */

    else {

        const xPositions = [

            -16,
            9,
            34,
            59,
            84,
            109

        ];


        const yPositions = [

            -18,
            7,
            32,
            57,
            82,
            107

        ];


        for (
            let row = 0;
            row < yPositions.length;
            row++
        ) {

            for (
                let col = 0;
                col < xPositions.length;
                col++
            ) {

                createFlower(

                    xPositions[col],

                    yPositions[row],

                    random(260, 330)

                );

            }

        }


        const extraPositions = [

            [21, -5],
            [46, -6],
            [71, -5],

            [21, 19],
            [46, 18],
            [71, 19],

            [21, 44],
            [46, 43],
            [71, 44],

            [21, 69],
            [46, 68],
            [71, 69],

            [21, 94],
            [46, 93],
            [71, 94]

        ];


        extraPositions.forEach(
            ([x, y]) => {

                createFlower(
                    x,
                    y,
                    random(240, 310)
                );

            }
        );


        const leftPositions = [

            [-25, 0],
            [-23, 25],
            [-25, 50],
            [-23, 75],
            [-25, 100]

        ];


        leftPositions.forEach(
            ([x, y]) => {

                createFlower(
                    x,
                    y,
                    random(280, 350)
                );

            }
        );


        const rightPositions = [

            [109, 0],
            [107, 25],
            [109, 50],
            [107, 75],
            [109, 100]

        ];


        rightPositions.forEach(
            ([x, y]) => {

                createFlower(
                    x,
                    y,
                    random(280, 350)
                );

            }
        );


        createFlower(-25, -22, 320);
        createFlower(110, -22, 320);
        createFlower(-25, 110, 320);
        createFlower(110, 110, 320);

    }

}


/* =========================================
   START FLOWER TRANSITION
========================================= */

function startFlowerTransition() {

    startButton.disabled = true;


    flowerLoader.classList.remove(
        "flower-loader-hidden"
    );


    flowerMessage.classList.remove(
        "show"
    );


    /*
       Buat bunga terlebih dahulu.
    */

    requestAnimationFrame(() => {

        createFlowers();

    });


    /*
       Start screen hilang.
    */

    startScreen.classList.add(
        "hide"
    );


    /*
       Setelah bunga hampir memenuhi layar,
       munculkan pesan.

       Bunga BELUM terbang sepenuhnya.
    */

    setTimeout(() => {

        flowerMessage.classList.add(
            "show"
        );

    }, FLOWER_TEXT_TIME);


    /*
       Setelah seluruh flower animation
       selesai, baru pindah ke music screen.
    */

    setTimeout(() => {

        showMusicScreen();

    }, MUSIC_SCREEN_TIME);

}


/* =========================================
   MUSIC ELEMENTS
========================================= */

const music =
    document.getElementById(
        "bg-music"
    );


const musicSection =
    document.getElementById(
        "music-note-section"
    );


const musicTransitionButton =
    document.getElementById(
        "music-transition-button"
    );


const musicPlay =
    document.getElementById(
        "music-play"
    );


const miniPlay =
    document.getElementById(
        "mini-play"
    );


const backwardButton =
    document.getElementById(
        "backward-button"
    );


const forwardButton =
    document.getElementById(
        "forward-button"
    );


const musicProgress =
    document.getElementById(
        "music-progress"
    );


const musicProgressBar =
    document.getElementById(
        "music-progress-bar"
    );


const currentTimeElement =
    document.getElementById(
        "current-time"
    );


const durationElement =
    document.getElementById(
        "duration"
    );


const openMessage =
    document.getElementById(
        "open-message"
    );


const notePages =
    document.querySelectorAll(
        ".note-page"
    );


const nextNote =
    document.getElementById(
        "next-note"
    );


const prevNote =
    document.getElementById(
        "prev-note"
    );


const noteIndicator =
    document.getElementById(
        "note-page-indicator"
    );


let currentNote = 0;

let musicPlaying = false;

let continueTimer = null;

let continueReady = false;


/* =========================================
   FORMAT TIME
========================================= */

function formatTime(seconds) {

    if (
        !Number.isFinite(seconds)
    ) {

        return "0:00";

    }


    const minutes =
        Math.floor(
            seconds / 60
        );


    const remainingSeconds =
        Math.floor(
            seconds % 60
        );


    return `${minutes}:${String(
        remainingSeconds
    ).padStart(2, "0")}`;

}


/* =========================================
   UPDATE PLAY BUTTONS
========================================= */

function updatePlayButtons() {

    const icon =
        musicPlaying
            ? "❚❚"
            : "▶";


    musicPlay.textContent =
        icon;


    miniPlay.textContent =
        icon;

}


/* =========================================
   PLAY
========================================= */

async function playMusic() {

    try {

        await music.play();

    } catch (error) {

        console.warn(
            "Audio tidak dapat dimainkan:",
            error
        );

        musicPlaying = false;

        updatePlayButtons();

    }

}


/* =========================================
   PAUSE
========================================= */

function pauseMusic() {

    music.pause();

    musicPlaying = false;

    updatePlayButtons();

}


/* =========================================
   TOGGLE
========================================= */

function toggleMusic() {

    if (music.paused) {

        playMusic();

    } else {

        pauseMusic();

    }

}


/* =========================================
   SHOW MUSIC SCREEN
========================================= */

function showMusicScreen() {

    /*
       Pastikan bunga benar-benar hilang
       sebelum music screen tampil.
    */

    flowerMessage.classList.remove(
        "show"
    );


    flowerLoader.classList.add(
        "flower-loader-hidden"
    );


    musicSection.classList.add(
        "active"
    );


    musicSection.classList.remove(
        "playing"
    );


    musicSection.classList.remove(
        "music-transitioned"
    );


    musicTransitionButton.classList.remove(
        "ready"
    );


    continueReady = false;


    if (continueTimer) {

        clearTimeout(
            continueTimer
        );

        continueTimer = null;

    }


    updatePlayButtons();

    updateProgress();

}


/* =========================================
   MUSIC TRANSITION
========================================= */

function startMusicScreen() {

    if (!continueReady) {
        return;
    }


    if (
        musicSection.classList.contains(
            "music-transitioned"
        )
    ) {

        return;

    }


    musicSection.classList.add(
        "music-transitioned"
    );

}


/* =========================================
   UPDATE PROGRESS
========================================= */

function updateProgress() {

    const current =
        music.currentTime || 0;


    const duration =
        music.duration || 0;


    currentTimeElement.textContent =
        formatTime(current);


    durationElement.textContent =
        formatTime(duration);


    if (duration > 0) {

        const percentage =
            (
                current /
                duration
            ) * 100;


        musicProgressBar.style.width =
            `${percentage}%`;

    } else {

        musicProgressBar.style.width =
            "0%";

    }

}


/* =========================================
   SEEK
========================================= */

function seekMusic(event) {

    if (
        !Number.isFinite(
            music.duration
        ) ||
        music.duration <= 0
    ) {

        return;

    }


    const rect =
        musicProgress.getBoundingClientRect();


    const clickPosition =
        event.clientX -
        rect.left;


    const percentage =
        Math.max(
            0,
            Math.min(
                1,
                clickPosition /
                rect.width
            )
        );


    music.currentTime =
        percentage *
        music.duration;

}


/* =========================================
   SKIP
========================================= */

function skipMusic(seconds) {

    if (
        !Number.isFinite(
            music.duration
        )
    ) {

        return;

    }


    music.currentTime =
        Math.max(
            0,
            Math.min(
                music.duration,
                music.currentTime + seconds
            )
        );

}


/* =========================================
   AUDIO EVENTS
========================================= */

music.addEventListener(
    "loadedmetadata",
    updateProgress
);


music.addEventListener(
    "timeupdate",
    updateProgress
);


/* =========================================
   MUSIC STARTED
========================================= */

music.addEventListener(
    "play",
    () => {

        musicPlaying = true;


        /*
           Dynamic color shift.
        */

        musicSection.classList.add(
            "playing"
        );


        updatePlayButtons();


        /*
           Tombol lanjut muncul
           setelah 3 detik lagu dimainkan.
        */

        if (
            !continueReady &&
            !continueTimer
        ) {

            continueTimer = setTimeout(
                () => {

                    continueReady = true;


                    musicTransitionButton.classList.add(
                        "ready"
                    );


                    continueTimer = null;

                },
                3000
            );

        }

    }
);


/* =========================================
   PAUSE
========================================= */

music.addEventListener(
    "pause",
    () => {

        musicPlaying = false;

        updatePlayButtons();

    }
);


/* =========================================
   ENDED
========================================= */

music.addEventListener(
    "ended",
    () => {

        musicPlaying = false;

        music.currentTime = 0;

        updatePlayButtons();

        updateProgress();

    }
);


/* =========================================
   BUTTON EVENTS
========================================= */

startButton.addEventListener(
    "click",
    startFlowerTransition
);


musicPlay.addEventListener(
    "click",
    toggleMusic
);


miniPlay.addEventListener(
    "click",
    toggleMusic
);


backwardButton.addEventListener(
    "click",
    () => {
        skipMusic(-10);
    }
);


forwardButton.addEventListener(
    "click",
    () => {
        skipMusic(10);
    }
);


musicProgress.addEventListener(
    "click",
    seekMusic
);


/* =========================================
   CONTINUE
========================================= */

musicTransitionButton.addEventListener(
    "click",
    () => {

        if (!continueReady) {
            return;
        }


        startMusicScreen();

    }
);


/* =========================================
   OPEN MESSAGE
========================================= */

openMessage.addEventListener(
    "click",
    openNotes
);


/* =========================================
   OPEN NOTES
========================================= */

function openNotes() {

    musicSection.classList.add(
        "notes-open"
    );


    currentNote = 0;


    updateNote();

}


/* =========================================
   UPDATE NOTE
========================================= */

function updateNote() {

    notePages.forEach(
        (page, index) => {

            page.classList.toggle(
                "active",
                index === currentNote
            );

        }
    );


    noteIndicator.textContent =
        `${currentNote + 1} / ${notePages.length}`;


    if (currentNote === 0) {

        prevNote.style.opacity =
            ".35";

    } else {

        prevNote.style.opacity =
            "1";

    }


    if (
        currentNote ===
        notePages.length - 1
    ) {

        nextNote.textContent =
            "Lanjut ke halaman selanjutnya  →";

    } else {

        nextNote.textContent =
            "Selanjutnya →";

    }

}


/* =========================================
   NEXT NOTE
========================================= */

nextNote.addEventListener(
    "click",
    () => {

        if (
            currentNote <
            notePages.length - 1
        ) {

            currentNote++;

            updateNote();

            return;

        }


        console.log(
            "Lanjut ke Date Planner"
        );

    }
);


/* =========================================
   PREVIOUS NOTE
========================================= */

prevNote.addEventListener(
    "click",
    () => {

        if (currentNote > 0) {

            currentNote--;

            updateNote();

        }

    }
);


/* =========================================
   INITIAL
========================================= */

updatePlayButtons();

updateProgress();
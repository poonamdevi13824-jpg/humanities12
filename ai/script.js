/* =========================================
   GET HTML ELEMENTS
========================================= */

const promptInput =
    document.getElementById("prompt");

const durationInput =
    document.getElementById("duration");

const styleInput =
    document.getElementById("style");

const ratioInput =
    document.getElementById("ratio");

const generateBtn =
    document.getElementById("generateBtn");

const exampleBtn =
    document.getElementById("exampleBtn");

const clearBtn =
    document.getElementById("clearBtn");

const newVideoBtn =
    document.getElementById("newVideoBtn");

const downloadBtn =
    document.getElementById("downloadBtn");

const characterCount =
    document.getElementById("characterCount");


const emptyState =
    document.getElementById("emptyState");

const loadingState =
    document.getElementById("loadingState");

const videoResult =
    document.getElementById("videoResult");

const videoDetails =
    document.getElementById("videoDetails");


const loadingText =
    document.getElementById("loadingText");

const progressBar =
    document.getElementById("progressBar");

const progressNumber =
    document.getElementById("progressNumber");


const detailDuration =
    document.getElementById("detailDuration");

const detailStyle =
    document.getElementById("detailStyle");

const detailRatio =
    document.getElementById("detailRatio");


/* =========================================
   CHARACTER COUNTER
========================================= */

promptInput.addEventListener("input", function () {

    const length =
        promptInput.value.length;

    characterCount.innerText =
        `${length} / 1000`;

});


/* =========================================
   EXAMPLE PROMPT
========================================= */

exampleBtn.addEventListener("click", function () {

    const example =

        "Create a cinematic video showing a futuristic Delhi in 2050. Show flying cars moving between huge skyscrapers, busy streets, glowing advertisements and people walking through a modern city. Use dramatic camera movements and realistic lighting.";

    promptInput.value = example;

    characterCount.innerText =
        `${example.length} / 1000`;

    promptInput.focus();

});


/* =========================================
   GENERATE VIDEO
========================================= */

generateBtn.addEventListener("click", function () {

    const prompt =
        promptInput.value.trim();

    const duration =
        durationInput.value;

    const style =
        styleInput.value;

    const ratio =
        ratioInput.value;


    /* Check prompt */

    if (prompt === "") {

        alert(
            "Please describe the video you want to create."
        );

        promptInput.focus();

        return;

    }


    /* Disable button */

    generateBtn.disabled = true;

    generateBtn.innerHTML =
        "⏳ Creating video...";


    /* Hide previous result */

    emptyState.classList.add("hidden");

    videoResult.classList.add("hidden");

    videoDetails.classList.add("hidden");


    /* Show loading */

    loadingState.classList.remove("hidden");


    /* Reset progress */

    progressBar.style.width = "0%";

    progressNumber.innerText = "0%";


    /* Loading messages */

    const messages = [

        "Understanding your idea...",

        "Creating the scene...",

        "Generating visuals...",

        "Adding camera movement...",

        "Rendering your video...",

        "Almost finished..."

    ];


    let progress = 0;

    let messageIndex = 0;


    /* Simulated AI generation */

    const interval = setInterval(function () {

        progress += Math.floor(
            Math.random() * 8
        ) + 4;


        if (progress > 100) {

            progress = 100;

        }


        progressBar.style.width =
            progress + "%";

        progressNumber.innerText =
            progress + "%";


        /* Change message */

        if (
            progress > 15 &&
            messageIndex === 0
        ) {

            messageIndex = 1;

        }

        if (
            progress > 35 &&
            messageIndex === 1
        ) {

            messageIndex = 2;

        }

        if (
            progress > 50 &&
            messageIndex === 2
        ) {

            messageIndex = 3;

        }

        if (
            progress > 70 &&
            messageIndex === 3
        ) {

            messageIndex = 4;

        }

        if (
            progress > 90 &&
            messageIndex === 4
        ) {

            messageIndex = 5;

        }


        loadingText.innerText =
            messages[messageIndex];


        /* Finished */

        if (progress >= 100) {

            clearInterval(interval);

            finishGeneration(
                duration,
                style,
                ratio
            );

        }

    }, 500);

});


/* =========================================
   FINISH GENERATION
========================================= */

function finishGeneration(
    duration,
    style,
    ratio
) {

    setTimeout(function () {

        /* Hide loading */

        loadingState.classList.add(
            "hidden"
        );


        /* Show video */

        videoResult.classList.remove(
            "hidden"
        );


        /* Show details */

        videoDetails.classList.remove(
            "hidden"
        );


        /* Update details */

        detailDuration.innerText =
            duration + " seconds";

        detailStyle.innerText =
            style;

        detailRatio.innerText =
            ratio;


        /* Reset button */

        generateBtn.disabled = false;

        generateBtn.innerHTML =
            '<span class="generate-icon">✦</span> Generate Video <span class="credit-cost">1 credit</span>';


        /* Scroll to result */

        document.querySelector(
            ".result-section"
        ).scrollIntoView({

            behavior: "smooth",

            block: "start"

        });


    }, 700);

}


/* =========================================
   CLEAR RESULT
========================================= */

clearBtn.addEventListener(
    "click",
    function () {

        emptyState.classList.remove(
            "hidden"
        );

        loadingState.classList.add(
            "hidden"
        );

        videoResult.classList.add(
            "hidden"
        );

        videoDetails.classList.add(
            "hidden"
        );

        progressBar.style.width =
            "0%";

        progressNumber.innerText =
            "0%";

    }
);


/* =========================================
   CREATE ANOTHER VIDEO
========================================= */

newVideoBtn.addEventListener(
    "click",
    function () {

        videoResult.classList.add(
            "hidden"
        );

        videoDetails.classList.add(
            "hidden"
        );

        emptyState.classList.remove(
            "hidden"
        );

        promptInput.value = "";

        characterCount.innerText =
            "0 / 1000";

        promptInput.focus();

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }
);


/* =========================================
   DOWNLOAD BUTTON
========================================= */

downloadBtn.addEventListener(
    "click",
    function () {

        /*
            This is only a frontend demo.

            Later, when we connect the real AI
            video API, this button will download
            the actual generated MP4 file.
        */

        alert(
            "The real video download will work after we connect the AI video API."
        );

    }
);
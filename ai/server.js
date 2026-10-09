fetch("http://localhost:3000/")
    .then(response => response.json())
    .then(data => {

        console.log("SERVER CONNECTED:");
        console.log(data);

    })
    .catch(error => {

        console.error("SERVER NOT CONNECTED:");
        console.error(error);

    });
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const Replicate = require("replicate");

const app = express();

const PORT = 3000;


/* =========================
   MIDDLEWARE
========================= */

app.use(cors());

app.use(express.json());


/* =========================
   REPLICATE
========================= */

const replicate = new Replicate({
    auth: process.env.REPLICATE_API_TOKEN
});


/* =========================
   TEST ROUTE
========================= */

app.get("/", (req, res) => {

    res.json({
        message: "AI Video Maker backend is running!"
    });

});


/* =========================
   VIDEO GENERATION
========================= */

app.post("/generate-video", async (req, res) => {

    try {

        const {
            prompt,
            duration,
            style
        } = req.body;


        /* Check prompt */

        if (!prompt) {

            return res.status(400).json({
                error: "Prompt is required."
            });

        }


        /* Create better AI prompt */

        const finalPrompt = `
Create a high-quality AI video.

Style:
${style || "Cinematic"}

Duration:
${duration || "15"} seconds

User's idea:
${prompt}

Make the video visually detailed,
smooth and coherent.
`;


        console.log("Generating video...");

        console.log(finalPrompt);


        /*
          IMPORTANT:

          This model is just our first backend test.
          The exact model/input can be changed later
          after we decide which video model you want.
        */

        const output = await replicate.run(
            "minimax/video-01",
            {
                input: {
                    prompt: finalPrompt
                }
            }
        );


        console.log("Video generated!");

        console.log(output);


        /*
          Return the generated video URL
          to the website.
        */

        const videoUrl =
            typeof output.url === "function"
                ? output.url()
                : output;


        res.json({

            success: true,

            videoUrl: videoUrl

        });


    } catch (error) {

        console.error(error);

        res.status(500).json({

            success: false,

            error:
                error.message ||
                "Video generation failed."

        });

    }

});


/* =========================
   START SERVER
========================= */

app.listen(PORT, () => {

    console.log(
        `Server running at http://localhost:${PORT}`
    );

});
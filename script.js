// ============================
// Rain Engine
// ============================

const rain = document.getElementById("rain");

for (let i = 0; i < 180; i++) {

    const drop = document.createElement("div");

    drop.className = "drop";

    drop.style.left = Math.random() * 100 + "vw";

    drop.style.animationDuration =
        (0.5 + Math.random() * 0.8) + "s";

    drop.style.animationDelay =
        Math.random() * 2 + "s";

    drop.style.opacity =
        0.2 + Math.random() * 0.6;

    rain.appendChild(drop);

}

// ============================
// Intro Story
// ============================

const intro = document.getElementById("intro");
const introText = document.getElementById("introText");
const hero = document.getElementById("hero");

hero.style.display = "none";

const scenes = [

    "2018",

    "The Year<br>Everything Changed...",

    "Do You Remember<br>Your First Drop?"

];

let currentScene = 0;

function playScene() {

    introText.innerHTML = scenes[currentScene];

    introText.classList.remove("hide");

    introText.classList.add("show");

    setTimeout(() => {

        introText.classList.remove("show");

        introText.classList.add("hide");

        setTimeout(() => {

            currentScene++;

            if (currentScene < scenes.length) {

                playScene();

            } else {

                intro.style.opacity = "0";

                setTimeout(() => {

                    intro.style.display = "none";

                    hero.style.display = "flex";

                    hero.animate(

                        [

                            {
                                opacity:0,
                                transform:"translateY(60px)"
                            },

                            {
                                opacity:1,
                                transform:"translateY(0px)"
                            }

                        ],

                        {

                            duration:1800,

                            easing:"ease-out",

                            fill:"forwards"

                        }

                    );

                },1500);

            }

        },1000);

    },2000);

}

playScene();

// ============================
// Button
// ============================

const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("mouseenter", () => {

    startBtn.style.transform = "scale(1.05)";

});

startBtn.addEventListener("mouseleave", () => {

    startBtn.style.transform = "scale(1)";

});

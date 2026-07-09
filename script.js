const intro = document.getElementById("intro");
const introText = document.getElementById("introText");
const hero = document.getElementById("hero");

hero.style.display = "none";

const scenes = [
    "2018",
    "The Year<br>Everything Changed...",
    "Do You Remember<br>Your First Drop?"
];

let index = 0;

// ==========================
// Rain Engine
// ==========================

const rain = document.getElementById("rain");

for (let i = 0; i < 180; i++) {

    const drop = document.createElement("div");

    drop.classList.add("drop");

    drop.style.left = Math.random() * 100 + "vw";

    drop.style.animationDuration =
        (0.5 + Math.random() * 0.8) + "s";

    drop.style.animationDelay =
        Math.random() * 2 + "s";

    drop.style.opacity =
        0.2 + Math.random() * 0.6;

    rain.appendChild(drop);

}

function showScene() {

    introText.innerHTML = scenes[index];

    introText.classList.remove("hide");
    introText.classList.add("show");

    setTimeout(() => {

        introText.classList.remove("show");
        introText.classList.add("hide");

        setTimeout(() => {

            index++;

            if(index < scenes.length){

                showScene();

            }else{

                intro.style.opacity = "0";

                setTimeout(() => {

                    intro.style.display = "none";

                    hero.style.display = "flex";

                    hero.animate(
                        [
                            {
                                opacity:0,
                                transform:"translateY(50px)"
                            },
                            {
                                opacity:1,
                                transform:"translateY(0)"
                            }
                        ],
                        {
                            duration:1800,
                            fill:"forwards",
                            easing:"ease-out"
                        }
                    );

                },1500);

            }

        },1000);

    },2000);

}

showScene();

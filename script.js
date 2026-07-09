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

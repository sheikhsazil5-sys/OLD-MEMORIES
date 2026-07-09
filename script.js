const intro = document.getElementById("intro");
const introText = document.getElementById("introText");
const hero = document.getElementById("hero");

// Hero hide
hero.style.opacity = "0";

const scenes = [

    "2018",

    "The year\nEverything Changed...",

    "Do you remember\nYour First Drop?"

];

let current = 0;

function nextScene() {

    introText.style.opacity = "0";

    setTimeout(() => {

        current++;

        if (current >= scenes.length) {

            intro.style.opacity = "0";

            setTimeout(() => {

                intro.style.display = "none";

                hero.style.transition = "2s";

                hero.style.opacity = "1";

            },1000);

            return;

        }

        introText.innerHTML = scenes[current].replace(/\n/g,"<br>");

        introText.style.opacity = "1";

    },1000);

}

setTimeout(nextScene,2500);

setTimeout(nextScene,5500);

setTimeout(nextScene,9000);

const hero = document.querySelector(".hero-content");

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

const scroll = document.querySelector(".scroll");

setInterval(()=>{

    scroll.animate(

    [

        {
            transform:"translate(-50%,0px)"
        },

        {
            transform:"translate(-50%,10px)"
        },

        {
            transform:"translate(-50%,0px)"
        }

    ],

    {

        duration:1500

    });

},1500);

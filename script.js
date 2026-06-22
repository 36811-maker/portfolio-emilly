const texto =
"Olá, eu sou Emilly Barbosa | Estudante de Tecnologia da Informação";

const elemento = document.getElementById("typing");

let i = 0;

function escrever(){

    if(i < texto.length){

        elemento.innerHTML += texto.charAt(i);
        i++;

        setTimeout(escrever, 80);
    }
}

escrever();

const elementos = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }

    });

});

elementos.forEach((el)=>{
    observer.observe(el);
});

const cards = document.querySelectorAll(".card");

cards.forEach((card)=>{

    card.addEventListener("mousemove",(e)=>{

        const x = e.offsetX;
        const y = e.offsetY;

        card.style.background =
        `radial-gradient(circle at ${x}px ${y}px,
        #ffffff,
        #dcecff)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.background = "#ffffff";

    });

});
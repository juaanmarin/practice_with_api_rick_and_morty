const url="https://rickandmortyapi.com/api/character";
const cards=document.querySelector(".cards");
const lista=document.querySelector("#lista");

window.addEventListener("load", getCharacter()); //ejecuta la funcion cuando la pagina se carga

function getCharacter(){
    fetch(url)
    .then(response => response.json())  //esto es una promesa que trae un parametro
    .then(data => addCard(data.results))
}

function addCard(data){
    data.forEach(element =>{
        cards.append(createCard(element))
    })
}

function createCard(element){
    const content=document.createElement("div");
    content.setAttribute("class","carta");

    const contentimage=document.createElement("div");
    contentimage.classList="image";

    const contentitle=document.createElement("div");
    contentimage.classList="titlee";

    const title=document.createElement("h2");
    title.textContent=element.name;

    const image=document.createElement("img");
    image.setAttribute("src",element.image);
    image.textContent=element.image;

    contentitle.appendChild(title);
    contentimage.appendChild(image);

    content.appendChild(contentitle);
    content.appendChild(contentimage);

    return content;
}

Sortable.create(lista, {
    Animation: 150,
    // chosenclass: "selected"
    ghostClass: 'blue-background-class'
});
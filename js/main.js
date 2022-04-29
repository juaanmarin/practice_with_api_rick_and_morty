const url="https://rickandmortyapi.com/api/character";
const cards=document.querySelector(".cards")

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

    const title=document.createElement("h2");
    title.textContent=element.name;

    const image=document.createElement("img");
    image.setAttribute("src",element.image);
    image.textContent=element.image;

    content.appendChild(title);
    content.appendChild(image);

    return content;
    
}


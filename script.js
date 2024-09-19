const div = document.querySelector("div")
const parrafo = document.querySelector("p")
const input = document.querySelector("input")
const h1 = document.querySelector("h1")

parrafo.addEventListener("click",(e)=>{
    console.log ("hiciste click!")

    console.log(e.target)
    e.stopPropagation()
})


div.addEventListener("click",()=>{
    console.log ("hiciste click en el div")
})

input.addEventListener("keyup", (e) => {
    console.log(e.key)
}
)

h1.addEventListener ("dblclick", cambiarTexto)

function cambiarTexto()
{
    h1.innerHTML = "Hola Mundo!"
    h1.style.color = "red"
}
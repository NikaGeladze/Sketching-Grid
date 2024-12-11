let defaultrows = 16;
let defaultcolumns = 16;
let maxWidth = 500;
let maxHeight = 500;
let held = false;
const container = document.querySelector(".container");
const rowsinput = document.querySelector("#rowsinput");
const columnsinput = document.querySelector("#columnsinput");
const generatebtn = document.querySelector("#generatebtn");
const clearbtn = document.querySelector("#clearbtn");
const colorin = document.querySelector("#colorpicker");
clearbtn.addEventListener("click",() => {
    const squares = document.querySelectorAll(".square");
    squares.forEach((sqr) =>{
        sqr.style.background = "white";
    })

})
generatebtn.addEventListener("click",() =>
{
    generateDisplay(+rowsinput.value,+columnsinput.value);
})

document.addEventListener("DOMContentLoaded",() => generateDisplay(defaultrows,defaultcolumns));
document.addEventListener("mouseup", () => held = false);


function generateDisplay(nrows,ncolumns)
{
    while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    for(let i = 0;i < ncolumns;i++)
        {
            const row = document.createElement("div");
            row.classList.add("row");
        
            container.appendChild(row);
            for(let j = 0;j < nrows;j++)
            {
                const square = document.createElement("div");
                square.classList.add("square");
                let sqwidth = Math.round(maxWidth/nrows);
                let sqHeight = Math.round(maxHeight/ncolumns);
                square.style.width = `${sqwidth}px`;
                square.style.height = `${sqHeight}px`;
                
                row.appendChild(square);
            }
    }
    container.addEventListener("mousemove",(sqr) => handleMouseOver(sqr.target,colorin.value))
    container.addEventListener("click",(sqr) => 
        {
            held = true;
            handleMouseOver(sqr.target,colorin.value);
            held = false;
})

    container.addEventListener("mousedown", () => held = true);
}

function handleMouseOver(square,color)
{
    if(held && square.classList.contains("square")) 
    {
        square.style.background = color;
    }
}
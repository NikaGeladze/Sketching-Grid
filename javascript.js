let defaultrows = 16;
let defaultcolumns = 16;
let maxWidth = 500;
let maxHeight = 500;
let held = false;
let fillWithOpacity = false;
let rightclicked = false;
const container = document.querySelector(".container");
const rowsinput = document.querySelector("#rowsinput");
const columnsinput = document.querySelector("#columnsinput");
const generatebtn = document.querySelector("#generatebtn");
const clearbtn = document.querySelector("#clearbtn");
const colorin = document.querySelector("#colorpicker");
const gridstatein = document.querySelector("#gridstate");
const opacitystate = document.querySelector("#opacitystate");
container.addEventListener("contextmenu", function(event) {
    event.preventDefault(); 
    console.log("Right mouse button clicked!");
    rightclicked = true;
});
opacitystate.addEventListener("change",() => {
    if(!opacitystate.checked)
    {
        fillWithOpacity = false;
    }
    else{
        fillWithOpacity = true;
    }
})

gridstatein.addEventListener("change",() =>{
    if(!gridstatein.checked)
    {
        const squares = document.querySelectorAll(".square");
        squares.forEach((sqr) =>{
            sqr.style.border = "none";
        })
    }
    else{
        const squares = document.querySelectorAll(".square");
        squares.forEach((sqr) =>{
            sqr.style.border = "1px solid rgb(190, 164, 136)";
        })
    }
})
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
document.addEventListener("mouseup", () => {
    held = false;
    rightclicked = false;
});


function generateDisplay(nrows,ncolumns)
{
    while (container.firstChild) {
        container.removeChild(container.firstChild);
      }0.06
    for(let i = 0;i < ncolumns;i++)
        {
            const row = document.createElement("div");
            row.classList.add("row");
        
            container.appendChild(row);
            for(let j = 0;j < nrows;j++)
            {
                const square = document.createElement("div");
                square.classList.add("square");
                if(!gridstatein.checked)
                    {
                     
                            square.style.border = "none";
                       
                    }
                    else{
                        
                            square.style.border = "1px solid rgb(190, 164, 136)";
                       
                    }
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
            rightclicked = false;
})

    container.addEventListener("mousedown", () => held = true);
}

function handleMouseOver(square, hex) {
    if (held && square.classList.contains("square")) {
        if(!rightclicked)
        {
        if(fillWithOpacity)
        {
        if (!square.hasAttribute("data-opacity")) {
            square.setAttribute("data-opacity", 0.2); 
        }
        
        let opacity = parseFloat(square.getAttribute("data-opacity"));

        opacity = Math.min(opacity + 0.06, 1);

        hex = hex.replace(/^#/, '');

        if (hex.length === 3) {
            hex = hex.split('').map(function (hex) {
                return hex + hex;
            }).join('');
        }

        const r = parseInt(hex.slice(0, 2), 16);
        const g = parseInt(hex.slice(2, 4), 16);
        const b = parseInt(hex.slice(4, 6), 16);
        
        square.style.background = `rgba(${r},${g},${b},${opacity})`;

        square.setAttribute("data-opacity", opacity);
    }
     
   
    else{
        square.style.backgroundColor = hex;
    }
    }
    else{
        square.style.background = "white";
    }
   
    }
   
}

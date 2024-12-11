let rows = 16;
let columns = 16;
let maxWidth = 500;
let maxHeight = 500;
let held = false;
const container = document.querySelector(".container");
document.addEventListener("DOMContentLoaded",() => generateDisplay(rows,columns));
document.addEventListener("mouseup", () => held = false);


function generateDisplay(nrows,ncolumns)
{
    for(let i = 0;i < ncolumns;i++)
        {
            const row = document.createElement("div");
            row.classList.add("row");
        
            container.appendChild(row);
            for(let j = 0;j < nrows;j++)
            {
                const square = document.createElement("div");
                square.classList.add("square");
                let sqwidth = Math.round(maxWidth/rows);
                let sqHeight = Math.round(maxHeight/columns);
                square.style.width = `${sqwidth}px`;
                square.style.height = `${sqHeight}px`;
                
                row.appendChild(square);
            }
    }
    container.addEventListener("mousemove",(sqr) => handleMouseOver(sqr.target))
    container.addEventListener("click",(sqr) => 
        {
            held = true;
            handleMouseOver(sqr.target);
            held = false;
})

    container.addEventListener("mousedown", () => held = true);
}

function handleMouseOver(square)
{
    if(held && square.classList.contains("square")) 
    {
        square.style.background = "palevioletred";
    }
}
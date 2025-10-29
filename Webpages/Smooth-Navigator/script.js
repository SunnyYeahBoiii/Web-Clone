const rootElement = document.documentElement;
const linkBtns = document.querySelectorAll(".link-button");
const box = document.getElementById("box");

let isInvisible = true;
let timeOutId = null;

const transitionStr = ["opacity 0.5s ease , top 0.5s ease" , "opacity 0.5s ease"];

function turnInvisible (){ 
    timeOutId = setTimeout(() => {
        if(isInvisible == true){
            box.style.opacity = '0'
            box.style.transition = transitionStr[1];
        }
    } , 500);
}

let count = 0
linkBtns.forEach((linkBtn) =>{
    linkBtn.addEventListener("mouseover" , () => {
        isInvisible = false;
        let id = linkBtn.getAttribute("id")
        id = id.slice(5)
        box.style.top = `${10 + 21 * (id - 1)}%`;
        box.style.opacity = '1';
        setTimeout(() => box.style.transition = transitionStr[0] , 500);
        clearTimeout(timeOutId)
    });

    linkBtn.addEventListener("mouseout" , () => {
        isInvisible = true;
        turnInvisible()
    });
});

console.log(linkBtns)
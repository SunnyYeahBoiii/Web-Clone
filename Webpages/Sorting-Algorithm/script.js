const boxCtn = document.getElementById("box-container");
const numbers = document.querySelectorAll(".wrapper .place-holder .number");
const numberCtn = document.querySelectorAll(".wrapper .place-holder");
const leftHolder = document.getElementById("smaller-holder");
const rightHolder = document.getElementById("bigger-holder");
const sortBtn = document.getElementById("sort-btn");

console.log(leftHolder.offsetLeft , leftHolder.offsetTop);
console.log(rightHolder.offsetLeft , rightHolder.offsetTop);

function toLeft(ele){
    console.log(ele.parentElement.offsetLeft , ele.parentElement.offsetTop);
    ele.style.left = `${(leftHolder.offsetLeft - ele.parentElement.offsetLeft)}px`;
    ele.style.top = `${(leftHolder.offsetTop - ele.parentElement.offsetTop)}px`;
}

function toRight(ele){
    ele.style.left = `${(rightHolder.offsetLeft - ele.parentElement.offsetLeft)}px`;
    ele.style.top = `${(rightHolder.offsetTop - ele.parentElement.offsetTop)}px`;
}

function toPlaceholder(firstElement , secondElement){
    firstElement.classList.toggle("foward");
    firstElement.classList.toggle("reverse");
    firstElement.style.left = `0px`;
    firstElement.style.top = `${(-firstElement.parentElement.offsetTop + secondElement.parentElement.offsetTop)}px`;
    setTimeout(() => {
        firstElement.classList.toggle("foward");
        firstElement.classList.toggle("reverse");
    }, 2000);
}

function swap(i , j){
    toLeft(numbers[i]);
    toRight(numbers[j]);
    console.log("NGU");
    

    setTimeout(() => {
        toPlaceholder(numbers[i] , numbers[j]);
        toPlaceholder(numbers[j] , numbers[i]); 
    }, 2000);
}

sortBtn.addEventListener("click" , () => {
    swap(0 , 5);
});

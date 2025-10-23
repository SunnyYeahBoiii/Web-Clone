const sortBtn = document.getElementById("sort-btn");
const addNumberBtn = document.getElementById("add-btn");
const clearBtn = document.getElementById("clear-btn");
const dialog = document.getElementById("add-number-diag");
const dialogCloseBtn = document.getElementById("add-close-btn");
const dialogInput = document.getElementById("number-input");
const dialogAddBtn = document.getElementById("add-done-btn");
const numberCtn = document.querySelector(".wrapper");
const blurBackground = document.getElementById("blur-background");
const leftHolder = document.getElementById("smaller-holder");
const rightHolder = document.getElementById("bigger-holder");
let numbers;

function openDialog(){
    dialog.classList.toggle("hidden");
    sortBtn.setAttribute("disabled" , "true");
    sortBtn.classList.toggle("disabled");
    addNumberBtn.setAttribute("disabled" , "true");
    addNumberBtn.classList.toggle("disabled");
    blurBackground.style.display = "flex";
}

function closeDialog(){
    dialog.classList.toggle("hidden");
    sortBtn.removeAttribute("disabled");
    sortBtn.classList.toggle("disabled");
    addNumberBtn.removeAttribute("disabled");
    addNumberBtn.classList.toggle("disabled");
    blurBackground.style.display = "none";
}

clearBtn.addEventListener("click" , () => {
    localStorage.removeItem("listData");
    arr = [];
    numberCtn.innerHTML = "";
})

addNumberBtn.addEventListener("click" , () => {
    openDialog();
});

dialogCloseBtn.addEventListener("click" , () => {
    closeDialog();
});

blurBackground.addEventListener("click" , () => {
    closeDialog();
});

function addNumber(num){
    numberCtn.innerHTML += `
        <div class = "place-holder">
            <div class = "number forward">${num}</div>
        </div>
    `;
}

function updateListLocalStorage(){
    localStorage.setItem("listData" , JSON.stringify(arr))
}

function addAndUpdateNumber(num){
    addNumber(num);
    arr.push(num);
    updateListLocalStorage();
}

function checkValidNumber(num){
    return 0 < num && num < 100;
}

dialogAddBtn.addEventListener("click" , (e) => {
    e.preventDefault();

    const num = Number(dialogInput.value);

    if(!checkValidNumber(num)){
        alert("Please enter a valid number!!");
        return;
    }

    if(arr.length >= 10){
        alert("Array too large!!");
        closeDialog();
        return;
    }

    addAndUpdateNumber(num);
    dialogInput.value = "";
    closeDialog();
});

let arr = getLocalList();
function getLocalList(){
    let list = JSON.parse(localStorage.getItem("listData")) || [];

    for (const x in list){
        addNumber(list[x]);
    }

    return list;
}

function toLeft(ele){
    // console.log(ele.parentElement.offsetLeft , ele.parentElement.offsetTop);
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
    firstElement.style.left = `${(-firstElement.parentElement.offsetLeft + secondElement.parentElement.offsetLeft)}px`;
    firstElement.style.top = `${(-firstElement.parentElement.offsetTop + secondElement.parentElement.offsetTop)}px`;
    setTimeout(() => {
        firstElement.classList.toggle("foward");
        firstElement.classList.toggle("reverse");
    }, 2000);
}

function swap(i , j){
    numbers = document.querySelectorAll(".wrapper .place-holder .number");
    toLeft(numbers[i]);
    toRight(numbers[j]);
    // console.log("NGU");
    
    setTimeout(() => {
        toPlaceholder(numbers[i] , numbers[j]);
        toPlaceholder(numbers[j] , numbers[i]); 
    }, 2300);

    setTimeout(() => {
        let temp = arr[i];
        // console.log(temp);
        numbers[i].parentElement.innerHTML = `
            <div class = "number forward">${arr[j]}</div>
        `;
        numbers[j].parentElement.innerHTML = `
            <div class = "number forward">${arr[i]}</div>
        `;
        arr[i] = arr[j];
        arr[j] = temp;
        updateListLocalStorage();
    } , 4600);
}

function bubbleSort(){
    numbers = document.querySelectorAll(".wrapper .place-holder .number");
    const n = arr.length;
    let tempArr = Array.from(arr);
    let pairs = [];
    for(let i = n - 1 ; i >= 0 ; i--){
        for(let j = 0 ; j < i ; j++){
            if(tempArr[i] < tempArr[j]){
                let temp = tempArr[i];
                tempArr[i] = tempArr[j];
                tempArr[j] = temp;
                pairs.push([i , j]);
            }
        }
    }

    if(pairs.length === 0){
        alert("Array already sorted!");
        return;
    }

    console.log(pairs[0][0] , pairs[0][1]);
    
    numbers[pairs[0][0]].classList.toggle("selected");
    numbers[pairs[0][1]].classList.toggle("selected");
    swap(pairs[0][0] , pairs[0][1]);
    setTimeout(() =>{
    numbers[pairs[0][0]].classList.toggle("selected");
    numbers[pairs[0][1]].classList.toggle("selected");
    } , 4600);

    let counter = 1;
    const sortInterval = setInterval(() => {
        numbers = document.querySelectorAll(".wrapper .place-holder .number");
        
        numbers[pairs[counter][0]].classList.toggle("selected");
        numbers[pairs[counter][1]].classList.toggle("selected");
        
        if(pairs[counter][0] < pairs[counter][1])
            swap(pairs[counter][0] , pairs[counter][1]);
        else
            swap(pairs[counter][1] , pairs[counter][0]);
        
        setTimeout(() =>{
            numbers = document.querySelectorAll(".wrapper .place-holder .number");

            counter += 1;
            if(counter == pairs.length)
                clearInterval(sortInterval);
        } , 5000);

    } , 5200);

}

sortBtn.addEventListener("click" , () => {
    bubbleSort();
});

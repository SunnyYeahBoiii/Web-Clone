const welcomeText = document.getElementById("introduction-text");
const moreIcon = document.getElementById("more-icon");
const moreInfo = document.getElementById("more-info");

console.log(welcomeText);

function replaceWelcomeText(){
    let words = welcomeText.textContent.split(" ");
    welcomeText.innerHTML = "";
    let count = 0;

    for (const x in words){
        for(const character in words[x]){
            welcomeText.innerHTML += `<span class = "split-text" style = "--position : ${count}">${words[x][character]}</span>`;
            count++;
        }

        if(x < words.length)
            welcomeText.innerHTML += ' ';
    }
}

replaceWelcomeText();

moreIcon.addEventListener("click" , () =>{
    if(moreInfo.style.height == "200px"){
        moreInfo.style.height = "0px";
    }else{
        moreInfo.style.height = "200px";
    }
});

// moreIcon.addEventListener("touchstart" , () =>{
//     if(moreInfo.style.height === "200px"){
//         moreInfo.style.height = "0px";
//     }else{
//         moreInfo.style.height = "200px";
//     }
// });
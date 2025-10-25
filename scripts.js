const welcomeText = document.getElementById("introduction-text");

console.log(welcomeText);

function replaceWelcomeText(){
    let words = welcomeText.textContent.split(" ");
    welcomeText.innerHTML = "";
    let count = 0;

    for (const x in words){
        console.log(words[x]); 

        for(const character in words[x]){
            welcomeText.innerHTML += `<span class = "split-text" style = "--position : ${count}">${words[x][character]}</span>`;
            count++;
        }

        if(x < words.length)
            welcomeText.innerHTML += ' ';
    }
}

replaceWelcomeText();
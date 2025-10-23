const formCtn = document.getElementById("complaint-form");

const firstNameCtn = document.getElementById("first-name");
const firstNameAlert = document.querySelector("#first-name-ctn p");
const lastNameCtn = document.getElementById("last-name");
const lastNameAlert = document.querySelector("#last-name-ctn p");

const emailCtn = document.getElementById("email");
const emailAlert = document.querySelector("#email-ctn p");

const generalEnquiryCtn = document.getElementById("general-enquiry-ctn");
const generalEnquiryButton = document.getElementById("general-enquiry");
const supportRequestCtn = document.getElementById("support-request-ctn");
const supportRequestButton = document.getElementById("support-request");
const queryAlert = document.querySelector("#query-type-ctn p");

const msgCtn = document.getElementById("message");
const msgAlert = document.querySelector("#msg-ctn p");

const consentBtn = document.getElementById("consent");
const consentAlert = document.querySelector("#consent-ctn p");

const submitBtn = document.getElementById("submit-btn");

let isError = false;

// for DEBUG, please erase after all complete

// const debugCtn = document.getElementById("debug");

// debugCtn.addEventListener("click" , checkForm);


// ---------------- JS for QUERY TYPE Section ---------------------------
generalEnquiryCtn.addEventListener("click" , () => {
    generalEnquiryButton.checked = true;
});

supportRequestCtn.addEventListener("click" , () => {
    supportRequestButton.checked = true;
});

// ---------------------------------------------------------------------

function checkName(str){
    return str.length > 0;
}

function checkEmail(str){
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return str.match(regex);
}

function checkQuery(){
    return generalEnquiryButton.checked == true || supportRequestButton.checked == true; 
}

function checkConsent(){
    return consentBtn.checked == true;
}

function checkForm(){

    isError = false;
    if(!checkName(firstNameCtn.value)){
        isError = true;
        firstNameCtn.classList.add("red-border");
        firstNameAlert.classList.remove("hidden");
        // make input red
    }else{
        firstNameCtn.classList.remove("red-border");
        firstNameAlert.classList.add("hidden");
    }
    
    if(!checkName(lastNameCtn.value)){
        isError = true;
        lastNameCtn.classList.add("red-border");
        lastNameAlert.classList.remove("hidden");
        // make input red
    }else{
        lastNameCtn.classList.remove("red-border");
        lastNameAlert.classList.add("hidden");
    }
    
    if(!checkEmail(emailCtn.value)){
        isError = true;
        emailCtn.classList.add("red-border");
        emailAlert.classList.remove("hidden");
        // make input red
    }else{
        emailCtn.classList.remove("red-border");
        emailAlert.classList.add("hidden");
    }

    if(!checkQuery()){
        isError = true;
        queryAlert.classList.remove("hidden");
    }else{
        queryAlert.classList.add("hidden");
    }

    if(!checkName(msgCtn.value)){
        isError = true;
        msgAlert.classList.remove("hidden");
        msgCtn.classList.add("red-border");
    }else{
        msgCtn.classList.remove("red-border");
        msgAlert.classList.add("hidden");
    }

    if(!checkConsent()){
        isError = true;
        consentAlert.classList.remove("hidden");
    }else{
        consentAlert.classList.add("hidden");
    }

    // console.log(isError);
    if(isError == false) 
        formCtn.submit();
}

formCtn.addEventListener("submit", function(event){
    event.preventDefault();
    checkForm();
});
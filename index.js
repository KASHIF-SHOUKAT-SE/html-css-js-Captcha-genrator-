// slecting neccecery dom elemnet
const capchaTextBox = document.querySelector(".captcha_box input");
const refreshButton = document.querySelector(".refresh_button");
const capchaInputBox = document.querySelector(".captcha_input input");
const message = document.querySelector(".message");
const submitButton = document.querySelector(".button");

// variable stored generate capcha
let capchaText = null;

// function stored generate captcha

const  generateCapcha = ()=>{
    const randomString = Math.random().toString(36).substring(2,7);
    const randomStringArray =randomString.split("");
    const changeString = randomStringArray.map((char)=>(Math.random() > 0.5 ? char.toUpperCase(): char));
    capchaText =changeString.join(" ");
    capchaTextBox.value =capchaText;
    console.log(randomString, changeString);
    
}
 
const refreshBtnClick=()=>{
    generateCapcha();
    capchaInputBox.value="";
    capchaKeyUpVladate();
}

const submitBtnClick = ()=>{
    capchaText =capchaText
    .split("")
    .filter((char) => char !== " ")
    .join("");

    message.classList.add("active")
   // check if the enter capcha text is correct or not
    if(capchaInputBox.value === capchaText){
        message.innerText = "Enter capcha is correct"
        message.style.color = "#826afb"
    }else{
        message.innerText = "Enter capcha is not correct"
        message.style.color = "#ff2525"
    }
    
}

const capchaKeyUpVladate= ()=>{
    //toogle submit button disabled class on capcha input field, submit button
    submitButton.classList.toggle("disabled", !capchaInputBox.value)

    if(capchaInputBox.value === "")message.classList.remove("actve")
}
// add event listner for the refresh btn, capchaInputBox
refreshButton.addEventListener('click',refreshBtnClick);
capchaInputBox.addEventListener('keyup',capchaKeyUpVladate);
submitButton.addEventListener('click', submitBtnClick);
 // generate capcha when the page load

 
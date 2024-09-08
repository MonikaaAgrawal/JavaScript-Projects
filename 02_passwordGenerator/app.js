const password = document.getElementById("password");
const length = 12;
const characters = "ABCDEFGHIJKLMNOPQRSTUWXYZabcdefghijklmnopqrstuvwxyz+-*/`@!1234567890";

const charLength = characters.length;


 function randomPassword(){
    let newPassword ="";
    for(let i=0; i<length; i++){
        newPassword += characters[Math.floor(Math.random() * charLength)];
    }
    password.value = newPassword;
 } 
 
 function copyPassword(){
    password.select();
    password.setSelectionRange(0, 9999)
    navigator.clipboard.writeText(password.value)
 }

 
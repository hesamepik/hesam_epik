import { getcookie, setcookie } from "./cookie.js";
import { postData } from "./httpReq.js";
import { validateform } from "./validate.js";
const inputBox= document.querySelectorAll("input")

const login_boutten=document.querySelector("button")

 const submitHandeler= async (event)=>{

event.preventDefault();

const username =inputBox[0].value;
const password =inputBox[1].value;

const resalt=validateform(username,password)
if(!resalt) return;

const response =await postData("auth/login",{
    username,
    password
})//مثل dataیوزر نیم و پسورد را میفزستیم به ریکوست فایل میتوانیستیم در یک متغیر جدا جدا تعریف کنیم و ان را بفرستیم

//const data={password =aa,user=bb}


setcookie(response.token)//برای ذخیره توکن در کوکی ها
if(getcookie){
    location.assign("index.html")
}
}
const init=()=>{//استفاده از ائن کوکی دسترسی میدیم یا دسترسی محدود میکنما
const cookie =getcookie();
console.log(cookie)
if (cookie){
    location.assign("index.html")
}
}

 login_boutten.addEventListener("click", submitHandeler)
 document.addEventListener("DOMContentLoaded" , init)





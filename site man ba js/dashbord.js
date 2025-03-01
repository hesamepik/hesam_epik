import { getcookie } from "./cookie.js";
import { getdata } from "./httpReq.js";
 
const maincontent=document.getElementById("container")

const renderusers = user=>{
maincontent.innerHTML=""
user.forEach(user => {
  const jsx =`
  <div id=card>
  <h3>${user.id}</h3>
  <div>
  <p><i class="fa-solid   fa-user"></i>name:</p>
  <span>${user.name.firstname}${user.name.lastname}</span>
  </div>
  <div>
  <p><i class="fa-solid   fa-location"></i>address:</p>
  <span>${user.address}</span>
  </div>
  <div>
  <p><i class="fa-solid   fa-envelope"></i>email:</p>
  <span>${user.email}</span>
  </div>
  <div>
  <p><i class="fa-solid   fa-phone"></i>phone:</p>
  <span>${user.phone}</span>
  </div>
 
  </div>
  
  `
  maincontent.innerHTML+=jsx
});

}

const init =async (event) => {
  event.preventDefault();

  // بررسی اگر تغییر مسیر قبلاً انجام شده باشد
  if (sessionStorage.getItem("redirected")) {
    console.log("Already redirected. Preventing further reloads.");
    return;
  }

  // بررسی وجود کوکی
  const cookie = getcookie();

  if (!cookie) {
    console.log("No cookie found. Redirecting to auth page...");
    sessionStorage.setItem("redirected", "true"); // علامت‌گذاری تغییر مسیر
    location.replace("auth.html"); // استفاده از replace برای جلوگیری از ایجاد تاریخچه جدید
  } else {
    console.log("Cookie found. Access granted.");
  }

  const user=await getdata("users")
  console.log(user)
  renderusers(user)
};

const user=await getdata("users")
console.log(user)
renderusers(user)
// اتصال رویداد به بارگذاری صفحه
document.addEventListener("DOMContentLoaded", init);

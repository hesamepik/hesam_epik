
import { getcookie } from "./cookie.js"
import { getdata } from "./httpReq.js"
import { shorttext } from "./shorttext.js"
let allproducts="null"

const loginboutten = document.getElementById("login")
const dashbordboutten = document.getElementById("dashbord")
const maincontent = document.getElementById("prodct")
const searchbutten = document.querySelector("button")
const inputbox = document.querySelector("input")
const li_list =document.querySelectorAll("li")





const showproduct=(products)=>{//برای نمایش محصولات 

    maincontent.innerHTML="";//فضا خالی باشع
    products.forEach(products => {//چند محصول میخوایم استایل بدیم دونه دونه زیاد میشه با حلقع این کارو مکینمیک


const jsx =`
<div id="s" data-id="${products.id}">
    <img alt="${products.title}" src="${products.image}">
    <h4>${shorttext(products.title)}</h4>
    <div id="price">
        <p>$${products.price}</p>
        <button>buy <i class="fa-solid fa-cart-shopping"></i></button>
    </div>
    <div id="rate">
        <i class="fa-solid fa-star"></i>
        <span>${products.rating.rate}</span>
    </div>
    <div id="count">
        <i class="fa-solid fa-user"></i>
        <span>${products.rating.count}</span>
    </div>
    

`;


        maincontent.innerHTML += jsx//نمایش
    });

}

const init = async()=>{//برای این است که بگوید لاگین کی نشان داده شود یا کی داشتبورد نشان داده شود دکمه ان هتا منظورم است

    const cooki=getcookie()
if(cooki){
    loginboutten.style.display="none"
}else{
    dashbordboutten.style.display="none"
}
  allproducts=await getdata("products")

showproduct(allproducts)
console.log(allproducts)

}
const searchhandeler=()=>{

 const query =inputbox.value.trim().toLocaleLowerCase();
if (!query){
    showproduct(allproducts)
}
const filterproduct=allproducts.filter( x=>x.title.toLocaleLowerCase().includes(query))//تابع فیلتر تابع امادس 
//منظور از ایکس در اینجا شماره ابجکت ها است
//چون تابه اماده فیلتر. به صورا ابجکتی میگیرد
//درواقع ایکس ما همه کلید ها را از صفر تا اخر دارد و همه مقادیر رو هم دارد
//اگر برات سوال شد منظور از کلد ها چیه از همه مصولات لاگ بگیر میفهمی

showproduct(filterproduct)










}

const filterhandeler=(event)=>{

const category=event.target.innerText.toLocaleLowerCase();

li_list.forEach((li)=>{
    if(li.innerText.toLowerCase()===category){
li.className="selected"
    }
    else{
        li.className=""
    }
})
 const filterprodact=allproducts.filter((product)=>product.category.toLowerCase()===category)//محصولاتی را برگردان که برابر محصولی است ککه رویش کلیک شده


 
    if(category==="all"){
        showproduct(allproducts)
    }
    showproduct( filterprodact)

}







document.addEventListener("DOMContentLoaded",init)
searchbutten.addEventListener("click", searchhandeler)
 li_list.forEach  ( li =>li.addEventListener("click", filterhandeler))//بخاطر اینکهچند تا ال ای وجود دارد  و برای همه ان ها میخواهیم عمل یکسانی انجتم شود
 

 // نکته خیلی خیلی محم شما وقتی از اد ایونت لیسنر استفاده میکنی هر چیزی که روش کلیک بشه به صور خودکار اطلاعاتش به سمت تابعی که دکر کردی ارسال میشود












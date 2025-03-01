
const setcookie =(data)=>{
document.cookie = `token=${data}, max-age=${24*60*60},path=/`;

 //  توکن در کوکی دخیره میشه 
 //و با کمک کوکی دخیره شده میتونیم اجازه دسترسی به بعضی صفحه هارا بدیم یا ندیم
}
const getcookie =()=>{//برای ابجکت کردن کوکی و خوانای و کار کردن راحت با ان

const cookie=document.cookie;
if (cookie){//اگر کوکی وجود داشته
    const cookieArrey=cookie.split("=")
    return{
        [cookieArrey[0] ]: cookieArrey[1]//token=اعداد توکن 
        //مدلی که با = جدا شده
        //به صورت ابجکتی داده نام وکلید 
    }

}
else{
    return false;
}
}

export{ setcookie,getcookie }
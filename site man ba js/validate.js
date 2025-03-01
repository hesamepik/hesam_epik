const validateusername=(username)=>{

 const regex= /^[a-zA-Z\d_]{4,20}$/;
 const resalt=regex.test(username)
 return resalt

}
const validatpassword=(password)=>{

    const regex= /^.{4,20}$/;
    const resalt=regex.test(password)
    return resalt
   
}
const validateform=(username,password)=>{
const resaltuser =validateusername(username)
const resaltpass =validatpassword(password)



if(resaltuser && resaltpass){
    return true
}
else if (!resaltuser) {
    alert("user name shoma eshtebah ast")
    
}
 else if(!resaltpass){
    alert("password shoma eshtebah ast")
} 

}



export {validateform}
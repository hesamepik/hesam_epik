const shorttext=(text)=>{

 return text.split(" ").slice(0, 3).join(" ");//نمایشزسه کلمه اول یک متن

}
export { shorttext }
//
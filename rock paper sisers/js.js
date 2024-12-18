
const cheoes = ["rock","paper","sisers"];
let plyerwin = 0;
let pcwin = 0;

const showresult = (res) =>{

if (res ==="youwin"){

    console.log("youwinnn!")
    plyerwin++;

}else if (res === "youlose"){ 
    console.log("youlose:(");
    pcwin++;

}else{
    console.log("drew");
}
console.log(`plyerwin:${plyerwin}`)
console.log(`pcwin:${pcwin}`)
console.log("--------------------------------")
}
   

function cheekwiner(plyer,pc){
if(plyer=== pc){
    return "mosavi";
}
else if(plyer==="rock"){
return pc === "sisers" ? "youwin" : "youlose";

}
else if(plyer==="paper"){
    return pc==="sisers" ? "youwin":"youlose";
    
}
else if(plyer==="sisers"){
    return pc==="paper" ? "youwin":"youlose";
    
}
}
function play() {

    const choseplayer = prompt("rock , paper ,sisers");
    
    if(typeof choseplayer==="string" && cheoes.indexOf(choseplayer.toLowerCase () ) !== -1 ){

        console.log(`yorchoes:${choseplayer}`)
    }
    else{
        console.log("youcheat")
    }



let x = Math.floor(Math.random() *3);
const pcchoes=cheoes[x];
console.log(`computer: ${pcchoes} `);

const rus = cheekwiner(choseplayer,pcchoes);
showresult(rus);
play()

}

 
play();

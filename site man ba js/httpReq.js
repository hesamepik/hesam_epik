const Base_URL="https://fakestoreapi.com";

const postData =async(path,data)=>{
    try{
        const respons= await fetch(`${Base_URL}/${path}`,{


            method:"POST",
            body:JSON.stringify(data),
            headers: {"Content-Type":"application/json"},
            });
        
    
        const json=await respons.json();
        return json;
    } catch (error){
        alert("error")
    }

  
    };

    const getdata=async(path)=>{//گرفتن محصولات

try {
    const respons= await fetch(`${Base_URL}/${path}`)
const json =await respons.json();
return json;
} catch (error) {
    alert("eror atelat bar nmigardad")
}

    }
    export{postData, getdata};
  
   

      
     








        

 
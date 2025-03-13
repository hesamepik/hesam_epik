import React, { use, useState } from 'react'
import Contactlist from './Contactlist';
import inputs from '../../../inpust';
import { v4 } from 'uuid';

function contact() {
  const [alert,setalert]=useState("")
  const [contacts,setcontacts]=useState([]) 
  const[contact,setcontact]=useState({
name:"",
lastname:"",
email:"",
phone:""

  })

  const changeHandler =event =>{
    const name =event.target.name;
    const value = event.target.value;
    console.log({name , value});
    setcontact ((contact) =>({...contact ,[name] : value}))
    
    
  }
  const newContact ={...contact , id:v4() }//sakht id unic ba ketba khane v4
  const addHandeler=()=>{

   setcontacts((contacts)=>([...contacts,newContact]))
   console.log(contacts)
   setcontact({
    name:"",
lastname:"",
email:"",
phone:""

   })
   if (!contact.name||!contact.lastname||!contact.email||!contact.phone){

setalert("error");
return;

   }
     setalert("")
  
  
  }
  return (
    <div>

        
        
        <div>
          {
            inputs.map((input,index)=>(<input 
              key={index}
              type={input.type}
               placeholder={input.placeholder} 
               name={input.name} 
               value={contact[input.name]}
                onChange={changeHandler}/>))

          }
        
            <button onClick={addHandeler}>adds contact</button>
          
        </div> 
        <div>
    {alert && <p>{alert}</p>}
 
        </div>
      <Contactlist contacts={contacts} />
        
        </div>
  )
}

export default contact
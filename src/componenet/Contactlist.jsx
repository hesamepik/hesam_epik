import React from 'react'

function Contactlist({contacts}) {
  return (
    <>
<div><h3>contacts</h3>

<ul>
{contacts.map(contact=><li key={contact.id}><p>{contact.name} {contact.lastname} </p>


<p><span>📧</span> {contact.email}</p>
<p><span>☎️</span> {contact.phone}</p>
<button>⛔️</button>
</li>
) }

</ul>
</div>
    </>
  )
  
}


export default Contactlist
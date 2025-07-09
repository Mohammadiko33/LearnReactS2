import React , { useMemo} from 'react'

export default function UseMemo({allNotes}) {
  return (
   <ul className="at_list mt1">
   <li className="at_listItem tswh">alexander treyster</li>
   {useMemo(() => {
     return allNotes
     .filter((note) => {
       console.log("Filter Runing !")
       return note.name.toLowerCase().startsWith("a") && 
              note.lastName.toLowerCase().startsWith("t");
     })
     .map((noteRes) => (
       <li className="at_listItem tswm fs-7 fwMedium" key={noteRes.id}>
         ID : {noteRes.id} | FirstName: {noteRes.name} | LastName: {noteRes.lastName}
       </li>
     ))
   },[allNotes] )}
 </ul>
  )
}

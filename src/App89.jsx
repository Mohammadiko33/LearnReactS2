import React, { useMemo, useState } from "react";
import Btn from "./components/btn/Btn";
import "./components/89.useMemo/app.css";

export default function App89() {
  const [notes, setNotes] = useState([]);
  const [fName, setFName] = useState("");
  const [lastN, setLastN] = useState("");

  const addNewNote = e => {
    e.preventDefault()
    if (fName.length >= 2 && lastN.length >= 3) {
      if (fName !== "alexander" && lastN !== "treyster"){

        const newNoteObj = {
          id: notes.length + 1,
          name: fName,
          lastName: lastN,
        };
        setNotes(prev => [...prev, newNoteObj]);
        setFName("")
        setLastN("")
      } else {
        console.log("this name is love mohammadIko")
    }} else {
      console.log("first name length or last name length is not valid ");
    }
  };

  return (
    <>
      <div className="login">
        <div className="shape shape--one"></div>
        <div className="shape shape--two"></div>
        <form onSubmit={addNewNote} action="">
          <div className="form__input-wrapper">
            <label className="fffrutiger">
              Enter First names you know
            </label>
            <input
              type="text"
              placeholder="First name"
              className="ffiranxyekan fwMedium"
              minLength="3"
              maxLength="30"
              value={fName}
              onChange={e => setFName(e.target.value)}
              autoFocus
              required
            />
            <label className="fffrutiger">
              enter last names you know
            </label>
            <input
              type="text"
              placeholder="last name"
              className="ffiranxyekan fwMedium"
              minLength="3"
              maxLength="30"
              value={lastN}
              onChange={e => setLastN(e.target.value)}
              required
            />
            <Btn title="login in" type="submit" onClick={addNewNote} fs={"login_bottom ffsansI"} />
          </div>
        <ul className="list pnone">
        {notes && notes.map((note) => (
  <li className="listItem fs-7 fwMedium" key={note.id}>
    ID : {note.id} | FirstName: {note.name} | LastName: {note.lastName}
  </li>
))}
      </ul>
        </form>
      </div>
     
      {// not do this
      
      /* <div className="at_container">
        <ul className="at_list mt1">
          <li className="at_listItem tswh">alexander treyster</li>
          {notes
  .filter((note) => {
    console.log("Filter Runing !")
    return note.name.toLowerCase().startsWith("a") && 
           note.lastName.toLowerCase().startsWith("t");
  })
  .map((noteRes) => (
    <li className="at_listItem tswm fs-7 fwMedium" key={noteRes.id}>
      ID : {noteRes.id} | FirstName: {noteRes.name} | LastName: {noteRes.lastName}
    </li>
  ))}
        </ul>
      </div> 
      
      // because This Filter runs every time the component re-rander

      */}

      {/* do this */}

       <div className="at_container">
        <ul className="at_list mt1">
          <li className="at_listItem tswh">alexander treyster</li>
          {useMemo(() => {
            return notes
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
          },[notes] )}
        </ul>
      </div>
    </>
  );
}

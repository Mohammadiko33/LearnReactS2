import React, { useMemo, useState } from "react";
import Btn from "./components/btn/Btn";
import "./components/89.useMemo/app.css";
import FilteredNotes from "./components/92.memo/FilteredNotes";

export default function App90() {
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
     
      <FilteredNotes notesArray={notes}/>
    </>
  );
}


// React hook "useMemo" con not  called at the top level . react hooks must be called in a react function component or a custom react hook function
// ما نمیتونیم از هوک های یوز ممو یوز افکت یوز لسایا تئی تا پ لول یک فانکشنال کامپوننت استفاده کرده باشیم اما پیام با لا چی میگه ریکت کامپوننت ها میتونن فقط فقط داخل بدنه فانکشنال کامپوننت ها کاستوم هوک ها استفاده بشن پس بهمین خاطر من نمیتونم به کمک یوز میمو بیایم کل کل کامپوننتم رو  میمایز کرده باشم یوز ممو فقط قفط برای بخاطر سپردن و میمایز کردن ولیو های یا همون خروجی های توابع مون هستن  ن کل کامپوننت

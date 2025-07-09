import React, { memo, useMemo } from "react";

// const FilteredNotes = memo(({ notesArray }) => {
  // console.log("filtredNote run");
  // 
  // const filteredNotes = useMemo(() => {
    // console.log("filtred Run !!");
    // return notesArray.filter(note => (
      // note.name.toLowerCase().startsWith("a") &&
      // note.lastName.toLowerCase().startsWith("t")
    // ));
  // }, [notesArray]);
// 
  // return (
    // <ul>
      {/* {filteredNotes.map(note => ( */}
        // <li key={note.id}>
          {/* {note.id} - {note.name} {note.lastName} */}
        {/* </li> */}
      // ))}
    {/* </ul> */}
  // );
// });
// 
// export default FilteredNotes;

// do this

 const FilteredNotes = memo(({ notesArray }) => {
   console.log("FilteredNotes Run");

   const filteredNotes = notesArray.filter((note) => {
     console.log("Filter Run !!");
     return (
       note.name.toLowerCase().startsWith("a") &&
       note.lastName.toLowerCase().startsWith("t")
     );
   });
   return (
     <ul>
       {filteredNotes.map((note) => (
         <div key={note.id}>
           <li>
             {note.id} - {note.name} {note.lastName}
           </li>
         </div>
       ))}
     </ul>
   );
 });

export default FilteredNotes;


// useMemo زمانی استفاده میشه که که ما بخایم صرفا خروجی یک متدد رو یا فانکشن رو داشته باشیم اگر ما توی کامپوننت فرزند مثل همین کامپوننت بخایم چندین تا متدد داشته باشیم که همشون هم نیاز به یوز ممو داشته باشن خب قطعا ما اگه بخایم چندین بار استفاده کنیم در یک کامپوننت از یوز ممو اون موقع اصل درای رو نقض کردیم یک کدی رو که مینویسی تکرار نکن 

// # مقایسه memo، useMemo و useCallback در ری‌اکت

// این سه مفهوم مربوط به بهینه‌سازی عملکرد (performance optimization) در ری‌اکت هستند، اما هر کدام کاربرد متفاوتی دارند:

// ## ۱. memo (Higher-Order Component)
// - برای کامپوننت‌ها استفاده می‌شود
// - از رندرهای غیرضروری جلوگیری می‌کند
// - کامپوننت را فقط زمانی رندر می‌کند که پراپ‌های آن تغییر کرده باشند
 
// const MyComponent = React.memo(function MyComponent(props) {
//   /* render only if props change */
// });
// ## ۲. useMemo (Hook)
// - برای مقادیر محاسبه‌شده استفاده می‌شود
// - یک مقدار را memoize می‌کند و فقط زمانی آن را مجدد محاسبه می‌کند که وابستگی‌ها تغییر کنند
// - برای بهینه‌سازی محاسبات سنگین استفاده می‌شود

// const expensiveValue = useMemo(() => {
//   return computeExpensiveValue(a, b);
// }, [a, b]); // Only recompute when a or b change
// ## ۳. useCallback (Hook)
// - برای توابع استفاده می‌شود
// - یک تابع را memoize می‌کند و فقط زمانی تابع جدید ایجاد می‌کند که وابستگی‌ها تغییر کنند
// - برای جلوگیری از رندرهای غیرضروری در کامپوننت‌های فرزند مفید است

// const memoizedCallback = useCallback(() => {
//   doSomething(a, b);
// }, [a, b]); // Only recreate if a or b change
// ## تفاوت‌های کلیدی:

// | ویژگی                  | memo             | useMemo              | useCallback           |
// |------------------------|------------------|----------------------|-----------------------|
// | هدف |           کامپوننت‌ها |           مقادیر |                  توابع                   |
// | کاربرد |      جلوگیری از رندر |    محاسبات سنگین | ارسال توابع به فرزندان                |
// | مثال                   | React.memo(Comp) | useMemo(() => value) | useCallback(() => {}) |

// ## مثال کاربردی:

// const ExpensiveComponent = React.memo(({ compute, value }) => {
//   const result = compute(value);
//   return <div>{result}</div>;
// });

// function Parent() {
//   const [count, setCount] = useState(0);
//   const [input, setInput] = useState('');
  
//   // فقط زمانی تغییر می‌کند که input تغییر کند
//   const computeFunction = useCallback((val) => {
//     return val.split('').reverse().join('');
//   }, [input]);
  
//   // فقط زمانی تغییر می‌کند که count تغییر کند
//   const computedValue = useMemo(() => {
//     return count * 2;
//   }, [count]);
  
//   return (
//     <div>
//       <button onClick={() => setCount(c => c + 1)}>Count: {count}</button>
//       <input value={input} onChange={(e) => setInput(e.target.value)} />
//       <ExpensiveComponent compute={computeFunction} value={input} />
//       <div>Doubled: {computedValue}</div>
//     </div>
//   );
// }
// در این مثال:
// - memo از رندرهای غیرضروری ExpensiveComponent جلوگیری می‌کند
// - useCallback از ایجاد تابع جدید در هر رندر جلوگیری می‌کند
// - useMemo از محاسبه مجدد مقدار در هر رندر جلوگیری می‌کند
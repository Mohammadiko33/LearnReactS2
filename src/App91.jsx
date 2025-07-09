import React, { useState, useCallback, memo } from "react";
import Btn from './components/btn/Btn'

export default function App91() {
  const [val, setVal] = useState("");
  const [count , setCount] = useState(0)

  console.log("app run")


const addCountHandler = useCallback(() => {
    setCount(prev => prev + 1)
  },[count]);
 
  const minusCountHandler = useCallback(() => {
    setCount(prev => prev - 1)
  },[count]); 

  return (<>
    <input type="text" value={val} className="w50 tc" maxLength={100} onChange={(e) => setVal(e.target.value)} />
    <ShowTiTle iptVal={val} />
<Btns addCount={addCountHandler}
minusCount={minusCountHandler} count={count} />
  </>
  );
}

const ShowTiTle = memo(({iptVal}) => {
  console.log("this log from show TiTle");
  return (
    <h3 className="fwMedium">{iptVal}</h3>
  )
})
const Btns = memo(({addCount, minusCount , count}) => {
  console.log("this log from BTNs");
  return (
    <div className="dac">
      <Btn title="add" os={{backgroundColor: "var(--green)"}} onClick={addCount}/>
      <span>{count}</span>
      <Btn title="minus" os={{backgroundColor: "var(--red)"}} onClick={minusCount}/>
    </div>
  );
});

// memo
// useCallBack 
// useCallBack نحوه استفادش دقیقا مثل یوز افکت و یوز میمایز هستش و حتی عملکردشم مثل همونه اما یوز ممو میاد فقط اون تابع رو برامون یک بار اجرا میکنه و فقط اون ولیو و اون خروجی و نتیجهش رو بخاطر میسپاره یعنی اون خروجی اون تابع مارو میمایزش میکنه اما یوز کال بک میاد کل اون تابع که توی ورودی اول بهش میدیم کل فانکشن رو برای ما میمایزش میکنه پس این میشه یک تفاوت اساسی و اصلی یوز کالبک یا هوک یوز ممو
// تفاوت مهم یوز کال بک با یوز معمو : یوز معمو میاد فقط برای ما تابع رو بع عنوان خروجی برامون بخاطر میسپاره برای ما نمیاد اینجا توی خروجی کل اون تابع رو بده فقط میاد برای ما اون تابع رو اجرا میکنه و فقط خروجیشو برامون بخاطر میسپاره فقط ولیوشو به همون میده 
// اما یوزکال بک بهمون کل ارو فانکشنمون رو توی خروجی خودش برامون برمیگردونه و همین تابع رو برای ما معمیازش میکنه و از اون تابع میاد توی کامپوننتی به طور مثال باتنز و توی ان کلیک دکممون فراخانیشون برای ما انجام میشه 
/////////////////////////////////// مربوط به دوره جی اس
// دیتا های استرینگی و نمابری ما دیتا های پریمتیو هستن ("js" === "js" /|\ 12 === 12) مقایسه میکنیم برای ما اینجا انجین اجرایی مرورگرمون برای کد های جاوا اسکریپتی میاد خود همین ولیو هارو ما مقایسه میکنه و و چونکه جی اس مساوی با جی اس بهمون میگه تورو و اینا صرفا از لحاظ ولیو بودن
// ({} === {} ? false)  دیتا های استرینگی و نامبری ما دیتا های پریمتیو هستن و ما زمانی که میایم جی اس رو با حی اس  یا اینکه میام دوزاده رو با دوازده مقایسه میکنیم برای ما اینجا انجین اجرایی مرورگر مون برای کد های جاوا اسمریچتی میاد خود همون ولیو هارو ما مقایسه میکنهو چونکه جی اس مساوی با جی اس بهمون میگه که تورو و چونکه 12 از لحاظ ولیو بودن صرفا مساوی با خود 12 اینجا بازم بهمون گفت که تورو اما به ابجکت ها نمیگن دیتا تایپ پریمتیو برای همین ما توی این قسمت زمانی که میگیم برای ما بیا اینجا مقایسه بکن یک ابجت خالی رو بایک ابجت خالی اینحا دیگه العان نمیاد مقادیر و پروپرتی های داخلشو رو با هم دیگه مقایسه بکنه بلکه میاد ادرس خونه ایکه این دوتا ابجت برای ما توی حافظه و معموری کاربر اشغال کردن رو رو با هم دیگه مقایسشون میکنه و اتز اونجایی که ادرس و مکانی که هیچ دوتا خونه تو معموری یکسان نیستن هیچ ابجکتی هیچ رفرنس تایپی با هم دیگه برابر نیست من میام توی این قسمت بهش میگم که 
// ([1,2,3] === [1,2,3] ? false) چون این ارایه سمت چپ رفته توی یک خونه از معموری کاربر از حافظه کاربر  ذخیره شدن برامون  و این ارایه سمت راستی هم رفته توی یکم خونه دیگه واسمون ذخیره شدع و چونکه ادرس خونه ها حافظه و معموری کاربر با هم دیگه یک سان نیستن انگا مثل پلاک های خونه های ما هستش درسته قطعه توی یک کوچه هیچ پلاکی با همدیگه یکی نیستش پلاک خونه ما با خونه با مثلا همسایه قطعا یکی نیست و این ادرس های خونه توی معموریم دقیقا مثل همین پلاک های خونه های ما هستن و هیچکدومشونم با همدیگه یک نیستن و ما اینجا زمانی که میخایم دوتا مقدار رفرنس تایپی رو مثل همین ابجکت هارو با همدیگه مقایسشون بکنیمنمیاد ولیو و بادی داخل ش رو محتویات طرفین رو باهشون مقایسه بکنه بلکه میاد ادرس های خونه توی معموری مقایع میکنه و چونکه ادرس هاشون یکسان نیستن قطعت بهمون فالس برمیگردونه حتی اگر بگیم که 
// const showValue1 = () => console.log("object"); const showValue2 = () => console.log("object");
// (showValue1 === showValue2 ? false) و چونکه اینها هم یک ابجکت به حساب میان یک نوع رفرنس تایپ به حساب میان برای همین توی این قسمت به هیچ عنوان حتی با بادی یک سان با هم دیگه برابر نیست و همین موضوع باعکس میشه با نیاز داشته باشیم به بحث یوز کال بک 


// Aлександра Трейстер به انگلیسی نوشته می‌شود: "Alexandra Treyster".
// Alexandra Treyster
// Alexandra_Treyster
// Alexandra-Treyster
// Alexandra treyster
// Alexandra-treyster
// Alexandra_treyster
// alexandra treyster
// alexandra-treyster
// alexandra_treyster
// alexandraTreyster
// alexandratreyster

// Alexandr Treyster
// Alexandr_Treyster
// Alexandr-Treyster
// Alexandr treyster
// Alexandr-treyster
// Alexandr_treyster
// alexandr treyster
// alexandr-treyster
// alexandr_treyster
// alexandrTreyster
// alexandrtreyster
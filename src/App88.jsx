import React, { useMemo, useState } from "react";
import Btn from "./components/btn/Btn";

export default function App88() {
  const [firstNum, setFirstNum] = useState("");
  const [secondNum, setSecondNum] = useState("");

  const addFirstNumHandler = () => {
    setFirstNum((prev) => +prev + 1);
  };  
  const addSecondNumHandler = () => {
    setSecondNum((prev) => +prev + 1);
  };
  const isEvan = useMemo(() => {
    let loopingNum = 0;
    while (loopingNum < 99999) {
      loopingNum++;
      console.log(loopingNum ** 2 )
    }
    return secondNum % 2 === 0;
  }, [secondNum]);



  return (
    <div className="h100vh dfcjac g2">
      <Btn
        title={`first number ${firstNum || 0}`}
        fs="btnh1"
        onClick={addFirstNumHandler}
      />
      {secondNum && <span className="fs2 tswh ">{isEvan ? "Evant" : "Odd"}</span>}
      <Btn
        title={`second number ${secondNum || 0}`}
        fs="btnh1"
        onClick={addSecondNumHandler}
      />
    </div>
  );
}

// useMemo = مثل یوز افکت عمل میکنه میگه در اضای اپدیت فلان استیت یا هوک بیا کار های داخل انجام بده 
// useMemo = همیشه با ما یک ولیو برمیگردونه یعنی اتگار کل تابع کع بهش پاس داده شدهن فقط میاد خروجی رو بخاطر میسپاره
// useMemo = خروجی یوزممو فانکشن نیست بلکه یک ولیو بزمیگیدونه و اگر نیازی به خروحیه قبلی اون فانکشن داشتیم ئیگه احرا نمیکنه بلکه هامن خروجی قبلی که به خاطر بپرسی                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
// useMemo = به ریاکت میگه این محاسبه سخت رو انجام نده مگه اینکه دوتا چیز که در ورودی دوم بهت ارسال کردم تغییر کنن
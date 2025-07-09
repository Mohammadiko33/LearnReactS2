// 📁 فایل: number_format_help.txt
// 📝 موضوع: فرمت اعداد سه رقم سه رقم در جاوااسکریپت

// آموزش ساده فرمت اعداد
// 1- روش اصلی: استفاده از toLocaleString()
// این متد اعداد را به صورت خودکار با کاما یا جداکننده هزارگان فرمت می‌کند.


// مثال ساده:
const number = 1234567.89;
console.log(number.toLocaleString()); // خروجی: "1,234,567.89"
// 2- نحوه استفاده در React
// برای نمایش اعداد در کامپوننت‌های ری‌اکت:


function NumberDisplay({ value }) {
  return (
    <div>
      {/* تبدیل عدد به رشته فرمت شده */}
      <p>{parseFloat(value).toLocaleString()}</p>
    </div>
  );
}

// استفاده:
<NumberDisplay value="1234567.89" /> // نمایش: 1,234,567.89
// 3- نکات مهم
// 🔹 همیشه عدد را به float تبدیل کنید:


"1234567".toLocaleString() // ❌ غلط (رشته)  
parseFloat("1234567").toLocaleString() // ✅ صحیح
// 🔹 تنظیمات زبان خاص:


// فارسی:
1234567.89.toLocaleString('fa-IR'); // "۱,۲۳۴,۵۶۷.۸۹"

// عربی:
1234567.89.toLocaleString('ar-EG'); // "١٬٢٣٤٬٥٦٧٫٨٩"
// 🔹 مدیریت مقادیر خالی:


const value = "";
console.log(value ? parseFloat(value).toLocaleString() : "0"); // نمایش "0" اگر خالی باشد
// 4- مثال کاربردی در ماشین حساب

{/* <p id="result">
  {firstNum ? parseFloat(firstNum).toLocaleString() : "0"}
</p> */}
// 💡 یادآوری:
// این تغییرات فقط برای نمایش هستند!
// در محاسبات از مقادیر اصلی استفاده کنید (بدون کاما).

// ✅ مثال:


// برای محاسبه:
const realNumber = parseFloat("1,234.56".replace(/,/g, '')); // تبدیل به 1234.56

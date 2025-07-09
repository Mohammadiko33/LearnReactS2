import React, { useState } from 'react'

export default function useCalculator() {
  const [firstNum, setFirstNum] = useState("");
  const [secondNum, setSecondNum] = useState("");
  const [operator, setOperator] = useState("");

  const handleNumberInput = (value) => {
    // جلوگیری از وارد کردن چند نقطه اعشار
    if (value === '.' && firstNum.includes('.')) {
      return;
    }
    // اگر نقطه اولین کاراکتر باشد، آن را به '0.' تبدیل کن
    if (value === '.' && firstNum === '') {
      setFirstNum('0.');
      return;
    }
    setFirstNum(prev => prev + value);
  }

  const reset = () => {
    setFirstNum("");
    setSecondNum("");
    setOperator("");
  }

  const deleteLastChar = () => {
    setFirstNum(prev => prev.slice(0, -1));
  }

  const handleOperator = (op) => {
    if (firstNum === "" && secondNum !== "") {
      // اگر عدد اولی خالی است اما عدد دومی وجود دارد (مثل وقتی که نتیجه قبلی وجود دارد)
      setOperator(op);
      return;
    }

    setSecondNum(firstNum);
    setOperator(op);
    setFirstNum("");
  }

  const calculate = () => {
    if (!firstNum || !secondNum || !operator) return;

    const num1 = parseFloat(firstNum);
    const num2 = parseFloat(secondNum);
    let result;

    switch (operator) {
      case '+': result = num2 + num1; break;
      case '-': result = num2 - num1; break;
      case '*': result = num2 * num1; break;
      case '/': result = num2 / num1; break;
      default: return;
    }

    setFirstNum(result.toString());
    setSecondNum("");
    setOperator("");
  }

  const formatNumber = (num) => {
    if (num === "") return "";
    const number = parseFloat(num);
    return isNaN(number) ? num : number.toLocaleString();
  };
  // ... (بقیه کدها مانند قبل)

  return {
    firstNum,
    secondNum,
    operator,
    handleNumberInput,
    handleOperator,
    reset,
    calculate,
    deleteLastChar,
    formatNumber // اضافه کردن تابع فرمت به خروجی هوک
  }
}

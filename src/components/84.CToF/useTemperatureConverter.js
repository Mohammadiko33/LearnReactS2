import { useEffect, useState, useCallback } from 'react';

function useTemperatureConverter() {
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState(0);
  const [fromUnit, setFromUnit] = useState('C');
  const [toUnit, setToUnit] = useState('F');
  const [opa, setOpa] = useState(0);

  const convert = useCallback(() => {
    if (inputValue) {
      if (fromUnit === 'C' && toUnit === 'F') {
        setResult(((inputValue * 9 / 5) + 32));
        setOpa(1);
      } else if (fromUnit === 'F' && toUnit === 'C') {
        setResult(((inputValue - 32) * 5 / 9));
        setOpa(1);
      } else {
        setOpa(0);
      }
    }
  }, [inputValue, fromUnit, toUnit]);

  const swapUnits = () => {
    setFromUnit(toUnit);
    setToUnit(fromUnit);
    setInputValue('');
    setResult(0);
    setOpa(0);
  };

  const reset = () => {
    setInputValue('');
    setResult(0);
    setFromUnit('C');
    setToUnit('F');
    setOpa(0);
  };

  const putInputValue = value => {
    setInputValue(+value);
    setOpa(0);
  };

  useEffect(() => {
    const handleKeyUp = (e) => {
      if (e.key === "Enter") {
        convert();
      }
    };

    document.body.addEventListener('keyup', handleKeyUp);

    return () => {
      document.body.removeEventListener('keyup', handleKeyUp);
    };
  }, [convert]);

  return {
    inputValue,
    setInputValue,
    putInputValue,
    result,
    fromUnit,
    toUnit,
    convert,
    swapUnits,
    reset,
    opa
  };
}

export default useTemperatureConverter;
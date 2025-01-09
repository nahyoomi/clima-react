import { useState } from 'react';

const useTemperature = (tempCelsius: number) => {
  const [unit, setUnit] = useState<'C' | 'F'>('C');

  const toggleUnit = () => {
    setUnit((prevUnit) => (prevUnit === 'C' ? 'F' : 'C'));
  };

  const temperature =
    unit === 'C' ? tempCelsius : parseFloat(((tempCelsius * 9) / 5 + 32).toFixed(1));

  return { temperature, unit, toggleUnit };
};

export default useTemperature;
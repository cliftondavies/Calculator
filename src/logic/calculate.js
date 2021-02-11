import operate from './operate';

const calculate = (calculatorData, buttonName) => {
  let { total, next, operation } = calculatorData;
  const operations = ['+', '-', 'x', '/'];
  const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];

  if (buttonName === 'AC') {
    total = '0';
    next = '0';
    operation = null;
  } else if (digits.includes(buttonName)) {
    next += buttonName;
  } else if (buttonName === '=') {
    total = (operation) ? operate(total, next, operation) : next;
    next = '0';
    operation = null;
  } else if (operations.includes(buttonName)) {
    total = (operation) ? operate(total, next, operation) : next;
    operation = buttonName;
  } else if (buttonName === '%') {
    next = `${Number(next) / 100}`;
  } else {
    next = `-${next}`;
  }

  return { total, next, operation };
};

export default calculate;
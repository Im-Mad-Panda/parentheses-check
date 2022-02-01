// Написать функцию, которая проверяет входную строку на парность скобок и возвращает true/false в зависимости от результата

// Используйте Стэк.

// Тестовые варианты:
// ()+[()] //true
// (()+)][() //false

function checkSequence(str) {
  const stack = new Stack();

  for (const symbol of str) {
    if (symbol === "(") {
      stack.push(symbol);
    }

    if (stack.isEmpty) {
      return false;
    }

    if (symbol === ")") {
      stack.pop();
    }
  }
  return stack.isEmpty;
}

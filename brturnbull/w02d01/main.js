var userPrompt = prompt('Do you love maths?');

  while (userPrompt === 'yes') {


    var num1 = parseFloat(prompt('Enter a number'));
    var operator = prompt('Enter an operator to +, -, /, ^ and *');
    var num2 = parseFloat(prompt('Enter a number'));

    if (operator === '+') {
      alert(num1 + num2);
    } else if (operator === '-'){
      alert(num1 - num2);
    } else if (operator === '/'){
      alert(num1 / num2);
    } else if (operator === '*'){
      alert(num1 * num2);
    } else if (operator === '^'){
      alert(Math.pow(num1, num2));
    } else {
      alert('Please submit a valid equation.');
    }

    userPrompt=prompt('Do you still love maths?')
  }

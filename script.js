let output = document.getElementById('output');
const btns = document.querySelectorAll('.btn');
let equiv = document.querySelector('.equiv');




function calc(num1, num2, operator) {
   if (operator === '-')
      ans = num1 - num2;
   if (operator === '+')
      ans = num1 + num2
   if (operator === '*')
      ans = num1 * num2
   if (operator === '^')
      ans = num1 ** num2
   if (operator === '/')
      ans = num1 / num2

   return ans
}

equiv.addEventListener('click', () => {
   let equation = output.innerText
   let neweq = eval(equation)
   output.innerText = ''
   output.innerText = neweq;
})

// console.log(calc(6, 4, '^'));

btns.forEach(btn => {
   btn.addEventListener('click', (e) => {
      myValue = e.target.innerText
      output.innerText += myValue
   })

});


// let equiv =


/*
input.addEventListener('change', () => {
   let num1 = parseFloat(input.value);
   input.value = `${num1} ${operator} ${num2} calc(num1, operator, num2)`


   input.focus();

})
*/


// function cookie(string) {
//    var cookies = "cookie:" + string;
//    return cookies;
// }
// console.log("what is your favorite cookies?");
// console.log("peanuts");
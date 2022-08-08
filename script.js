let output = document.querySelector('.screen');
const btns = document.querySelectorAll('.btn');
let equiv = document.querySelector('.equiv');
let del = document.querySelector('.del');
const operators = document.querySelectorAll('.opr');

function calc(num1, num2, operator) {
   if (operator === '-')
      ans = num1 - num2;
   if (operator === '+')
      ans = num1 + num2
   if (operator === 'x')
      ans = num1 * num2
   if (operator === '^')
      ans = num1 ** num2
   if (operator === '/')
      ans = num1 / num2
   return ans;
}
// console.log(calc(3, 3, '^'));


btns.forEach(btn => {
   btn.addEventListener('click', (e) => {
      myValue = e.target.innerText;
      output.innerText += myValue;

   })
});

equiv.addEventListener('click', () => {
   let eqn = output.innerText;
   let neweqn = eval(eqn);
   output.innerText = neweqn;

   // neweqn == eval(eqn) ? equiv : '';
   output.focus();
});



del.addEventListener('click', () => {
   output.innerText = '';
})





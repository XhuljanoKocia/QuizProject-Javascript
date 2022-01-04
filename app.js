const correctAnswers = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

form.addEventListener('submit', e => {
  e.preventDefault();
  let score = 0;
  const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];
  //Check answers
  userAnswers.forEach((answer, index) => {
    if(answer === correctAnswers[index]){
      score += 25;
    }
  });
  //Show result on page
  scrollTo(0, 0);
  result.classList.remove('d-none');

  let output = 0;
  const timer = setInterval(() => {
    result.querySelector('span').textContent = `${output}%`;
    if(output === score){
      clearInterval(timer);
    } else {
      output++;
    }
  }, 10);
});

//Window Object (global object)
// setTimeout(() => {
//   alert('Hello');
// }, 3000);  //The popup will appear on the page after 3 seconds

// setInterval(() => {
//   console.log('Hello');
// }, 1000);  //Interval keeps firing every 1 second

// let i = 0;
// const timer = setInterval(() => {
//   console.log('Hello');
//   i++;
//   if(i === 5){
//     clearInterval(timer);
//   }
// }, 1000);  //The interval stops firing once i reaches 5

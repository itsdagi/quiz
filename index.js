const form = document.querySelector('.quiz-form');
const correctAnswers = ['A','A','A','A','A']
const result = document.querySelector('.result');
const questions = document.querySelectorAll('.question');
form.addEventListener('submit', event =>{

  event.preventDefault();
  
  const userAnswer = [form.q1.value, form.q2.value,form.q3.value, form.q4.value, form.q5.value]
  let score = 0;
  for(let i = 0; i< userAnswer.length; i++){

    if(userAnswer[i] === correctAnswers[i]){
      score ++
      questions[i].classList.add('correct');

    } else{
      questions[i].classList.add('wrong');
    }
  }
  scrollTo(0,0)
  result.classList.remove('hide')
  result.querySelector('p').textContent = `You scored ${score}/5`
})


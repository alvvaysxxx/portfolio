const prof = document.querySelector('.prof');
let i = 0;
const texts = [  'Interface designer based in Chishinau, Moldova',  'Django backend developer based in Chishinau, Moldova',  'JavaScript frontend developer based in Chishinau, Moldova',  'HTML/CSS frontend developer based in Chishinau, Moldova',  'Web developer based in Chishinau, Moldova'];

function changeText() {
  prof.innerHTML = texts[i];
  i = (i + 1) % texts.length; // индекс следующего текста

  setTimeout(changeText, 500); // задержка в пол секунды
}

changeText();

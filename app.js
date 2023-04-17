const nbr=document.getElementById('nbr');
const adviceinput=document.getElementById('advice');
const dice=document.getElementById('dice');

const fetchData = async () => {
  const res = await fetch('https://api.adviceslip.com/advice');
  const data = await res.json();
  const { slip } = data;
  const { id, advice } = slip;
  nbr.textContent = "#" + id;
  adviceinput.textContent = advice;
  console.log("Clicked");
}

fetchData();

dice.addEventListener('click', fetchData);

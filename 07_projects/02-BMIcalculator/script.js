const from = document.querySelector("form");
// this usecase will give you empty
// const height =  parseInt(document.querySelector('#height').value);

from.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give me a valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give me a valid Weight ${weight}`;
  }
  else{
   const bmi = (weight / ((height*height)/10000)).toFixed(2);
   //show the result 
   results.innerHTML = `<span>${bmi}</span>`;
  };
});

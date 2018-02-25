document.addEventListener('DOMContentLoaded', () => {
  
  let rainbow = d3.scaleSequential(d3.interpolateRainbow);
  let form = document.getElementById("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let val = document.getElementById("text").value;
    console.log(val);
    console.log(rainbow(parseFloat(val)));
  });
});
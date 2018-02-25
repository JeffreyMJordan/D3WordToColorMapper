document.addEventListener('DOMContentLoaded', () => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let alphabetHash = {};
  for(let i = 0; i<alphabet.length; i++){
    alphabetHash[alphabet[i]] = i.toString();
  }

  const wordToReal = (word) => {
    word = word.toLowerCase();
    let numStr = ""
    for(let i = 0; i<word.length; i++){
      numStr += alphabetHash[word[i]];
    }
    let divStr = "1";
    for(let j = 0; j<numStr.length; j++){
      divStr += "0"
    }
    return (parseFloat(numStr.split("").reverse().join(""))/parseFloat(divStr) );
  };

  let rainbow = d3.scaleSequential(d3.interpolateRainbow);
  let form = document.getElementById("form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let val = document.getElementById("text").value;
    let num = wordToReal(val);
    let colorNode = document.getElementById("color");  
    console.log(num);
    console.log(rainbow(num));
    colorNode.style.color = rainbow(num);
  });
});
const urlEncode = function(text) {
  let x = "";
  for (let i = 0; i < text.length; i++){
    if (text.charAt(i) === " "){
      x+= "%20";
    }
    else{
      x+= text.charAt(i);
  }
}
  return x;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
function pattern(num) {
  const pattern = document.getElementById("pattern");
  let output = "";
  for (let i = 1; i <= num; i++) {
    output += "*";
      console.log(output);
      pattern.innerHTML += output +"<br>";
  }
  
}
pattern(12);

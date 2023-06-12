// To display in the screen
function display(value) {
  document.getElementById("result").value += value;
}
// For Button C to clear anything typed on the screen
function clearScreen() {
  document.getElementById("result").value = "";
}
// To show result of what was calculated
function calculate() {
  var first = document.getElementById("result").value;
  var final = eval(first);
  document.getElementById("result").value = final;
}

let counter = 0;

Increment = () => {
  counter = counter + 1;
  document.getElementById('digit').innerHTML = counter;
  if (counter > 0) {
    document.getElementById('digit').style.color = "green";
  }
}
Reset = () => {
  counter = counter = 0;
  document.getElementById('digit').innerHTML = counter;
  if (counter === 0) {
    document.getElementById('digit').style.color = "black";
  }
}
Decrement = () => {
  counter = counter - 1;
  document.getElementById('digit').innerHTML = counter;
  if (counter < 0) {
    document.getElementById('digit').style.color = "red";
  }
}


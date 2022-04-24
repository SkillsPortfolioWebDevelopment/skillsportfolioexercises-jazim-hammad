//getting the elements from the id "convert" and running function on click.
document.getElementById("convert").onclick = Convert;
//function declared to convert value written in fahrenheit to celsius and kelvin.
function Convert() {
  //Variable declared for all three values and getting them through id's
  var fahrenheit = document.getElementById("fahrenheit").value;
  var celsius = document.getElementById("celsius").value;
  var kelvin = document.getElementById("kelvin").value;

  //if statement to check if fahrenheit value written
  if (fahrenheit != "") {
    celsius = (parseFloat(fahrenheit) - 32) / 1.8;
    kelvin = (parseFloat(fahrenheit) - 32) / 1.8 + 273.15;
  }
  //Output function for all values.
  document.getElementById("fahrenheit").value =
    parseFloat(fahrenheit).toFixed(1);
  document.getElementById("celsius").value = parseFloat(celsius).toFixed(1);
  document.getElementById("kelvin").value = parseFloat(kelvin).toFixed(1);
}

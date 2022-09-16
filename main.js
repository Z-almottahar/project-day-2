var x;
x = 10;

var y;
y = 12;

var z;
z = x + y;

console.log(x);
console.log(y);
console.log(z);

// defining x, y & z //



let celsius = document.getElementById('celsius')
let fahrenheit = document.getElementById('fahrenheit')

celsius.oninput = () => {
    let output = parseFloat(celsius.value /5) * 9 + 32;
    fahrenheit.value = parseFloat(output.toFixed(2));
}

fahrenheit.oninput = () => {
    let output = parseFloat((fahrenheit.value -32) *5) /9;
    celsius.value = parseFloat(output.toFixed(2));
}
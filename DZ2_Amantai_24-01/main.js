var arr = [10, 20, 30, 50, 235, 3000]
console.log(arr[0], arr[1], arr[3], arr[4]);

for(numbers = 20; numbers >= 0; numbers--)
console.log(numbers);

var svetofor = prompt('RED, YELLOW or GREEN').toLowerCase().trim()
var obj = {
    red: 'red',
    yellow: 'yellow',
    green: 'green'
}
var red = 'СТОП!'
var yellow = 'ПРИГОТОВЬСЯ...'
var green = 'ИДИ!'
switch (svetofor) {
    case obj.red:
        alert(red)
        break
    case obj.yellow:
        alert(yellow)
        break
    case obj.green:
        alert(green)
        break
    default:
        alert('Надо вводить цвета!');
}
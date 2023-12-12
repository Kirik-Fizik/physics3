function hello1() {
    var x1 = Number(document.getElementById('x1').value);
    var hmax = x1 * x1 / (2 * 10);
    var x3 = document.getElementById('x3');
    x3.innerHTML = 'Вычислить: ' + hmax; 
}
function hello2() {
    var x1 = Number(document.getElementById('x1').value);
    var vrema = 2 * x1 / 10;
    var x4 = document.getElementById('x4');
    x4.innerHTML = 'Вычислить: ' + vrema;
}
function hello3() {
    var x1 = Number(document.getElementById('x1').value);
    var vrema1 = 2 * x1 / 10;
    var x2 = Number(document.getElementById('x2').value);
    var x5 = document.getElementById('x5');
    if (x2 >= vrema1 || x2 == 0) {
        x5.innerHTML = 'Вычислить:' + ' мяч на земле';
    } else {
        var h2 = x1 * x2 - ((10 * x2 * x2) / 2);
        x5.innerHTML = 'Вычислить: ' + h2;
    }
}
function by1() {
    var y2 = Number(document.getElementById('y2').value);
    var hmax = (y2 * y2) / 20;
    var y4 = document.getElementById('y4');
    y4.innerHTML = 'Вычислить: ' + hmax;
}
function by2() {
    var y2 = Number(document.getElementById('y2').value);
    var vrema = 2 * y2 / 10;
    var y5 = document.getElementById('y5');
    y5.innerHTML = 'Вычислить: ' + vrema;
}
function by3() {
    var y1 = Number(document.getElementById('y1').value);
    var y2 = Number(document.getElementById('y2').value);
    var y3 = Number(document.getElementById('y3').value);
    var vrema = 2 * y2 / 10;
    var y6 = document.getElementById('y6');
    if (y3 == 0) {
        y6.innerHTML = 'Вычислить: 0 м(х координата), 0 м(y координата)';
    } else if (y3 >= vrema) {
        var x = y1 * vrema;
        y6.innerHTML = 'Вычислить: ' + x + ' м(х координата), 0 м(y координата)'; 
    } else {
        var x = y1 * y3;
        var y = y2 * y3 - 5 * y3 * y3;
        y6.innerHTML = 'Вычислить: ' + x + ' м(х координата), ' + y  + ' м(y координата)';
    } 
}



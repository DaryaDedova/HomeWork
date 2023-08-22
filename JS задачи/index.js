let a = document.querySelector('#one');
let a1 = document.querySelector('#one1')
document.querySelector('.oneBut').onclick = () => {
    a1.innerHTML = Math.pow(+a.value, 2);
}

let b1 = document.querySelector('#two1');
let b2 = document.querySelector('#two2');
let b = document.querySelector('#two3');
document.querySelector('.twoBut').onclick = ()=> {
    b.innerHTML = (+b1.value + +b2.value)/2;
}


let c = document.querySelector('#three');
let c1 = document.querySelector('#three1');
document.querySelector('.threeBut').onclick = () => {
    c1.innerHTML = Math.pow(+c.value, 2);
}

let d = document.querySelector('#four');
let d1 = document.querySelector('#four1');
const d2 = 0.621371;
document.querySelector('.fourBut').onclick = () => {
    d1.innerHTML = +d.value * d2
}

let i = document.querySelector('#six1');
let ii = document.querySelector('#six2');
let i3 = document.querySelector('#six3');
document.querySelector('.sixBut').onclick = () => {
    i3.innerHTML = -(+ii.value/+i.value)
}

let f = document.querySelector('#seven1');
let ff = document.querySelector('#seven2');
let f3 = document.querySelector('#seven3');
let f4 = document.querySelector('#seven4');
const f1 = 24;
const f2 = 60;
document.querySelector('.sevenBut').onclick = () => {
    f3.innerHTML = f1 - +f.value;
    f4.innerHTML = f2 - +ff.value;
}
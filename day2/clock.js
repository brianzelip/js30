// the set up
const s = document.querySelector('.hand-sec');
const m = document.querySelector('.hand-min');
const h = document.querySelector('.hand-hr');

const ts = new Date();

const rotS = (360/60)*ts.getSeconds();
const rotM = (360/60)*ts.getMinutes();
const rotH = (360/12)*ts.getHours();


// testing grounds
console.log('current time: ' + ts + '\n' + '\
current hour: ' + ts.getHours() + '\n' + '\
current min: ' + ts.getMinutes() + '\n' + '\
current sec: ' + ts.getSeconds() + '\n' + '\
\n' + '\
rotS = ' + rotS + '\n' + '\
rotM = ' + rotM + '\n' + '\
rotH = ' + rotH);

console.log(s);
console.log(m);
console.log(h);


// show time at page load
s.style.transform = 'rotate(' + rotS + 'deg)';
m.style.transform = 'rotate(' + rotM + 'deg)';
h.style.transform = 'rotate(' + rotH + 'deg)';

// animate hand

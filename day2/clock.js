const s = document.querySelector('.second');
const m = document.querySelector('.minute');
const h = document.querySelector('.hour');

function setTime() {
  const now = new Date();

  const rotS = ((now.getSeconds()/60)*360) + 90;
  const rotM = ((now.getMinutes()/60)*360) + 90;
  const rotH = ((now.getHours()/12)*360) + 90;
  // 90 degrees added to orient the hands around 12:00 position instead of 9:00

  s.style.transform = `rotate(${rotS}deg)`;
  m.style.transform = `rotate(${rotM}deg)`;
  h.style.transform = `rotate(${rotH}deg)`;
}

setInterval(setTime, 1000);


// testing grounds
// console.log('current time: ' + ts + '\n' + '\
// current hour: ' + ts.getHours() + '\n' + '\
// current min: ' + ts.getMinutes() + '\n' + '\
// current sec: ' + ts.getSeconds() + '\n' + '\
// \n' + '\
// rotS = ' + rotS + '\n' + '\
// rotM = ' + rotM + '\n' + '\
// rotH = ' + rotH);
//
// console.log(s);
// console.log(m);
// console.log(h);

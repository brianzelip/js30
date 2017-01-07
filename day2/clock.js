
const s = document.querySelector('.second');
const m = document.querySelector('.minute');
const h = document.querySelector('.hour');
const hands = document.querySelectorAll('.hand');

function setTime() {
  const now = new Date();

  const rotS = ((now.getSeconds()/60)*360) + 90;
  const rotM = ((now.getMinutes()/60)*360) + 90;
  const rotH = ((now.getHours()/12)*360) + 90;
  // 90 degrees added to orient the hands around 12:00 position instead of 9:00


  // if statement to remove the animation reset back to square one (rotate(90deg))
  // when any rotate value == 90 if `transition` and
  // `transition-timing-function` are kept in css.
  if (rotS == 90) {
    s.style.transition = 'none';
    s.style.transitionTimingFunction = 'cubic-bezier(0.1, 2.7, 0.58, 1)';
  } else if (rotS !== 90) {
    s.style.transition = 'all 0.05s';
    s.style.transitionTimingFunction = 'cubic-bezier(0.1, 2.7, 0.58, 1)';
  }

  if (rotM == 90) {
    m.style.transition = 'none';
    m.style.transitionTimingFunction = 'cubic-bezier(0.1, 2.7, 0.58, 1)';
  } else if (rotM !== 90) {
    m.style.transition = 'all 0.05s';
    m.style.transitionTimingFunction = 'cubic-bezier(0.1, 2.7, 0.58, 1)';
  }

  if (rotH == 90) {
    h.style.transition = 'none';
    h.style.transitionTimingFunction = 'cubic-bezier(0.1, 2.7, 0.58, 1)';
  } else if (rotH !== 90) {
    h.style.transition = 'all 0.05s';
    h.style.transitionTimingFunction = 'cubic-bezier(0.1, 2.7, 0.58, 1)';
  }

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

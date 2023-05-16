const lol = document.querySelector('.lol');
const cs = document.querySelector('.cs');
const lolcontent = document.getElementById('lolcontent');
const cscontent = document.getElementById('cscontent');
const root = document.documentElement;
cscontent.style.display = 'none';
lolcontent.style.display = 'flex';


lol.addEventListener('click', function() {
  lol.style.width = '95vw';
  cs.style.width = '5vw';
  lol.style.zIndex  = '2';
  cs.style.zIndex = '1';
  root.style.setProperty('--main', '#73d3f6');
  cscontent.style.display = 'none';
  lolcontent.style.display = 'flex';
})

cs.addEventListener('click', function() {
  lol.style.width = '5vw';
  cs.style.width = '95vw';
  lol.style.zIndex  = '1';
  cs.style.zIndex = '2';
  root.style.setProperty('--main', '#ff9747');
  lolcontent.style.display = 'none';
  cscontent.style.display = 'flex';
})
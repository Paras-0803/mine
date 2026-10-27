// Customize names, dates, story details, and letter text in index.html before sharing.
const screens = [...document.querySelectorAll('.screen')];
let currentScreen = 'opening';
function goTo(id) {
  const next = document.getElementById(id);
  if (!next) return;
  const current = document.getElementById(currentScreen);
  if (current && current !== next) current.classList.add('leaving');
  setTimeout(() => {
    screens.forEach(s => { s.classList.remove('active','leaving'); });
    next.classList.add('active');
    currentScreen = id;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, current && current !== next ? 220 : 0);
}
document.getElementById('openBtn').addEventListener('click', () => {
  burstHearts(22);
  goTo('story');
});
document.querySelectorAll('[data-next]').forEach(btn => btn.addEventListener('click', () => goTo(btn.dataset.next)));

const envelope = document.getElementById('envelope');
envelope.addEventListener('click', () => {
  const opened = envelope.classList.toggle('open');
  document.getElementById('loveLetter').classList.toggle('hidden', !opened);
  document.getElementById('envelopeHint').textContent = opened ? 'A little piece of my heart, just for you ♡' : 'Tap to open your letter ♡';
  if (opened) setTimeout(() => document.getElementById('loveLetter').scrollIntoView({behavior:'smooth',block:'center'}), 300);
});

document.querySelectorAll('.reason').forEach(btn => btn.addEventListener('click', () => {
  document.getElementById('reasonReveal').textContent = btn.dataset.reason;
  btn.classList.add('revealed');
  btn.querySelector('span').textContent = '♥';
  burstHearts(4, btn.getBoundingClientRect());
}));

// Gallery controls highlight one memory at a time; replace the placeholder cards with your own photos.
const cards = [...document.querySelectorAll('.photo-card')];
let galleryIndex = 0;
function setGallery(index) {
  galleryIndex = (index + cards.length) % cards.length;
  cards.forEach((card, i) => {
    card.style.opacity = i === galleryIndex ? '1' : '.55';
    card.style.transform = i === galleryIndex ? 'scale(1.015)' : 'scale(.98)';
  });
  document.getElementById('galleryCount').textContent = `0${galleryIndex+1} / 0${cards.length}`;
}
document.getElementById('prevPhoto').addEventListener('click', () => setGallery(galleryIndex - 1));
document.getElementById('nextPhoto').addEventListener('click', () => setGallery(galleryIndex + 1));
setGallery(0);

document.getElementById('yesBtn').addEventListener('click', () => {
  goTo('celebration');
  launchConfetti(150);
  burstHearts(30);
});
document.getElementById('talkBtn').addEventListener('click', () => goTo('feelings'));
document.getElementById('replayBtn').addEventListener('click', () => {
  envelope.classList.remove('open');
  document.getElementById('loveLetter').classList.add('hidden');
  document.getElementById('envelopeHint').textContent = 'Tap to open your letter ♡';
  document.querySelectorAll('.reason').forEach(btn => { btn.classList.remove('revealed'); btn.querySelector('span').textContent='♡'; });
  document.getElementById('reasonReveal').textContent = 'Your next little love note is waiting…';
  setGallery(0);
  goTo('opening');
});

const sky = document.getElementById('sky');
for (let i=0; i<95; i++) {
  const star = document.createElement('i');
  star.className='star';
  const size = Math.random()*2.5 + .5;
  star.style.width = `${size}px`; star.style.height = `${size}px`;
  star.style.left = `${Math.random()*100}%`; star.style.top = `${Math.random()*100}%`;
  star.style.animationDelay = `${Math.random()*4}s`; star.style.animationDuration = `${2+Math.random()*4}s`;
  sky.appendChild(star);
}
const petals = document.getElementById('petals');
for (let i=0; i<14; i++) {
  const p = document.createElement('span'); p.className='petal'; p.textContent = Math.random() > .5 ? '✿' : '♥';
  p.style.left = `${Math.random()*100}%`; p.style.animationDelay = `${Math.random()*20}s`;
  p.style.animationDuration = `${18+Math.random()*20}s`; p.style.fontSize = `${9+Math.random()*12}px`;
  petals.appendChild(p);
}
function burstHearts(count, rect) {
  const x = rect ? rect.left + rect.width/2 : window.innerWidth/2;
  const y = rect ? rect.top + rect.height/2 : window.innerHeight*.45;
  for (let i=0;i<count;i++) {
    const heart=document.createElement('span'); heart.textContent=Math.random()>.5?'♥':'♡';
    heart.style.cssText=`position:fixed;z-index:30;left:${x}px;top:${y}px;color:${['#ff8db9','#ffc8df','#cbb4ff'][i%3]};font-size:${12+Math.random()*22}px;pointer-events:none;transition:transform 1.4s ease,opacity 1.4s ease;`;
    document.body.appendChild(heart);
    requestAnimationFrame(()=>{heart.style.transform=`translate(${(Math.random()-.5)*260}px,${-80-Math.random()*260}px) rotate(${Math.random()*80-40}deg)`;heart.style.opacity='0';});
    setTimeout(()=>heart.remove(),1500);
  }
}
function launchConfetti(count) {
  const container=document.getElementById('confetti');
  const colors=['#ff8db9','#ffd3e5','#c6a9ff','#fff0b5','#f8f4ff'];
  for(let i=0;i<count;i++){
    const bit=document.createElement('i'); bit.className='confetti-piece';
    bit.style.left=`${Math.random()*100}vw`; bit.style.background=colors[i%colors.length];
    bit.style.animationDelay=`${Math.random()*1.5}s`; bit.style.animationDuration=`${2.5+Math.random()*2.5}s`;
    bit.style.setProperty('--drift',`${Math.random()*220-110}px`);
    if(Math.random()>.6) bit.style.borderRadius='50%';
    container.appendChild(bit); setTimeout(()=>bit.remove(),5500);
  }
}

// Browser audio requires a real audio file and user interaction. The control reports its current state.
const music = document.getElementById('music');
const musicToggle = document.getElementById('musicToggle');
let musicOn = false;
musicToggle.addEventListener('click', async () => {
  if (!musicOn) {
    try { await music.play(); musicOn = true; musicToggle.innerHTML='♫ <span>Music on</span>'; }
    catch { musicToggle.innerHTML='♫ <span>Add music file</span>'; }
  } else {
    music.pause(); musicOn = false; musicToggle.innerHTML='♫ <span>Music off</span>';
  }
});

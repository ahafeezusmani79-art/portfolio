/* CURSOR */
const cur=document.getElementById('cur'),ring=document.getElementById('curRing');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;});
(function animC(){cur.style.left=mx+'px';cur.style.top=my+'px';rx+=(mx-rx)*.12;ry+=(my-ry)*.12;ring.style.left=rx+'px';ring.style.top=ry+'px';requestAnimationFrame(animC);})();

/* PROGRESS */
const prog=document.getElementById('progress');
window.addEventListener('scroll',()=>{const s=document.documentElement;prog.style.width=(s.scrollTop/(s.scrollHeight-s.clientHeight)*100)+'%';});

/* NAV */
const navbar=document.getElementById('navbar');
window.addEventListener('scroll',()=>navbar.classList.toggle('scrolled',window.scrollY>50));
function toggleNav(){const nl=document.getElementById('navLinks');nl.classList.toggle('open');document.getElementById('navToggle').textContent=nl.classList.contains('open')?'✕':'☰';}
function closeNav(){document.getElementById('navLinks').classList.remove('open');document.getElementById('navToggle').textContent='☰';}
document.addEventListener('click',e=>{if(!e.target.closest('nav'))closeNav();});

/* DOT CANVAS */
const canvas=document.getElementById('dotCanvas'),ctx=canvas.getContext('2d');
let dots=[];
function resizeC(){canvas.width=canvas.offsetWidth;canvas.height=canvas.offsetHeight;dots=[];const cols=Math.floor(canvas.width/44),rows=Math.floor(canvas.height/44);for(let r=0;r<=rows;r++)for(let c=0;c<=cols;c++)dots.push({x:c*44,y:r*44,o:Math.random()*.4+.05,spd:Math.random()*.005+.002});}
resizeC();window.addEventListener('resize',resizeC);
(function drawD(){ctx.clearRect(0,0,canvas.width,canvas.height);dots.forEach(d=>{d.o+=d.spd;if(d.o>.45||d.o<.05)d.spd*=-1;ctx.beginPath();ctx.arc(d.x,d.y,1.5,0,Math.PI*2);ctx.fillStyle=`rgba(56,189,248,${d.o})`;ctx.fill();});requestAnimationFrame(drawD);})();

/* TYPED */
const roles=['Aspiring MERN Stack Developer.','React Developer.','Java Learner.','Logo Designer.','UI Enthusiast.'];
let ri=0,ci=0,del=false;const typedEl=document.getElementById('typed');
function typeLoop(){const w=roles[ri];if(!del){typedEl.textContent=w.slice(0,++ci);if(ci===w.length){del=true;setTimeout(typeLoop,1600);return;}}else{typedEl.textContent=w.slice(0,--ci);if(ci===0){del=false;ri=(ri+1)%roles.length;}}setTimeout(typeLoop,del?45:80);}
typeLoop();

/* REVEAL */
const revObs=new IntersectionObserver((es)=>{es.forEach((e,i)=>{if(e.isIntersecting){setTimeout(()=>e.target.classList.add('up'),i*70);revObs.unobserve(e.target);}});},{threshold:.1});
document.querySelectorAll('.reveal').forEach(el=>revObs.observe(el));

/* COUNT UP */
function runC(el){const t=+el.dataset.target,sfx=el.dataset.suffix||'';let v=0;const s=t/55,ti=setInterval(()=>{v+=s;if(v>=t){v=t;clearInterval(ti);}el.textContent=Math.round(v)+sfx;},22);}
const cObs=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting){runC(e.target);cObs.unobserve(e.target);}});},{threshold:.5});
document.querySelectorAll('.count-up').forEach(el=>cObs.observe(el));

/* SKILLS */
const skills=[
  {icon:'🌐',name:'HTML5',pct:92},{icon:'🎨',name:'CSS3',pct:88},
  {icon:'⚡',name:'JavaScript',pct:78},{icon:'☕',name:'Java',pct:70},
  {icon:'🐙',name:'GitHub',pct:80},{icon:'✏️',name:'Logo Design',pct:85},
  {icon:'📱',name:'Responsive Design',pct:90},{icon:'🖥️',name:'UI/UX Design',pct:75},
   {icon:'⚛️',name:'React',pct:78}, {icon:'🧠',name:'Problem Solving',pct:75},
];
document.getElementById('skillsGrid').innerHTML=skills.map(s=>`
  <div class="skill-card reveal">
    <div class="skill-icon">${s.icon}</div>
    <div class="skill-name">${s.name}</div>
    <div class="skill-bar"><div class="skill-fill" data-pct="${s.pct}"></div></div>
    <div class="skill-pct">${s.pct}%</div>
  </div>`).join('');
document.querySelectorAll('.skill-card.reveal').forEach(el=>revObs.observe(el));
const barObs=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting){e.target.style.width=e.target.dataset.pct+'%';barObs.unobserve(e.target);}});},{threshold:.3});
document.querySelectorAll('.skill-fill').forEach(el=>barObs.observe(el));

/* TECH */
const tech=[
  'HTML5',
  'CSS3',
  'JavaScript',
  'React',
  'Java',
  'Git',
  'GitHub',
  'VS Code',
  'Vite',
  'REST API',
  'Netlify'
];
document.getElementById('techGrid').innerHTML=tech.map(t=>`<div class="tech-badge"><span class="tech-dot"></span>${t}</div>`).join('');

/* PROJECTS
   To add your screenshot: replace the empty img src="" below with your image path.
   e.g. src="screenshots/analytics-nest.png"
   Recommended size: 1280×800px or any 16:9 image.
*/
const projects=[
  {
    tag:'Analytics', title:'Analytics Nest',
    desc:'A modern analytics landing page with responsive layouts, professional UI components, and clean design — built with HTML, CSS, and JavaScript.',
    stack:['HTML5','CSS3','JavaScript','Netlify'],
    demo:'https://glowing-narwhal-f3d955.netlify.app/',
    github:'https://github.com/ahafeezusmani79-art/finalanalyticsnest',
    img:'analyticsnest.jpeg',  /* ← paste your screenshot path here */
    label:'analytics-nest'
  },
  {
    tag:'Fitness', title:'FITX Fitness',
    desc:'A premium fitness website with training programs, membership pricing, trainer profiles, and a fully responsive layout built to convert visitors into members.',
    stack:['HTML5','CSS3','JavaScript','Netlify'],
    demo:'https://ephemeral-torrone-a02c5b.netlify.app/',
    github:'https://ahafeezusmani79-art.github.io/fitx/',
    img:'fitx.jpeg',  /* ← paste your screenshot path here */
    label:'fitx-fitness'
  },
{
  tag:'React • API Integration',
  title:'Weather Dashboard',

  desc:'A modern weather application built with React, featuring real-time weather data, city search, dynamic weather details, and a responsive user interface.',

  stack:['React','JavaScript','REST API','CSS3'],

  demo:'https://coruscating-souffle-c3ab12.netlify.app/',

  github:'https://github.com/ahafeezusmani79-art/reactweather',

  img:'weather.jpeg',

  label:'weather-dashboard'
},
];

const placeholderSVG = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="4" y="8" width="40" height="28" rx="3" stroke="#6b7280" stroke-width="2"/>
  <path d="M4 30l10-9 8 7 6-5 8 7" stroke="#6b7280" stroke-width="2" stroke-linejoin="round"/>
  <circle cx="15" cy="19" r="3" stroke="#6b7280" stroke-width="2"/>
  <path d="M16 40h16" stroke="#6b7280" stroke-width="2" stroke-linecap="round"/>
  <path d="M24 36v4" stroke="#6b7280" stroke-width="2" stroke-linecap="round"/>
</svg>`;

document.getElementById('projectsGrid').innerHTML = projects.map(p => `
  <div class="project-card reveal">

    <!-- Browser chrome bar -->
    <div class="proj-browser">
      <div class="proj-dots">
        <div class="proj-dot r"></div>
        <div class="proj-dot y"></div>
        <div class="proj-dot g"></div>
      </div>
      <div class="proj-url">${p.demo.replace('https://','')}</div>
    </div>

    <!-- Image slot: shows your screenshot when img src is set, otherwise shows placeholder -->
    <div class="proj-img-slot">
      ${p.img
        ? `<img src="${p.img}" alt="${p.title} screenshot" loading="lazy">`
        : `<div class="proj-placeholder">
             ${placeholderSVG}
             <span>Add screenshot:<br><strong style="color:var(--text)">${p.label}.png</strong></span>
           </div>`
      }
      <div class="proj-img-overlay">
        <a href="${p.demo}" target="_blank" class="proj-live-btn">↗ View Live</a>
      </div>
    </div>

    <!-- Info -->
    <div class="proj-info">
      <div class="project-header">
        <span class="project-tag">${p.tag}</span>
        <div class="project-links">
          <a href="${p.demo}" target="_blank" class="project-link" title="Live Demo">↗</a>
          <a href="${p.github}" target="_blank" class="project-link" title="GitHub">⬡</a>
        </div>
      </div>
      <h3>${p.title}</h3>
      <p>${p.desc}</p>
      <div class="project-stack">${p.stack.map(s=>`<span class="stack-chip">${s}</span>`).join('')}</div>
    </div>

  </div>`).join('');

document.querySelectorAll('.project-card.reveal').forEach(el=>revObs.observe(el));

/* CONTACT FORM */
function val(id,errId,fn){const el=document.getElementById(id),err=document.getElementById(errId),ok=fn(el.value.trim());el.classList.toggle('err',!ok);if(err)err.classList.toggle('show',!ok);return ok;}
function submitForm(){
  const v1=val('fname','fnameErr',v=>v.length>=2);
  const v2=val('lname','lnameErr',v=>v.length>=2);
  const v3=val('femail','femailErr',v=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v));
  const v4=val('fmsg','fmsgErr',v=>v.length>=10);
  if(!v1||!v2||!v3||!v4)return;
  const btn=document.getElementById('submitBtn');
  document.getElementById('submitTxt').textContent='Sending…';
  btn.disabled=true;
  setTimeout(()=>{
    const t=document.getElementById('formToast');
    t.className='form-toast ok';t.textContent="✓ Message sent! I'll reply within 24 hours.";
    document.getElementById('submitTxt').textContent='Send Message';btn.disabled=false;
    ['fname','lname','femail','fsubject','fmsg'].forEach(id=>document.getElementById(id).value='');
    setTimeout(()=>t.className='form-toast',6000);
  },1400);
}
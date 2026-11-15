
const toggle=document.querySelector('.menu-toggle'),nav=document.querySelector('.navlinks');
if(toggle&&nav){toggle.addEventListener('click',()=>{nav.classList.toggle('open');toggle.setAttribute('aria-expanded',nav.classList.contains('open')?'true':'false')});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')))}
const search=document.querySelector('#articleSearch'),cards=[...document.querySelectorAll('[data-article]')],filters=[...document.querySelectorAll('[data-filter]')];
let active='Semua';
function filterArticles(){const q=(search?.value||'').toLowerCase();cards.forEach(c=>{const cat=c.dataset.category||'',txt=c.innerText.toLowerCase();c.hidden=!( (active==='Semua'||cat===active) && txt.includes(q) )})}
filters.forEach(f=>f.addEventListener('click',()=>{filters.forEach(x=>x.classList.remove('active'));f.classList.add('active');active=f.dataset.filter;filterArticles()}));if(search)search.addEventListener('input',filterArticles);
const form=document.querySelector('#contactForm');if(form)form.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(form),subject=encodeURIComponent('Pesan dari website PAKWK.ONLINE: '+d.get('subject')),body=encodeURIComponent('Nama: '+d.get('name')+'\\nEmail: '+d.get('email')+'\\n\\n'+d.get('message'));window.location.href='mailto:visjnoe.08@gmail.com?subject='+subject+'&body='+body;});

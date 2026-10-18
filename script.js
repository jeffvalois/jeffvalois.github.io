document.addEventListener('DOMContentLoaded',()=>{
  const buttons=document.querySelectorAll('[data-filter]');
  const items=document.querySelectorAll('[data-cat]');
  buttons.forEach(btn=>btn.addEventListener('click',()=>{
    buttons.forEach(b=>b.classList.remove('active'));btn.classList.add('active');
    const f=btn.dataset.filter; items.forEach(i=>i.classList.toggle('hide',f!=='all'&&i.dataset.cat!==f));
  }));
  const lb=document.querySelector('.lightbox'); if(lb){
    const img=lb.querySelector('img'); document.querySelectorAll('.gallery-item img').forEach(el=>el.addEventListener('click',()=>{img.src=el.src;lb.classList.add('open')}));
    lb.addEventListener('click',e=>{if(e.target===lb||e.target.tagName==='BUTTON')lb.classList.remove('open')});
  }
});

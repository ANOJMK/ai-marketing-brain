(function(){
  const C=window.BAL_CONFIG||{};
  const store={get(k,d=null){try{return JSON.parse(localStorage.getItem('bal_'+k))??d}catch{return localStorage.getItem('bal_'+k)||d}},set(k,v){localStorage.setItem('bal_'+k,JSON.stringify(v))}};
  window.BAL={
    config:C,store,
    endpoint(name){return (C.apiBaseUrl||'').replace(/\/$/,'')+((C.endpoints||{})[name]||'')},
    toast(msg){const t=document.getElementById('toast');if(!t)return;t.textContent=msg;t.style.display='block';setTimeout(()=>t.style.display='none',3000)},
    go(url){location.href=url},
    escape(s){return String(s??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]))},
    async post(endpoint,body){const r=await fetch(endpoint,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(body)});const text=await r.text();let data;try{data=JSON.parse(text)}catch{data={raw:text}}if(!r.ok)throw new Error(data.error_description||data.message||data.error||('HTTP '+r.status));return data}
  };
  document.addEventListener('DOMContentLoaded',()=>{
    document.querySelectorAll('[data-nav]').forEach(a=>{if(a.getAttribute('href')===location.pathname.split('/').pop())a.classList.add('active')});
    document.querySelectorAll('[data-back]').forEach(b=>b.addEventListener('click',()=>history.back()));
  });
})();

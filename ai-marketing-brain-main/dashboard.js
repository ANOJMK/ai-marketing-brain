
document.querySelectorAll('.metric').forEach(el=>{
 let v=parseInt(el.dataset.value||0),i=0;
 let t=setInterval(()=>{i+=Math.ceil(v/30); if(i>=v){i=v;clearInterval(t);} el.textContent=i;},30);
});

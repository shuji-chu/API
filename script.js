function showToast(msg,type='info'){
  const old=document.getElementById('globalToast');if(old)old.remove();
  const t=document.createElement('div');t.id='globalToast';
  t.style.cssText='position:fixed;top:20px;left:50%;transform:translateX(-50%);background:rgba(15,23,42,.95);color:#fff;padding:12px 20px;border-radius:12px;font-size:14px;z-index:9999;transition:all .3s;opacity:0';
  t.textContent=msg;document.body.appendChild(t);
  requestAnimationFrame(()=>{t.style.opacity='1';t.style.top='30px'});
  setTimeout(()=>{t.style.opacity='0';setTimeout(()=>t.remove(),300)},2500);
}
function copyText(text){
  if(navigator.clipboard){navigator.clipboard.writeText(text).then(()=>showToast('已复制','success')).catch(()=>fallbackCopy(text))}
  else{fallbackCopy(text)}
}
function fallbackCopy(text){
  const ta=document.createElement('textarea');ta.value=text;ta.style.position='fixed';ta.style.opacity='0';
  document.body.appendChild(ta);ta.select();
  try{document.execCommand('copy');showToast('已复制','success')}catch(e){showToast('复制失败','error')}
  document.body.removeChild(ta);
}
function toggleProfileMenu(e){
  if(e)e.stopPropagation();
  const m=document.getElementById('profileMenu');if(m)m.classList.toggle('show');
}
document.addEventListener('click',function(){
  const m=document.getElementById('profileMenu');if(m&&m.classList.contains('show'))m.classList.remove('show');
});
function toggleDarkMode(){
  document.body.classList.toggle('dark-mode');
  const d=document.body.classList.contains('dark-mode');
  localStorage.setItem('darkMode',d?'1':'0');
  showToast(d?'已切换深色模式':'已切换浅色模式','info');
}
document.addEventListener('DOMContentLoaded',function(){
  if(localStorage.getItem('darkMode')==='1')document.body.classList.add('dark-mode');
});
function copyMyId(){copyText('10001')}
function logout(){showToast('需接入后端才能真退出','info')}
function openSearch(){
  document.getElementById('searchOverlay').classList.add('show');
  document.getElementById('searchInput').focus();
}
function closeSearch(e){
  if(e.target.id==='searchOverlay')document.getElementById('searchOverlay').classList.remove('show');
}
function doSearch(){
  const input=document.getElementById('searchInput').value.toLowerCase();
  const el=document.getElementById('searchResults');
  if(!input){el.innerHTML='';return}
  let results=[];
  for(const cat in allApis){
    allApis[cat].forEach(api=>{
      if(api.name.toLowerCase().includes(input)||api.desc.toLowerCase().includes(input))results.push(api);
    });
  }
  if(!results.length){el.innerHTML='<div class="search-item">没有找到</div>';return}
  el.innerHTML=results.map(api=>`<div class="search-item" onclick="location.href='doc.html?id=${api.id}'"><strong>${api.name}</strong> - ${api.desc}</div>`).join('');
}
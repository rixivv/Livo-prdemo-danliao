(function(){
  const path=location.pathname;
  const current=path.includes("/zhaojian/")?"zhaojian":path.includes("/map/")?"world":"chat";
  const base=current==="chat"?".":"../../..";
  const items=[
    {id:"chat",label:"单聊模块",description:"文字对话、实时对话数字人、实时演绎动画、离开",href:`${base}/index.html?module=chat`},
    {id:"world",label:"世界模块",description:"地图探索、世界动态、命运推演与世界背面",href:current==="chat"?"./livo-world/tilia/map/index.html":"../map/index.html"},
    {id:"zhaojian",label:"照见模块",description:"人格图谱、情绪地图、关系舞台与生活点滴",href:current==="chat"?"./livo-world/tilia/zhaojian/index.html":"../zhaojian/index.html"}
  ];
  let aside=document.querySelector(".livo-module-switch");
  if(!aside){
    aside=document.createElement("aside");
    aside.className="livo-module-switch";
    aside.setAttribute("aria-label","PR demo 模块切换");
    aside.innerHTML=`<button class="livo-module-switch-toggle" type="button" aria-label="收起模块导航" aria-expanded="true"><span aria-hidden="true">‹</span></button><p class="livo-module-switch-eyebrow">demo演示</p><h1>PR demo</h1><nav>${items.map(item=>`<a class="${item.id===current?"is-active":""}" href="${item.href}" ${item.id===current?'aria-current="page"':""}><small>${item.label}</small><strong>${item.description}</strong></a>`).join("")}</nav>`;
    document.body.appendChild(aside);
  }
  const toggle=aside.querySelector(".livo-module-switch-toggle");
  toggle.addEventListener("click",function(){
    const collapsed=aside.classList.toggle("is-collapsed");
    toggle.setAttribute("aria-expanded",String(!collapsed));
    toggle.setAttribute("aria-label",collapsed?"展开模块导航":"收起模块导航");
  });
  function positionAside(){
    const phone=document.querySelector("[data-phone-frame]")||document.querySelector(".phone");
    if(!phone)return;
    const rect=phone.getBoundingClientRect();
    aside.style.left=`${Math.max(18,rect.left-403)}px`;
  }
  positionAside();
  window.addEventListener("resize",positionAside);
  new ResizeObserver(positionAside).observe(document.documentElement);
})();

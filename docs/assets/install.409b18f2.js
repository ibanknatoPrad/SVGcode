import{b as l}from"./index.a1ccdec1.js";let e=null;window.addEventListener("beforeinstallprompt",t=>{t.preventDefault(),e=t,l.style.display="flex"});l.addEventListener("click",async()=>{if(!e)return;e.prompt(),(await e.userChoice).outcome==="accepted"&&(l.style.display="none",e=null)});window.addEventListener("appinstalled",t=>{l.style.display="none",e=null});